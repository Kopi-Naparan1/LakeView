import "./App.css";

import { createElement, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import { pageRoutes, resolveRoutePath } from "./pages";

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
  const renderedPaths =
    activePath && !mountedPaths.includes(activePath)
      ? [...mountedPaths, activePath]
      : mountedPaths;

  useEffect(() => {
    if (!activePath || mountedPaths.includes(activePath)) return undefined;

    let cancelled = false;

    queueMicrotask(() => {
      if (cancelled) return;

      setMountedPaths((prevPaths) =>
        prevPaths.includes(activePath) ? prevPaths : [...prevPaths, activePath],
      );
    });

    return () => {
      cancelled = true;
    };
  }, [activePath, mountedPaths]);

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-2rem)] bg-background">
        {pageRoutes.map((route) => {
          if (!renderedPaths.includes(route.path)) return null;

          const isActive = route.path === activePath;

          return (
            <section
              key={route.path}
              hidden={!isActive}
              aria-hidden={!isActive}
              className={isActive ? "block" : "hidden"}
            >
              <Suspense fallback={isActive ? <RouteFallback /> : null}>
                {createElement(route.Component)}
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
