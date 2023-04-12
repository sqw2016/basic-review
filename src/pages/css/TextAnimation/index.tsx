import styles from "./index.module.less";

const  TextAnimation = () => {
  return <div>
    <h1>文本动画</h1>
    <div className={styles.container}>
      <div className={styles.text}>hello world</div>
    </div>
  </div>
}

export default TextAnimation
