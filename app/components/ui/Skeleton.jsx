import React from 'react';
import styles from './Skeleton.module.css';

export const Skeleton = ({ className = '', ...props }) => (
  <div className={`${styles.skeleton} ${className}`} {...props} />
);

export const SkeletonText = ({ lines = 1, className = '' }) => (
  <div className={className}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton 
        key={i} 
        className={styles.textLine} 
        style={{ 
          width: i === lines - 1 ? '60%' : '100%',
          height: '16px',
          marginBottom: i < lines - 1 ? '8px' : '0'
        }} 
      />
    ))}
  </div>
);

export const SkeletonCard = () => (
  <div className={styles.cardSkeleton}>
    <Skeleton className={styles.imageSkeleton} />
    <div className={styles.contentSkeleton}>
      <Skeleton className={styles.titleSkeleton} />
      <SkeletonText lines={3} />
      <Skeleton className={styles.buttonSkeleton} />
    </div>
  </div>
);

export const SkeletonComment = () => (
  <div className={styles.commentSkeleton}>
    <div className={styles.commentHeader}>
      <Skeleton className={styles.avatarSkeleton} />
      <div className={styles.commentInfo}>
        <Skeleton className={styles.usernameSkeleton} />
        <Skeleton className={styles.dateSkeleton} />
      </div>
    </div>
    <SkeletonText lines={2} />
  </div>
);

export const SkeletonPost = () => (
  <div className={styles.postSkeleton}>
    <div className={styles.postHeader}>
      <Skeleton className={styles.postImageSkeleton} />
      <div className={styles.postContent}>
        <Skeleton className={styles.postTitleSkeleton} />
        <SkeletonText lines={4} />
      </div>
    </div>
  </div>
); 