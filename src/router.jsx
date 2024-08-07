import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import React from "react";
import HomePage from "./pages/Home/HomePage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import ResourcesPage from "./pages/Resources/ResourcesPage";
import DevopsPage from "./pages/Services/Devops/DevopsPage";

import { paths } from "./const/path";
import ContactUs from "./modules/ContactUS";
import Blog from "./modules/Blog/Blog";
import BlogContentComponent from "./modules/Blog/components/BlogContentComponent";
import SREPage from "./pages/Services/SRE/SREPage";

const router = createBrowserRouter([
  {
    path: paths.home,
    element: <MainLayout />,
    children: [
      { path: paths.home, element: <HomePage /> },
      {
        path: paths.services,
        children: [
          { path: paths.devops, element: <DevopsPage /> },

          { path: paths.sre, element: <SREPage /> },
        ],
      },
      { path: paths.aboutus, element: <AboutUsPage /> },
      { path: paths.resources, element: <ResourcesPage /> },
      { path: paths.contact, element: <ContactUs /> },
      { path: paths.blog, element: <Blog /> },
      // { path: paths.blog, element: <BlogContentComponent /> },
    ],
  },
]);

export default router;
