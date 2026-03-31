import "./App.css";

import { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import {
  pageRoutes,
  preloadRoute,
  resolveRoutePath,
  routePaths,
} from "./pages";

function RouteFallback() {
  return (
    <div className="site-container flex min-h-[40vh] items-center justify-center py-16">
      <p className="text-sm font-medium text-primary/70">
        Loading page. Just a moment...
      </p>
    </div>
  );
}

function AppShell() {
  const location = useLocation();
  const activePath = resolveRoutePath(location.pathname);
  const [mountedPaths, setMountedPaths] = useState(() =>
    activePath ? [activePath] : [],
  );

  useEffect(() => {
    if (!activePath) return;

    setMountedPaths((prevPaths) =>
      prevPaths.includes(activePath) ? prevPaths : [...prevPaths, activePath],
    );
  }, [activePath]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const pathsToWarm = routePaths.filter((path) => path !== activePath);
    if (!pathsToWarm.length) return undefined;

    let cancelled = false;

    function warmRoutes() {
      if (cancelled) return;

      pathsToWarm.forEach((path) => {
        void preloadRoute(path);
      });
    }

    if ("requestIdleCallback" in window) {
      const idleCallbackId = window.requestIdleCallback(warmRoutes, {
        timeout: 1500,
      });

      return () => {
        cancelled = true;
        window.cancelIdleCallback(idleCallbackId);
      };
    }

    const timeoutId = window.setTimeout(warmRoutes, 250);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [activePath]);

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-2rem)] bg-background">
        {pageRoutes.map(({ path, Component }) => {
          if (!mountedPaths.includes(path)) return null;

          const isActive = path === activePath;

          return (
            <section
              key={path}
              hidden={!isActive}
              aria-hidden={!isActive}
              className={isActive ? "block" : "hidden"}
            >
              <Suspense fallback={isActive ? <RouteFallback /> : null}>
                <Component />
              </Suspense>
            </section>
          );
        })}
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;
