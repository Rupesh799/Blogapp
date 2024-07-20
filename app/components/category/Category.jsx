import React from "react";
import styles from "./Category.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
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
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categoryData && categoryData?.map((item) => (
          <Link
          key={item._id}
            href={`/blog?cat=${categoryData.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
          >
            <Image
              src={item.img}
              alt=""
              height={25}
              width={25}
              className={styles.image}
            />
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
