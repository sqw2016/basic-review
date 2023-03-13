import React from "react";
import {createBrowserRouter, useLocation } from "react-router-dom";

const MixBlendModel = React.lazy(() => import("@/pages/css/MixBlendModel"))

const CSSLayout = () => {
  window.name = "css";

  const router = [
    {
      path: 'mix-blend-model',
      element: <MixBlendModel />
    }
  ]


  const { pathname } = useLocation();

  return <section>
    <header>css</header>
    <main>
      <nav>
        <ul>
          {
            router.map(item => (<li key={item.path}>{item.path}</li>))
          }
        </ul>
      </nav>
      <div>
        {createBrowserRouter(router.map(item => ({
          path: `${pathname}/${item.path}`,
          ...item,
        })))}
      </div>
    </main>
  </section>;
}

export default CSSLayout;