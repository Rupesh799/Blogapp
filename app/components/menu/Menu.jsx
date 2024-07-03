import React from 'react'
import styles from './Menu.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"Hot Topics"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
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
      </div>


      <h2 className={styles.subtitle}>{"Discover By Topics"}</h2>
      <h1 className={styles.title}>Categories</h1>
          <div className={styles.categoriesList}>
            <Link href="/blog?cat=style" className={`${styles.categories} ${styles.style}`}>Style</Link>
            <Link href="/blog?cat=style" className={`${styles.categories} ${styles.tech}`}>Tech</Link>
            <Link href="/blog?cat=style" className={`${styles.categories} ${styles.music}`}>Music</Link>
            <Link href="/blog?cat=style" className={`${styles.categories} ${styles.culture}`}>Culture</Link>
             <Link href="/blog?cat=style" className={`${styles.categories} ${styles.sports}`}>Sports</Link>
          </div>


      <h2 className={styles.subtitle}>{"Choosen By Editors"}</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imgContainer}>
            <Image src="/images/tech.jpg" alt='' fill className={styles.image}/>
          </div>
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

export default Menu