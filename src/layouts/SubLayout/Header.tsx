import styles from "@/layouts/SubLayout/index.module.less";
import { Link } from "react-router-dom";

const Header = () => (
  <header className={styles.header}>
    <Link to="/css">CSS</Link>
    <Link to="/js">JS</Link>
  </header>
)

export default Header;
