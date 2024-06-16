"use client"
import Link from 'next/link'
import React, {useState} from 'react'
import styles from './AuthLinks.module.css'

const AuthLinks = () => {
    const status = "notauthenticated"

    const [open , setOpen] = useState(false)
  return (
    
    <div className={styles.container}>
        {status=== "notauthenticated" ? (
                <Link href="/login" className={styles.links}>Login</Link>
        ):(
            <>
            <Link href="/write" className={styles.links}>Write</Link>
            <span className={styles.links}>Logout</span>
            </>
        )}
        <div className={styles.burger} onClick={()=>setOpen(!open)}>

            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </div>
          {open && (
            <div className={styles.responsiveMenu}>
                <Link href="/">Home</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>

                {status=== "notauthenticated" ? (
                <Link href="/login">Login</Link>
        ):(
            <>
            <Link href="/write">Write</Link>
            <span className={styles.links}>Logout</span>
            </>
        )}
            </div>
          )}
    </div>
  )
}

export default AuthLinks