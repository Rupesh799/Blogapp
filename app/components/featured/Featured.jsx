import React from "react";
import styles from "./Featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey there,</b> explore my stories and ideas!
      </h1>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src="/images/p1.jpg"
            alt="Featured Post"
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Finding Beauty in Everyday Moments
          </h1>
          <p className={styles.content}>
            Life is a collection of simple, beautiful moments. In this post, I
            share how slowing down helped me rediscover the joy in ordinary
            things — a quiet morning, a handwritten note, or just the sound of
            rain.
          </p>
          <button className={styles.btn}>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
