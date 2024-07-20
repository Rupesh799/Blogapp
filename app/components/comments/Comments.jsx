"use client"
import React from 'react'
import styles from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'

const fetcher=async(url)=>{
    const res = await fetch(url)
    const data = await res.json()

    if(!res.ok){
        throw new Error(data.message || 'Could not fetch the data')

    }
    return data;
}

const Comments = ({postSlug}) => {
    const status = useSession()
    const {data, isLoading} = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`,
        fetcher
    )
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
       
       {isLoading?"Loading..": data?.map((item)=>(
         <div className={styles.cmtContainer} key={item._id}>
         <div className={styles.contents}>
             <div className={styles.user}>
                 <Image src={"/images/tech.jpg"} alt='user' width={50} height={50} className={styles.image}/>

                 <div className={styles.info}>
                     <span className={styles.name}>{item.user.name}</span>
                     <span className={styles.date}>12.06.2024</span>
                 </div>
             </div>

             <div className={styles.description}>
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id expedita natus consequatur aspernatur! Perferendis, nam id velit architecto illo ex dolore, cupiditate eaque ea porro nesciunt explicabo enim neque nisi.
             </div>
         </div>
 </div>
       ))}
       
       
        
    </div>
  )
}

export default Comments