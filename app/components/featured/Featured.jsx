import React from 'react'
import styles from './Featured.module.css'
import Image from 'next/image'
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, There</b> Explore my stories and ideas!
      </h1>

      <div className={styles.post}>
      <div className={styles.imgContainer}>
        <Image src="/images/p1.jpg" alt='' fill  className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit</h1>
        <p className={styles.content}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia aspernatur magnam sunt ex tempore veniam vitae voluptate perferendis consequuntur quo eligendi quasi vel, corrupti molestias cupiditate consectetur totam necessitatibus inventore!</p>
        <button className={styles.btn}>Explore</button>
      </div>

      </div>
    </div>
  )
}

export default Featured