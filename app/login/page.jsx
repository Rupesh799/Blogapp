import React from 'react'
import styles from './login.module.css'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
const LoginPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.social}>
              <span className={styles.icon}>
                <FaGoogle size={30}/>
              </span>
              SignIn with Google</div>
            <div className={styles.social}>
            <span className={styles.icon}>
                <FaGithub size={30}/>
              </span>
              SignIn with Github</div>
            <div className={styles.social}>
            <span className={styles.icon}>
                <FaFacebook size={30}/>
              </span>
              SignIn with Facebook</div>
        </div>
    </div>
  )
}

export default LoginPage