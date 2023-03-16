import {useEffect} from "react";
import {redirect, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import cssRouter from "@/layouts/BaseLayout/cssRouter";
import jsRouter from "@/layouts/BaseLayout/jsRouter";
import SubLayout from "../SubLayout";

const BaseLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/css")
    }
  }, [])

  return <div>
    <Routes>
      <Route path="css/*" element={<SubLayout routers={cssRouter} />}></Route>
      <Route path="js/*" element={<SubLayout routers={jsRouter} />}></Route>
    </Routes>
  </div>
}

export default BaseLayout
