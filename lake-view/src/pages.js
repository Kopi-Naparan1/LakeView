import { lazy } from "react";

const pageLoaders = {
  "/": () => import("./Pages/Home/Home"),
  "/cafe": () => import("./Pages/Cafe/Cafe"),
  "/resthouse": () => import("./Pages/Resthouse/Resthouse"),
  "/contact": () => import("./Pages/Contact/Contact"),
};

const preloadCache = new Map();

export const routePaths = Object.keys(pageLoaders);

export function resolveRoutePath(pathname) {
  if (!pathname) return null;

  const normalizedPath =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  return pageLoaders[normalizedPath] ? normalizedPath : null;
}

export function preloadRoute(pathname) {
  const routePath = resolveRoutePath(pathname);
  if (!routePath) return Promise.resolve(null);

  if (!preloadCache.has(routePath)) {
    preloadCache.set(routePath, pageLoaders[routePath]());
  }

  return preloadCache.get(routePath);
}

export const pageRoutes = routePaths.map((path) => ({
  path,
  Component: lazy(pageLoaders[path]),
}));
