import React from 'react'
import styles from './singleBlog.module.css'
import Image from 'next/image'
import Menu from '../../components/menu/Menu'
import Comments from '../../components/comments/Comments'
import Link from 'next/link'

const getData = async(slug)=>{
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`,{
        cache:"no-store"
    })
    if(!res.ok){
    throw new Error('Failed to load posts')
        
    }
    return res.json();
}

const SinglePage = async({params}) => {
    const {slug} = params;
    const singlePost = await getData(slug);
    // console.log(singlePost);
  return (
    <div className={styles.container}>
         
        <div className={styles.blogHeader}>
           <div className={styles.imgContainer}>
                <Image src={singlePost?.img} alt='' fill className={styles.img}/>
            </div>
            <div className={styles.infoContainer}>
                <div>
                    <h1 className={styles.title}>{singlePost.title}</h1>
                </div>
                <div className={styles.userInfo}>
                       <div className={styles.userImage}>
                            <Image src={singlePost.user.image} alt='' fill className={styles.uimg}/>
                        </div> 
                        <div className={styles.userDetails}>
                            <h3 className={styles.name}>{singlePost?.user.name}</h3>
                            <p className={styles.date}>{singlePost.user.createdAt.substring(0,10)}</p>
                        </div>
                </div>
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
            {singlePost?.desc && (
  <div className={styles.desc} dangerouslySetInnerHTML={{ __html: singlePost.desc }} />
)}
                        
                    <div className={styles.comment}>
                      <Comments postSlug={slug}/>
                    </div>
            </div>
            <Menu/>
            
        </div>
    </div>
  )
}

export default SinglePage