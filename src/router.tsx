import React from "react";
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom";

const CSS = React.lazy(() => import("@/layouts/CSSLayout"))

const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<CSS />} />))

const renderRouter = () => {
    return <RouterProvider router={router} />
}

export default renderRouter;