import React from "react";
import styles from "./Category.module.css";
import Link from "next/link";
import SafeImage from "../ui/SafeImage";

const getData = async () => {
  const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to Load Data");
  }
  return res.json();
};

const Category = async () => {
  const categoryData = await getData();
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categoryData && categoryData?.map((item) => (
          <Link
          key={item._id}
          href={`/blog?cat=${item.slug}`}
          className={`${styles.category} ${styles[item.slug]}`}
          >
            <SafeImage
              src={item.img}
              alt={item.title}
              height={25}
              width={25}
              className={styles.image}
              fallbackSrc="/images/logo.png"
              />
            {item.title}
          </Link>
        ))}
      </div>
    </div>
        </>
  );
};

export default Category;
