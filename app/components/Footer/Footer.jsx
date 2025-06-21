import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
          <div className={styles.logo}>
            <Image src="/images/logo.png" width={50} height={50} alt="logo" className={styles.imgLogo}/>
            <h1 className={styles.title}>Blog</h1>
          </div>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias earum 
            </p>

      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Blogs</Link>
          <Link href="/">Contact</Link>
        </div>

        <div className={styles.tags}>
        <Link href="/">Tech</Link>
          <Link href="/">Sports</Link>
          <Link href="/">Culture</Link>
          <Link href="/">Style</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer