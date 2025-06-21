"use client";
import React from "react";

import Link from "next/link";
import styles from "./not-found.module.css";
import { FaHome, FaSearch, FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>

        <h1 className={styles.title}>Page Not Found</h1>

        <p className={styles.description}>
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might
          have been moved, deleted, or you entered the wrong URL.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.primaryButton}>
            <FaHome />
            <span>Go Home</span>
          </Link>

          <Link href="/blog" className={styles.secondaryButton}>
            <FaSearch />
            <span>Browse Blog</span>
          </Link>
        </div>

        <div className={styles.suggestions}>
          <h3 className={styles.suggestionsTitle}>You might be looking for:</h3>
          <div className={styles.suggestionLinks}>
            <Link href="/about" className={styles.suggestionLink}>
              About Us
            </Link>
            <Link href="/contact" className={styles.suggestionLink}>
              Contact
            </Link>
            <Link href="/write" className={styles.suggestionLink}>
              Write a Post
            </Link>
          </div>
        </div>

        <div className={styles.backButton}>
          <button
            onClick={() => window.history.back()}
            className={styles.backLink}
          >
            <FaArrowLeft />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
