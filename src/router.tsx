import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import CSSLayout from "@/layouts/CSSLayout";

const Home = React.lazy(() => import("@/pages/home"))

const renderRouter = () => {
    return <HashRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="css/*" element={<CSSLayout />} />
        </Routes>
    </HashRouter>
}

export default renderRouter;