import styles from "./index.module.less";
import gif from '@/assets/3.gif'

const Filter = () => {
  const properties = [{
    value: "url(\"https://interactive-examples.mdn.mozilla.net/media/examples/shadow.svg#element-id\")",
    desc: "获取指向 SVG 滤镜的 URI",
  }, {
    value: "blur(5px)",
    desc: "blur(5px) 函数将高斯模糊应用于输入图像。可以指定为 CSS 长度，但不接受百分比值。",
  }, {
    value: "brightness(2)",
    desc: "brightness(2) 函数将线性乘法器应用于输入图像，使其看起来或多或少地变得明亮。值为 0% 将创建全黑图像。值为 100% 会使输入保持不变。其他值是效果的线性乘数。如果值大于 100% 提供更明亮的结果。若没有设置值，默认为 1。"
  }, {
    value: "contrast(200%)",
    desc: "contrast(200%) 函数可调整输入图像的对比度。值是 0% 的话，图像会全黑。值是 100%，图像不变。值可以超过 100%，意味着会运用更低的对比。若没有设置值，默认是 1。"
  }, {
    value: "drop-shadow(16px 16px 10px black)",
    desc: "drop-shadow(16px 16px 10px black) 函数对输入图像应用阴影效果。"
  }, {
    value: "grayscale(100%)",
    desc: "grayscale(100%) 函数将改变输入图像灰度。amount 的值定义了转换的比例。值为 100% 则完全转为灰度图像，值为 0% 图像无变化。值在 0% 到 100% 之间，则是效果的线性乘数。若未设置值，默认是 0。"
  }, {
    value: "hue-rotate(90deg)",
    desc: "hue-rotate(90deg) 函数在输入图像上应用色相旋转。angle 一值设定图像会被调整的色环角度值。值为 0deg，则图像无变化。若值未设置值，默认为 0deg。该值虽然没有最大值，超过 360deg 的值相当于又绕一圈。"
  }, {
    value: "invert(100%)",
    desc: "invert(100%) 函数反转输入图像。amount 的值定义转换的比例。值为 100% 则图像完全反转。值为 0% 则图像无变化。值在 0% 和 100% 之间，则是效果的线性乘数。若未设置值，则默认为 0。"
  }, {
    value: "opacity(50%)",
    desc: "opacity(50%) 转化图像的透明程度。"
  }, {
    value: "saturate(200%)",
    desc: "saturate(200%) 函数转换图像饱和度。amount 的值定义转换的比例。值为 0% 则是完全不饱和，值为 100% 则图像无变化。其他值是效果的线性乘数。超过 100% 则有更高的饱和度。若未设置值，则默认为 1。"
  }, {
    value: "sepia(100%)",
    desc: "sepia(100%) 函数将图像转换为深褐色。amount 的值定义转换的比例。值为 100% 则完全是深褐色的，值为 0% 图像无变化。值在 0% 到 100% 之间，值是效果的线性乘数。若未设置值，则默认为 0。"
  }, {
    value: "contrast(175%) brightness(103%) ",
    desc: "可以组合任意数量的函数来控制渲染。contrast(175%) brightness(103%) 可以增强图像的对比度和亮度。"
  }]

  return <div className={styles.main}>
    <h3>CSS属性 filter 将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像、背景和边框的渲染。</h3>
    <div className={styles.list}>
      {
        properties.map(item => (
          <div key={item.value}>
            <p>{item.desc}</p>
            <img src={gif} style={{filter: item.value}} alt=""/>
          </div>
        ))
      }
    </div>
  </div>
}

export default Filter
