import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { RiArrowRightFill } from 'react-icons/ri'
const Card = ({key,item}) => {
  return (
    <div className={styles.container} key={key}>
        <div className={styles.imgContainer}>
            <Image src={item.img} alt='' fill className={styles.image}/>
        </div>

        <div className={styles.textContainer}>
          <div className={styles.cardHeader}>
          <span className={styles.date}>{item.createdAt} - </span>
          <span className={styles.category}>{item.category}</span>
          </div>
            <h1 className={styles.postTitle}>{item.title}</h1>
            <p className={styles.text}>{item.desc}</p>

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