import React from "react";

import styles from "./index.module.less";

const HorizontalScroll = () => {
  return <div>
    <h1>滚轮滚动时，横向移动</h1>
    <div className={styles.container}>
      <div className={styles.view}>
        <div className={styles.content}>
          <img src="https://tse1.mm.bing.net/th/id/OET.4b7e8b4731c44c57a658584c03940459?w=272&h=135&c=7&rs=1&o=5&pid=1.9" alt=""/>
          <img src="https://tse1.mm.bing.net/th/id/OET.8d3b2b45c6784255a0aed31aeae446c0?w=272&h=135&c=7&rs=1&o=5&pid=1.9" alt=""/>
          <img src="https://tse1.mm.bing.net/th/id/OET.5c1b2935d2c14a94a56a0967852f7aa3?w=272&h=135&c=7&rs=1&o=5&pid=1.9" alt=""/>
          <img src="https://tse1.mm.bing.net/th/id/OET.9e510d35bbd64dfea499fd8f23df3647?w=272&h=135&c=7&rs=1&o=5&pid=1.9" alt=""/>
          <img src="https://tse1.mm.bing.net/th/id/OET.6c46e0da02394026815c56d4efa27d34?w=272&h=135&c=7&rs=1&o=5&pid=1.9" alt=""/>
          <img src="https://tse1.mm.bing.net/th/id/OET.6c46e0da02394026815c56d4efa27d34?w=272&h=135&c=7&rs=1&o=5&pid=1.9" alt=""/>
          <img src="https://tse1.mm.bing.net/th/id/OET.4afdbdfa36f449f99ca6d766cd666018?w=272&h=135&c=7&rs=1&o=5&pid=1.9" alt=""/>
        </div>
      </div>
    </div>
  </div>
}

export default HorizontalScroll;