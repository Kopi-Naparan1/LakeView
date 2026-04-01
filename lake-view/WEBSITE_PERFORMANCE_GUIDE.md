# Website Performance Guide

This file explains:

1. Why this site was making many requests during initialization
2. What we changed in this project to reduce that burst
3. How to reuse the same ideas in your next React/Vite website
4. What to measure before and after changes

This is written as a practical guide, not just theory.

---

## 1. The Main Idea

A site can feel slow even when the total transferred size is not huge.

The real problem is usually one or more of these:

- Too many requests start at the same time
- Too many large images load on first paint
- Too much JavaScript is needed before the page becomes interactive
- The app preloads things the user may never visit
- Below-the-fold sections load too early

For this project, the big issue was mostly **asset loading**, not API requests.

That means:

- image requests
- route chunk requests
- eager loading of sections that are not immediately visible

were the main reasons the site felt heavy on startup.

---

## 2. What Was Happening In This Project

### 2.1 There were no real API bursts

When we searched the codebase, there was no real API layer firing requests on mount:

- no `fetch(...)`
- no `axios`
- no React Query
- no SWR
- no route loaders

So the large Network burst was mostly **static assets**, especially images.

### 2.2 Too many images were available too early

The site has many imported images across pages:

- hero images
- gallery images
- testimonials
- service cards
- about carousels

Even if some images use `loading="lazy"`, the total page structure and section mounting still matter.

If a big section mounts immediately, the browser has to:

- parse the section
- lay it out
- decide image priority
- start loading images that it believes are relevant soon

### 2.3 Broad route preloading increased startup work

At one point, the app was warming multiple route chunks during idle.

That makes navigation feel nice, but it also adds more startup network activity.

This is the wrong tradeoff if the home page is already heavy.

### 2.4 Below-the-fold sections were too eager

If a section is far below the fold, it should usually not fully mount on first load.

Typical examples:

- gallery grids
- testimonials
- FAQs
- CTA sections near the bottom

These sections often contain:

- more images
- more DOM
- more CSS work
- more JS modules

Even when each part looks harmless, together they create a heavy first load.

---

## 3. What We Changed In This Repo

### 3.1 We kept only critical content mounted immediately

For the home page, these stay mounted at startup:

- `Hero`
- `About`
- `Services`

These are the parts most likely to matter first.

### 3.2 We deferred non-critical home sections

These sections now mount only when the user gets near them:

- `GalleryPreview`
- `ParkGuidelines`
- `Testimonial`
- `FinalCTA`

This was done with a shared wrapper component:

- `src/components/DeferredSection.jsx`

The idea is:

- render a placeholder space first
- observe when the section is close to the viewport
- only then mount the actual React section

This reduces:

- initial DOM work
- early image requests
- early JS chunk loading

### 3.3 We split deferred sections into lazy chunks

In `src/Pages/Home/Home.jsx`, some below-the-fold sections are now loaded with `React.lazy(...)`.

That means their code is not included in the first home-page chunk.

This is important.

If you only defer rendering but still include all section code in the initial bundle, you reduce some work, but not enough.

By combining:

- `DeferredSection`
- `React.lazy`
- `Suspense`

you reduce both:

- initial JavaScript
- initial visual/asset work

### 3.4 We removed broad idle route preloading

We removed the pattern where all routes were being preloaded automatically during startup idle time.

That helps the home page focus on:

- its own critical code
- its own critical assets

instead of warming routes the user may never open.

### 3.5 We kept route prefetch on user intent

We did **not** remove route preloading completely.

We kept the better version:

- preload only when the user shows intent

Examples of intent:

- mouse enters a link
- keyboard focus lands on a link
- touch starts on a link

This is much better than preloading everything immediately.

It keeps navigation feeling fast without making startup heavy.

---

## 4. The Core Concepts You Should Reuse On Future Websites

Think about performance in this order:

### Rule 1: Only one image should be truly high priority on first paint

Usually that is the main hero image.

Good:

- one hero image with `loading="eager"`
- one hero image with `fetchPriority="high"`

Bad:

- multiple large images all marked eager
- many hero-like sections on first screen

### Rule 2: Below-the-fold sections should not fully load on startup

If the user cannot see it immediately, you should ask:

> Does this really need to mount right now?

Very often the answer is no.

### Rule 3: Prefetch by intent, not by panic

Do not preload:

- every route
- every image
- every future page

Instead preload only:

- the most likely next route
- the route linked by the button the user is hovering/focusing/touching

### Rule 4: Big images should be responsive

If the UI shows an image at a smaller size, do not always send the largest file.

Use:

- `srcSet`
- `sizes`
- width/height

