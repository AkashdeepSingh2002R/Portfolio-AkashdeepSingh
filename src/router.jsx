import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

const withSuspense = (el) => <Suspense fallback={<div />}>{el}</Suspense>;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: withSuspense(<HomePage />) },
      { path: "about", element: withSuspense(<AboutPage />) },
      { path: "projects", element: withSuspense(<ProjectsPage />) },
      { path: "contact", element: withSuspense(<ContactPage />) },
    ],
  },
]);