import React from "react";
import {HashRouter, Routes, Route} from "react-router-dom";
import BaseLayout from "@/layouts/BaseLayout";

const renderRouter = () => {
  return <HashRouter>
    <Routes>
      <Route path="/*" element={<BaseLayout/>}/>
    </Routes>
  </HashRouter>
}

export default renderRouter;