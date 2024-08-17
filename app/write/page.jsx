"use client"
import React, { useEffect, useState } from 'react'
import styles from './write.module.css'
import Image from 'next/image'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.bubble.css"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {app} from "@/utils/firebase"

const WriteBlog = () => {


  const {status} = useSession()
  const router = useRouter()

  const [file , setFile] = useState(null)
  const [open, setOpen] = useState(false)
  const [media , setMedia] = useState("")
  const [title , setTitle] = useState("")
  const [value, setValue] = useState("")
  const [catSlug, setCatSlug] = useState("");


  useEffect(()=>{
  const upload = ()=>{
    const storage = getStorage(app);
    const name = new Date().getTime + file.name;
    const storageRef = ref(storage, name);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setMedia(downloadURL)
    });
  }
);
  }
  file && upload();
  },[file])

  if(status === "loading"){
    return <div>Loading...</div>
  }
  if(status === "authenticated"){
    // router.push("/")
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit=async()=>{
    const res = await fetch("/api/posts",{
      method: "POST",
      body:JSON.stringify({
        title,
        desc:value,
        img:media,
        slug:slugify(title),
        catSlug: catSlug || "style", 
      })
    });
    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  }

  
  return (
    <div className={styles.container}>
      <input type="text" placeholder='Title' className={styles.input} onChange={(e)=>setTitle(e.target.value)}/>
      <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={()=>setOpen(!open)}>
          <Image src={"/images/plus.png"} alt='plus' height={40} width={40}/>
        </button>
        {open && (
          <div className={styles.add}>
            {/* //? inoerder to take single file we use e.target.files[0] */}
            <input type="file" id="image" onChange={(e)=>setFile(e.target.files[0])}
            style={{display: "none"}} />
            <button className={styles.addButton}>
              <label htmlFor="image">

              <Image src={"/images/gallery.png"} alt='' height={28} width={28}/>
              </label>
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
      <button className={styles.publish} onClick={handleSubmit}>Publish</button>
    </div>
  )
}

export default WriteBlog