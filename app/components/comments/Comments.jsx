import React from 'react'
import styles from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Comments = () => {
    const status = "authenticated"
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>

        {status === "authenticated"? (
            <div className={styles.comments}>
            <textarea placeholder='Write comments' className={styles.input}/>
            <button className={styles.btn}>Send</button>
            </div>
        ):
        (
            <Link href={"/login"}>Login for Comments</Link>
        )}
        <div className={styles.cmtContainer}>
                <div className={styles.contents}>
                    <div className={styles.user}>
                        <Image src={"/images/tech.jpg"} alt='user' width={50} height={50} className={styles.image}/>

                        <div className={styles.info}>
                            <span className={styles.name}>John Doe</span>
                            <span className={styles.date}>12.06.2024</span>
                        </div>
                    </div>

                    <div className={styles.description}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id expedita natus consequatur aspernatur! Perferendis, nam id velit architecto illo ex dolore, cupiditate eaque ea porro nesciunt explicabo enim neque nisi.
                    </div>
                </div>
        </div>
        <div className={styles.cmtContainer}>
                <div className={styles.contents}>
                    <div className={styles.user}>
                        <Image src={"/images/tech.jpg"} alt='user' width={50} height={50} className={styles.image}/>

                        <div className={styles.info}>
                            <span className={styles.name}>John Doe</span>
                            <span className={styles.date}>12.06.2024</span>
                        </div>
                    </div>

                    <div className={styles.description}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id expedita natus consequatur aspernatur! Perferendis, nam id velit architecto illo ex dolore, cupiditate eaque ea porro nesciunt explicabo enim neque nisi.
                    </div>
                </div>
        </div>
        <div className={styles.cmtContainer}>
                <div className={styles.contents}>
                    <div className={styles.user}>
                        <Image src={"/images/tech.jpg"} alt='user' width={50} height={50} className={styles.image}/>

                        <div className={styles.info}>
                            <span className={styles.name}>John Doe</span>
                            <span className={styles.date}>12.06.2024</span>
                        </div>
                    </div>

                    <div className={styles.description}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id expedita natus consequatur aspernatur! Perferendis, nam id velit architecto illo ex dolore, cupiditate eaque ea porro nesciunt explicabo enim neque nisi.
                    </div>
                </div>
        </div>
        <div className={styles.cmtContainer}>
                <div className={styles.contents}>
                    <div className={styles.user}>
                        <Image src={"/images/tech.jpg"} alt='user' width={50} height={50} className={styles.image}/>

                        <div className={styles.info}>
                            <span className={styles.name}>John Doe</span>
                            <span className={styles.date}>12.06.2024</span>
                        </div>
                    </div>

                    <div className={styles.description}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id expedita natus consequatur aspernatur! Perferendis, nam id velit architecto illo ex dolore, cupiditate eaque ea porro nesciunt explicabo enim neque nisi.
                    </div>
                </div>
        </div>
        
    </div>
  )
}

export default Comments