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
    console.log(data);


    if(!res.ok){
       const error =  new Error(data.message );
        throw error;

    }
    return data;
}

const Comments = ({postSlug}) => {
    const {status} = useSession()
    console.log(status);
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
                 <Image src={item.user.image} alt='user' width={50} height={50} className={styles.image}/>

                 <div className={styles.info}>
                     <span className={styles.name}>{item.user.name}</span>
                     <span className={styles.date}>{item.createdAt}</span>
                 </div>
             </div>

             <div className={styles.description}>
                {item.desc}
             </div>
         </div>
 </div>
       ))}
       
       
        
    </div>
  )
}

export default Comments