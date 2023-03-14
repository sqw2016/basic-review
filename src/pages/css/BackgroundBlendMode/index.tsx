import styles from "./index.module.less";

const BackgroundBlendMode = () => {
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
    "luminosity",
  ]

  return <div className={styles.main}>
    <h3>background-blend-mode CSS 属性定义该元素的背景图片，以及背景色如何混合。多个背景可以有多个值，用逗号间隔。</h3>
    <div className={styles.list}>
      {
        properties.map(val => (
          <div key={val}>
            <p>{val}</p>
            <div style={{backgroundBlendMode: val}} className={styles.mix}/>
          </div>
        ))
      }
    </div>
  </div>
}

export default BackgroundBlendMode
