import styles from  "./index.module.less";

const  PositionSticky = () => {
  return <div>
    <h1>粘性定位</h1>
    <div className={styles.container}>
      <dl>
        <dt>A</dt>
        <dd>Andrew W.K.</dd>
        <dd>Apparat</dd>
        <dd>Arcade Fire</dd>
        <dd>At The Drive-In</dd>
        <dd>Aziz Ansari</dd>
      </dl>
      <dl>
        <dt>C</dt>
        <dd>Chromeo</dd>
        <dd>Common</dd>
        <dd>Converge</dd>
        <dd>Crystal Castles</dd>
        <dd>Cursive</dd>
      </dl>
      <dl>
        <dt>E</dt>
        <dd>Explosions In The Sky</dd>
      </dl>
      <dl>
        <dt>T</dt>
        <dd>Ted Leo & The Pharmacists</dd>
        <dd>T-Pain</dd>
        <dd>Thrice</dd>
        <dd>TV On The Radio</dd>
        <dd>Two Gallants</dd>
      </dl>
    </div>
  </div>
}

export default PositionSticky
