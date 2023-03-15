import React from "react";
import {Routes, Route, Link, useLocation} from "react-router-dom";
import MixBlendMode from "@/pages/css/MixBlendMode";
import BackgroundBlendMode from "@/pages/css/BackgroundBlendMode";
import BlendMode from "@/pages/css/BlendMode";
import BackgroundClip from "@/pages/css/BackgroundClip";
import Filter from "@/pages/css/Filter";

import styles from "./index.module.less";

const CSSLayout = () => {
  window.name = "css";

  const { pathname } = useLocation();

  const router = [
    {
      path: 'mix-blend-mode',
      element: <MixBlendMode />
    },
    {
      path: 'background-blend-mode',
      element: <BackgroundBlendMode />
    },
    {
      path: 'background-clip',
      element: <BackgroundClip />
    },
    {
      path: 'filter',
      element: <Filter />
    },
    {
      path: 'mix-mode',
      element: <BlendMode />
    }
  ]

  const paths = pathname.split("/")
  const activeMenuKey = paths[paths.length - 1]
  
  return <section>
    <header className={styles.header}>css</header>
    <main className={styles.main}>
      <nav className={styles.nav}>
        <ul>
          {router.map(item => (<li key={item.path} className={activeMenuKey === item.path ? styles.active : ""}>
              <Link to={item.path}>{item.path}</Link>
            </li>))}
        </ul>
      </nav>
      <div className={styles.content}>
        <Routes>
          {router.map(item => (<Route path={item.path} element={item.element} />))}
        </Routes>
      </div>
    </main>
  </section>;
}

export default CSSLayout;