This allows the browser to choose the right asset size.

### Rule 5: Measure production, not dev

Vite dev mode is not a performance benchmark.

Always measure with:

```bash
npm run build
npm run preview
```

Dev mode includes extra work:

- hot reload support
- unoptimized modules
- React Strict Mode double-invocation behavior in development

---

## 5. A Good Mental Model For Website Loading

Imagine the page loads in layers.

### Layer 1: Critical

Load immediately:

- app shell
- header
- hero
- main above-the-fold text
- one critical hero image

### Layer 2: Near-critical

Load soon, but not instantly:

- the next section or two
- route chunks for likely next click
- small decorative assets if needed

### Layer 3: Deferred

Load only when near viewport:

- large galleries
- testimonials
- long FAQs
- big card lists
- bottom CTAs

### Layer 4: Never preload unless needed

- routes the user may not visit
- heavy media far below the fold
- secondary pages
- assets for hidden tabs/carousels/slides

If you design your pages this way from the start, they are easier to optimize later.

---

## 6. Reusable Setup For Your Next Website

Use this as your default approach.

### 6.1 Create a shared image component

Example:

```jsx
export default function AppImage({
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  sizes,
  srcSet,
  width,
  height,
  ...props
}) {
  return (
    <img
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      sizes={sizes}
      srcSet={srcSet}
      width={width}
      height={height}
      {...props}
    />
  );
}
```

Why this helps:

- one place to control image-loading defaults
- lazy by default
- explicit width/height support
- easy to add improvements later

### 6.2 Create a shared deferred section wrapper

Example:

```jsx
import { useEffect, useRef, useState } from "react";

export default function DeferredSection({
  children,
  minHeight = "24rem",
  rootMargin = "600px 0px",
}) {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [mounted, rootMargin]);

  return (
    <div ref={ref} style={mounted ? undefined : { minHeight }}>
      {mounted ? children : null}
    </div>
  );
}
```

Why this helps:

- prevents big lower sections from mounting too early
- reduces request bursts
- lowers first-load rendering pressure

### 6.3 Lazy-load heavy sections

Example:

```jsx
import { lazy, Suspense } from "react";

const GallerySection = lazy(() => import("./GallerySection"));
const Testimonials = lazy(() => import("./Testimonials"));
```

Then combine it with `DeferredSection`:

```jsx
<DeferredSection minHeight="32rem">
  <Suspense fallback={<div style={{ minHeight: "32rem" }} />}>
    <GallerySection />
  </Suspense>
</DeferredSection>
```

This is one of the best simple patterns for marketing sites.

### 6.4 Prefetch routes only on intent

Keep a route preload helper:

```jsx
const pageLoaders = {
  "/": () => import("./Pages/Home/Home"),
  "/about": () => import("./Pages/About/About"),
  "/contact": () => import("./Pages/Contact/Contact"),
};

const preloadCache = new Map();

export function preloadRoute(pathname) {
  if (!pageLoaders[pathname]) return Promise.resolve(null);

  if (!preloadCache.has(pathname)) {
    preloadCache.set(pathname, pageLoaders[pathname]());
  }

  return preloadCache.get(pathname);
}
```

Then use it on links:

```jsx
<Link
  to="/contact"
  onMouseEnter={() => void preloadRoute("/contact")}
  onFocus={() => void preloadRoute("/contact")}
  onTouchStart={() => void preloadRoute("/contact")}
>
  Contact
</Link>
```

This is usually better than preloading every route on startup.

---

## 7. How To Decide What Is Critical vs Non-Critical

Ask these questions for every section:

### Critical

Use critical loading if the section:

- is visible immediately on page load
- affects first impression
- contains the main CTA
- contains the main heading and positioning of the page

### Non-critical

Defer it if the section:

- is below the fold
- has many images
- is mainly supporting content
- is repeated or decorative
- can appear a bit later without harming UX

Examples of sections you usually defer:

- testimonials
- gallery grids
- blog previews
- FAQ
- bottom CTA
- large location/media sections

Examples you usually do not defer:

- header
- hero
- main CTA
- top summary section

---

## 8. Common Mistakes To Avoid

### Mistake 1: Loading all routes on startup

This feels clever, but often hurts first load.

Do this instead:

- preload only on user intent

### Mistake 2: Using many full-size images in small cards

If a card shows a medium image but downloads a huge one, you are wasting bandwidth.

Do this instead:

- create smaller variants later
- use `srcSet` and `sizes`

### Mistake 3: Deferring render but not code

If the section is deferred visually but its code is still bundled into the first route chunk, the improvement is limited.

Do this instead:

- defer the section
- lazy-load the section module too

### Mistake 4: Measuring in dev mode

