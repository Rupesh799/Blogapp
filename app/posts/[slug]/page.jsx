import React, { Suspense } from "react";
import styles from "./singleBlog.module.css";
import Menu from "../../components/menu/Menu";
import Comments from "../../components/comments/Comments";
import SafeImage from "../../components/ui/SafeImage";
import { SkeletonPost } from "../../components/ui/Skeleton";

const getData = async (slug) => {
  const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to load posts");
  }
  return res.json();
};

const SinglePageSkeleton = () => (
  <div className={styles.container}>
    <SkeletonPost />
  </div>
);

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const singlePost = await getData(slug);
  
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Suspense fallback={<SinglePageSkeleton />}>
      <div className={styles.container}>
        <div className={styles.blogHeader}>
          <div className={styles.imgContainer}>
            <SafeImage 
              src={singlePost?.img} 
              alt={singlePost?.title} 
              fill 
              className={styles.img}
              fallbackSrc="/images/logo.png"
            />
          </div>
          <div className={styles.infoContainer}>
            <div>
              <h1 className={styles?.title}>{singlePost.title}</h1>
            </div>
            <div className={styles.userInfo}>
              <div className={styles?.userImage}>
                <SafeImage
                  src={singlePost?.user?.image}
                  alt={singlePost?.user?.name || 'User'}
                  fill
                  className={styles.uimg}
                  fallbackSrc="/images/logo.png"
                />
              </div>
              <div className={styles.userDetails}>
                <h3 className={styles?.name}>{singlePost?.user?.name}</h3>
                <p className={styles?.date}>
                  {formatDate(singlePost?.user?.createdAt)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.post}>
            {singlePost?.desc && (
              <div
                className={styles.desc}
                dangerouslySetInnerHTML={{ __html: singlePost.desc }}
              />
            )}
          </div>
          <Menu />
        </div>
        <Comments postSlug={slug} />
      </div>
    </Suspense>
  );
};

export default SinglePage;
