"use client"
import React, { useState } from 'react'
import styles from './write.module.css'
import Image from 'next/image'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.bubble.css"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
const WriteBlog = () => {


  const {status} = useSession()
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  if(status === "loading"){
    return <div>Loading...</div>
  }
  if(status === "authenticated"){
    router.refresh("/")
  }

  return (
    <div className={styles.container}>
      <input type="text" placeholder='Title' className={styles.input}/>
      <div className={styles.editor}>
        <button className={styles.button} onClick={()=>setOpen(!open)}>
          <Image src={"/images/plus.png"} alt='plus' height={40} width={40}/>
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src={"/images/gallery.png"} alt='' height={28} width={28}/>
            </button>
            <button className={styles.addButton}>
              <Image src={"/images/coding.png"} alt='' height={28} width={28}/>
            </button>
            <button className={styles.addButton}>
              <Image src={"/images/video.png"} alt='' height={28} width={28}/>
            </button>
          </div>
        )}
       
        <ReactQuill theme='bubble' value={value} onChange={setValue} placeholder='Tell Your Story' className={styles.textArea}/>
        
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  )
}

export default WriteBlog