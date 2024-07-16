import React from 'react'
import styles from './CardList.module.css'
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'

const getData = async(page)=>{
  const res = await fetch(`http://localhost:3000/api/posts?page={page}`,{
    cache:"no-store"
  });

  if(!res.ok){
    throw new Error('Failed to load posts')
  }
  return res.json()
}

const CardList = async({page}) => {
  const postData = await getData(page)
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {
          postData.map((item)=>(
            <Card item={item} key={item._id}/>
          ))
        }
       
      </div>
      <Pagination/>
    </div>
  )
}

export default CardList