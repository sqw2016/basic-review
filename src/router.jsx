"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var CSS = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return require("@/layouts/CSSLayout"); }); });
var router = (0, react_router_dom_1.createBrowserRouter)((0, react_router_dom_1.createRoutesFromElements)(<react_router_dom_1.Route path="/" element={<CSS />}/>));
var renderRouter = function () {
    return <react_router_dom_1.RouterProvider router={router}/>;
};
exports["default"] = renderRouter;
