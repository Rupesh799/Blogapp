import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { RiArrowRightFill } from 'react-icons/ri'
const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image src='/images/tech.jpg' alt='' fill className={styles.image}/>
        </div>

        <div className={styles.textContainer}>
          <div className={styles.cardHeader}>
          <span className={styles.date}>11.11.2024 - </span>
          <span className={styles.category}>Tech</span>
          </div>
            <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempore eaque</h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempore eaque</p>

            <div className={styles.read}>
            <Link href="/" className={styles.link}>Read More
                        
                </Link>
                <RiArrowRightFill/>
            </div>
            
        </div>
    </div>
  )
}

export default Card