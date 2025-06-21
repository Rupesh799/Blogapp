"use client"
import React, {useState} from 'react'
import styles from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

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
    const router = useRouter()
    console.log(status);
    //? mutate is used for revalidating the data
    const {data,mutate, isLoading} = useSWR(`/api/comments?postSlug=${postSlug}`,
        fetcher
    );

    const [desc, setDesc] = useState("");

    const handleSubmit=async()=>{
            await fetch("/api/comments",{
                method:"POST",
                body:JSON.stringify({desc,postSlug})
            });
            mutate();
            router.refresh()

            
            
    }
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>

        {status === "authenticated"? (
            <div className={styles.comments}>
            <textarea placeholder='Write comments' className={styles.input} onChange={(e)=>setDesc(e.target.value)}/>
            <button className={styles.btn} onClick={handleSubmit}>Send</button>
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
                 <div className={styles.userInfo}>
                     <span className={styles.username}>{item.user.name}</span>
                     <span className={styles.date}>{item.createdAt.substring(0,10)}</span>
                 </div>
             </div>
             <p className={styles.comment}>{item.desc}</p>
         </div>
         </div>
       ))}
    </div>
  )
}

export default Comments