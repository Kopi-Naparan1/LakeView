import { lazy, Suspense } from "react";
import Hero from "./Hero/Hero";
import About from "./About/AboutImage/About";
import Services from "./Services/Services";
import DeferredSection from "../../components/DeferredSection";

const GalleryPreview = lazy(() => import("./GalleryPreview/GalleryPreview"));
const Testimonial = lazy(() => import("./Testimonial/Testimonial"));
const FinalCTA = lazy(() => import("./FinalCTA/FinalCTA"));
const ParkGuidelines = lazy(() => import("./GuideLines/GuideLines"));

function DeferredHomeSection({
  children,
  minHeight,
  rootMargin = "700px 0px",
}) {
  return (
    <DeferredSection minHeight={minHeight} rootMargin={rootMargin}>
      <Suspense fallback={<div style={{ minHeight }} />}>{children}</Suspense>
    </DeferredSection>
  );
}

export default function Home() {
  return (
    <div className="min-h-full">
      <Hero />
      <About />
      <Services />
      <DeferredHomeSection
        minHeight="clamp(36rem, 82vh, 52rem)"
        rootMargin="900px 0px"
      >
        <GalleryPreview />
      </DeferredHomeSection>
      <DeferredHomeSection minHeight="clamp(28rem, 68vh, 40rem)">
        <ParkGuidelines />
      </DeferredHomeSection>
      <DeferredHomeSection minHeight="clamp(28rem, 62vh, 36rem)">
        <Testimonial />
      </DeferredHomeSection>
      <DeferredHomeSection minHeight="clamp(18rem, 40vh, 24rem)">
        <FinalCTA />
      </DeferredHomeSection>
    </div>
  );
}
