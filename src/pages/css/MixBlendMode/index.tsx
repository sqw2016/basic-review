import styles from "./index.module.less";

import png from "@/assets/2.png"

const MixBlendModel = () => {
  const properties = ["normal",
    "multiply",
    "screen",
    "overlay",
    "darken",
    "lighten",
    "color-dodge",
    "color-burn",
    "hard-light",
    "soft-light",
    "difference",
    "exclusion",
    "hue",
    "saturation",
    "color",
    "luminosity",]

  return <div className={styles.main}>
    <h3>mix-blend-mode CSS 属性描述了元素的内容应该与元素的直系父元素的内容和元素的背景如何混合。</h3>
    <div className={styles.list}>
      {
        properties.map(val => (
          <div key={val}>
            <p>{val}</p>
            <div className={styles.mix}>
              <img style={{mixBlendMode: val}}  src={png} alt=""/>
            </div>
          </div>
        ))
      }
    </div>
  </div>
}

export default MixBlendModel
