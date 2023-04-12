import React, {useEffect} from "react";
import {Routes, Route, Link, useLocation, useNavigate} from "react-router-dom";
import Header from "./Header";

import styles from "./index.module.less";

const SubLayout = ({routers}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate()
  
  const paths = pathname.split("/")
  const activeMenuKey = paths[paths.length - 1]

  useEffect(() => {
    if (paths.length === 2) {
      navigate(routers[0].path)
    }
  }, [routers])
  
  return <section style={{overflow: "hidden"}}>
    <Header />
    <main className={styles.main}>
      <nav className={styles.nav}>
        <ul>
          {routers.map(item => (<li key={item.path} className={activeMenuKey === item.path ? styles.active : ""}>
              <Link to={item.path}>{item.path}</Link>
            </li>))}
        </ul>
      </nav>
      <div className={styles.content}>
        <Routes>
          {routers.map(item => (<Route key={item.path} path={item.path} element={item.element} />))}
        </Routes>
      </div>
    </main>
  </section>;
}

export default SubLayout;