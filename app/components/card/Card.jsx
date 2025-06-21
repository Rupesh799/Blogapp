import React from "react";
import styles from "./card.module.css";
import Link from "next/link";
import { RiArrowRightFill } from "react-icons/ri";
import SafeImage from "../ui/SafeImage";

const Card = ({ key, item }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className={styles.container} key={key}>
      <div className={styles.imgContainer}>
        <SafeImage
          src={item.img}
          alt={item.title}
          fill
          className={styles.image}
          fallbackSrc="/images/logo.png"
        />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.cardHeader}>
          <span className={styles.date}>{formatDate(item.createdAt)} - </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`} className={styles.postTitle}>
          {item.title}
        </Link>

        {item.desc && (
          <p className={styles.content}>
            {item.desc.length > 60
              ? item.desc.substring(0, 60) + "..."
              : item.desc}
          </p>
        )}

        {/* <p className="text-sm bg-red-400">{item.desc.substring(0, 60)}...</p> */}

        <div className={styles.read}>
          <Link href={`/posts/${item.slug}`} className={styles.link}>
            Read More
          </Link>
          <RiArrowRightFill />
        </div>
      </div>
    </div>
  );
};

export default Card;
