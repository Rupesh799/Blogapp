import React from 'react'
import styles from './Category.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Category = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Popular Categories</h1>
        <div className={styles.categories} >
          <Link href='/blog?cat=style' className={`${styles.category} ${styles.style}`} >

            <Image src="/images/style.jpg" alt='' height={25} width={25} className={styles.image}/>

            Style
          </Link>
          <Link href='/blog?cat=style' className={`${styles.category} ${styles.tech}`} >

            <Image src="/images/tech.jpg" alt='' height={25} width={25} className={styles.image}/>

            Tech
          </Link>
          <Link href='/blog?cat=style' className={`${styles.category} ${styles.sports}`} >

            <Image src="/images/sports.jpg" alt='' height={25} width={25} className={styles.image}/>

            Sports
          </Link>
          <Link href='/blog?cat=style' className={`${styles.category} ${styles.culture}`} >

            <Image src="/images/culture.jpg" alt='' height={25} width={25} className={styles.image}/>

            Style
          </Link>
          <Link href='/blog?cat=style' className={`${styles.category} ${styles.music}`} >

            <Image src="/images/music.jpg" alt='' height={25} width={25} className={styles.image}/>

            Style
          </Link>
        </div>
    </div>
  )
}

export default Category