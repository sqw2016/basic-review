import styles from './index.module.less';

const Cube = ({style, autoAnimation = false}) => (
  <section style={style} className={`${styles.box} ${autoAnimation ? styles.animation : styles.default}`}>
    <div className={styles.front}>1</div>
    <div className={styles.back}>2</div>
    <div className={styles.right}>3</div>
    <div className={styles.left}>4</div>
    <div className={styles.top}>5</div>
    <div className={styles.bottom}>6</div>
  </section>
)

export default Cube;
