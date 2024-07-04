import React from 'react'
import styles from './singleBlog.module.css'
import Image from 'next/image'
const SinglePage = () => {
  return (
    <div className={styles.container}>
         
        <div className={styles.blogHeader}>
           <div className={styles.imgContainer}>
                <Image src='/images/tech.jpg' alt='' fill className={styles.img}/>
            </div>
            <div className={styles.infoContainer}>
                <div>
                    <h1 className={styles.title}>Lorem ipsum dolor sit amet consecte</h1>
                </div>
                <div className={styles.userInfo}>
                       <div className={styles.userImage}>
                            <Image src='/images/tech.jpg' alt='' fill className={styles.uimg}/>
                        </div> 
                        <div className={styles.userDetails}>
                            <h3 className={styles.name}>John Doe</h3>
                            <p className={styles.date}>07.04.2024</p>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SinglePage