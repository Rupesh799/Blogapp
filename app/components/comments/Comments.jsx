"use client"
import React, {useState} from 'react'
import styles from './comments.module.css'
import Link from 'next/link'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import SafeImage from '../ui/SafeImage'
import { SkeletonComment } from '../ui/Skeleton'

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
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit=async()=>{
        if (!desc.trim()) return;
        
        setIsSubmitting(true);
        try {
            await fetch("/api/comments",{
                method:"POST",
                body:JSON.stringify({desc,postSlug})
            });
            mutate();
            setDesc("");
            router.refresh()
        } catch (error) {
            console.error("Error posting comment:", error);
        } finally {
            setIsSubmitting(false);
        }
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>

        {status === "authenticated"? (
            <div className={styles.commentForm}>
                <textarea 
                    placeholder='Share your thoughts...' 
                    className={styles.input} 
                    value={desc}
                    onChange={(e)=>setDesc(e.target.value)}
                    rows={3}
                />
                <div className={styles.formActions}>
                    <button 
                        className={`${styles.btn} ${isSubmitting ? styles.btnDisabled : ''}`} 
                        onClick={handleSubmit}
                        disabled={isSubmitting || !desc.trim()}
                    >
                        {isSubmitting ? 'Posting...' : 'Post Comment'}
                    </button>
                </div>
            </div>
        ):
        (
            <div className={styles.loginPrompt}>
                <p>Join the conversation!</p>
                <Link href={"/login"} className={styles.loginLink}>Login to Comment</Link>
            </div>
        )}
       
       <div className={styles.commentsList}>
           {isLoading ? (
               // Show skeleton loading
               Array.from({ length: 3 }).map((_, index) => (
                   <SkeletonComment key={index} />
               ))
           ) : data?.length > 0 ? (
               data.map((item)=>(
                   <div className={styles.cmtContainer} key={item._id}>
                       <div className={styles.contents}>
                           <div className={styles.user}>
                               <SafeImage 
                                   src={item.user.image} 
                                   alt={item.user.name} 
                                   width={50} 
                                   height={50} 
                                   className={styles.image}
                                   fallbackSrc="/images/logo.png"
                               />
                               <div className={styles.userInfo}>
                                   <span className={styles.username}>{item.user.name}</span>
                                   <span className={styles.date}>{formatDate(item.createdAt)}</span>
                               </div>
                           </div>
                           <p className={styles.comment}>{item.desc}</p>
                       </div>
                   </div>
               ))
           ) : (
               <div className={styles.noComments}>
                   <p>No comments yet. Be the first to share your thoughts!</p>
               </div>
           )}
       </div>
    </div>
  )
}

export default Comments