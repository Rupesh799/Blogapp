import React, { Suspense } from 'react'
import styles from './CardList.module.css'
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'
import { SkeletonCard } from '../ui/Skeleton'

const getData = async(page,cat)=>{
  const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/posts?page=${page}&cat=${cat || ""}`,{
    cache:"no-store"
  });
  // console.log(res);

  if(!res.ok){
    throw new Error('Failed to load posts')
  }
  return res.json()
}

const CardListSkeleton = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Recent Posts</h1>
    <div className={styles.posts}>
      {Array.from({ length: 2 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  </div>
);

const CardList = async({page, cat}) => {
  const {posts , count} = await getData(page, cat)

  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page -1 ) > 0;
  const hasNext = POST_PER_PAGE * (page-1) + POST_PER_PAGE < count;


  return (
    <Suspense fallback={<CardListSkeleton />}>
      <div className={styles.container} >
        <h1 className={styles.title}>Recent Posts</h1>
        <div className={styles.posts}>
          {
            posts && posts?.map((item)=>(
              <Card item={item} key={item._id}/>
            ))
          }
         
        </div>
        <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev}/>
      </div>
    </Suspense>
  )
}

export default CardList