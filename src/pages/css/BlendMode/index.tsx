import styles from "./index.module.less";

import png from "@/assets/2.png"

const BlendModel = () => {


  return <div className={styles.main}>
    <h3>mix-blend-mode 和 background-blend-mode 一起使用，达到特殊效果</h3>
    <div className={styles.list}>
      <div>
        <p>单一效果</p>
        <div className={styles.single}  />
      </div>
      <div>
        <p>after 单一效果</p>
        <div className={styles.singleAfter}  />
      </div>
      <div>
        <p>混合效果</p>
        <div className={styles.mix}  />
      </div>
      <div>
        <p>gif混合效果</p>
        <div className={styles.mixGif}  />
      </div>
      <div>
        <p>不同的图混合</p>
        <div className={styles.mixDiff}  />
      </div>
      <div>
        <p>不同的图混合2</p>
        <div className={styles.mixDiffWhite}  />
      </div>
    </div>
  </div>
}

export default BlendModel
