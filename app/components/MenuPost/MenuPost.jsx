import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './MenuPost.module.css'
const MenuPost = ({withimage}) => {
  return (
    <div className={styles.items}>
    <Link href="/" className={styles.item}>
     
      <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.tech}`}>
            Tech
          </span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>

          <div className={styles.details}>
            <span className={styles.username}>john Doe</span>
            <span className={styles.date}> - 07.03.2024</span>
          </div>
      </div>
    </Link>
    <div className={styles.items}>
        <Link href="/" className={styles.item}>
         {withimage && ( <div className={styles.imgContainer}>
            <Image src="/images/tech.jpg" alt='' fill className={styles.image}/>
          </div>)}
          <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.tech}`}>
                Tech
              </span>
              <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>

              <div className={styles.details}>
                <span className={styles.username}>john Doe</span>
                <span className={styles.date}> - 07.03.2024</span>
              </div>
          </div>
        </Link>
      </div>
  </div>
  
  )
}

export default MenuPost