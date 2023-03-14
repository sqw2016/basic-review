import styles from "./index.module.less";

const BackgroundClip = () => {
  const properties = [{
    value: "border-box",
    desc: "背景延伸至边框外沿（但是在边框下层）。",
  }, {
    value: "padding-box",
    desc: "背景延伸至内边距（padding）外沿。不会绘制到边框处。",
  }, {
    value: "content-box",
    desc: "背景被裁剪至内容区（content box）外沿。"
  }, {
    value: "text",
    desc: "背景被裁剪成文字的前景色。"
  }]

  return <div className={styles.main}>
    <h3>background-clip 设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面。</h3>
    <div className={styles.list}>
      {
        properties.map(item => (
          <p key={item.value} style={{backgroundClip: item.value, webkitBackgroundClip: item.value}}>{item.desc}</p>
        ))
      }
    </div>
  </div>
}

export default BackgroundClip
