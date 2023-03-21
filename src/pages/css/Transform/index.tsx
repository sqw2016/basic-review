import {useState, useEffect} from "react"
import styles from "./index.module.less";
import Cube from "@/components/Cube";

const Transform = () => {
  const [val, setValue] = useState()

  const valueChange = e => setValue(e.target.value)

  useEffect(() => {
    if (val) setTimeout(() => {
      setValue("")
    }, 2000)
  }, [val])

  return <div className={styles.main}>
    <h3>CSS 变换（CSS transform）可以在不影响正常文档流的情况下改变作用内容的位置。</h3>
    <select onChange={valueChange}>
      <option>选择函数</option>
      <option>rotate(360deg)</option>
      <option>rotateX(360deg)</option>
      <option>rotateY(360deg)</option>
      <option>rotateZ(360deg)</option>
      <option>rotate3d(1, 1, 1, 90deg)</option>
      <option>scale(1.5)</option>
      <option>scaleX(1.5)</option>
      <option>scaleY(1.5)</option>
      <option>scaleZ(1.5)</option>
      <option>scale3d(1, 1.5, 1.5)</option>
      <option>skew(17deg, 13deg)</option>
      <option>skewX(17deg)</option>
      <option>skewY(17deg)</option>
      <option>translate(100px, 100px)</option>
      <option>translateX(100px)</option>
      <option>translateY(100px)</option>
      <option>translateZ(100px)</option>
      <option>translate3d(50px, 50px, 50px)</option>
      <option>perspective(200px)</option>
      <option>matrix(1, 2, -1, 1, 80, 80)</option>
      <option>matrix3d(1,0,0,0,0,1,3,0,0,0,1,0,50,100,0,1.1)</option>
    </select>
    <div className={styles.list}>
      <Cube style={{marginTop: 20, transform: `rotate3d(1, 1, 1, 45deg) ${val}`}} />
    </div>
  </div>
}

export default Transform
