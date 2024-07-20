"use client";
import React from "react";
import styles from "./Pagination.module.css";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useRouter } from "next/navigation";
const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <button
      disabled={!hasPrev}
        className={styles.prev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        <span>
          <BiLeftArrow />
        </span>
        Prev
      </button>
      <button
      disabled={!hasNext}
        className={styles.next}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
        <span>
          <BiRightArrow />
        </span>
      </button>
    </div>
  );
};

export default Pagination;