Dev mode exaggerates load costs.

Do this instead:

- measure production build

### Mistake 5: Marking many images as eager

That makes the browser compete among too many “important” assets.

Do this instead:

- one important hero image first
- everything else lazy unless proven necessary

### Mistake 6: No placeholder height for deferred sections

If you defer a section without placeholder space, the page can jump.

Do this instead:

- give deferred sections a `minHeight`

---

## 9. How To Measure Properly In Chrome DevTools

Use this process every time.

### Step 1: Use production mode

Run:

```bash
npm run build
npm run preview
```

### Step 2: Open DevTools Network tab

Look for:

- request count
- transferred size
- image requests
- JS chunk requests
- when requests start

Important:

Do not only look at total MB.

Also look at:

- which requests start immediately
- which requests block rendering
- whether below-the-fold images start too soon

### Step 3: Check Performance tab

Look at:

- LCP
- layout shifts
- scripting time
- long tasks

### Step 4: Use throttling

Test on:

- Slow 4G
- mid-tier CPU throttle

Because a site that feels fast on your machine may still feel slow on a normal phone.

---

## 10. A Simple Optimization Workflow You Can Reuse

Use this exact order:

### Pass 1: Remove unnecessary startup work

- stop broad route preloading
- keep only one eager hero image
- defer lower sections

### Pass 2: Reduce initial bundle size

- lazy-load lower sections
- split route code better

### Pass 3: Improve image delivery

- create smaller image variants
- add `srcSet`
- add `sizes`
- ensure width/height are present

### Pass 4: Polish navigation

- add intent-based route prefetch
- keep revisited routes warm if useful

### Pass 5: Measure again

- compare request count
- compare startup burst
- compare LCP and interactive feel

This order matters.

Do not start by micro-optimizing components if the real problem is that the browser is downloading too many heavy assets at once.

---

## 11. If You Later Add Real APIs

Right now this project is mostly static content.

If your next project includes real API calls, then use these rules:

### Use a data library

Recommended:

- React Query
- SWR

Why:

- request caching
- deduplication
- stale-while-revalidate behavior
- retry handling
- loading/error states

### Separate critical from non-critical data

Critical data:

- main hero data
- product hero info
- current user session

Non-critical data:

- recommendations
- related items
- testimonials
- lower-page widgets

Load critical data first.

Delay non-critical data until:

- idle
- after first paint
- near viewport
- after interaction

### Use AbortController

For raw `fetch`, always clean up:

```jsx
useEffect(() => {
  const controller = new AbortController();

  async function load() {
    const response = await fetch("/api/data", {
      signal: controller.signal,
    });
    const json = await response.json();
    // set state here
  }

  load();

  return () => controller.abort();
}, []);
```

### Avoid duplicated mount calls in dev

React Strict Mode in development can run effects twice.

So if you use raw `fetch` in `useEffect`, you can see double requests in dev.

That does not always mean production is broken.

Still, for production-grade apps, prefer React Query or SWR instead of hand-rolling everything.

---

## 12. What You Should Copy Into Every New Website Project

Before you start building a new site, set these up early:

### Files / patterns to create at the start

- `AppImage.jsx`
- `DeferredSection.jsx`
- route preload helper
- home/page composition that separates critical vs deferred sections

### Default rules

- only one eager hero image
- below-the-fold sections use deferred mounting
- heavy below-the-fold sections also use lazy imports
- route prefetch only on intent
- production measurements only

### Things to review before launch

- Are any large sections mounting immediately for no reason?
- Are too many routes preloading at startup?
- Are small UI cards loading large original images?
- Are hidden slides/tabs loading media too early?
- Is the home page still trying to do too much on first paint?

---

## 13. Quick Checklist

Use this before shipping a site.

### Startup checklist

- only one high-priority image
- no unnecessary eager images
- no broad startup route preloading
- below-the-fold sections deferred
- heavy lower sections lazy-loaded

### Image checklist

- `loading="lazy"` by default
- explicit width/height where possible
- responsive sizes for large visuals
- smaller variants planned for major images

### Routing checklist

- route prefetch only on intent
- only preload likely next pages
- avoid warming all routes during startup

### Measurement checklist

- test production build
- inspect Network waterfall
- inspect LCP
- check mobile throttling

---

## 14. Final Advice

The cleanest performance improvement is usually not a clever trick.

It is usually this:

> Make the browser do less work at the beginning.

That means:

- fewer immediate requests
- fewer immediate images
- less immediate JavaScript
- fewer things mounted above the fold

If you remember only one rule, remember this:

> Load what the user needs now. Delay the rest until they are close to needing it.

That principle is the foundation of how many polished websites feel fast.
