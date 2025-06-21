import React from "react";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>About Us</h1>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Welcome to Our Blog</h2>
          <p className={styles.description}>
            We are passionate about sharing knowledge, insights, and stories
            that inspire and educate. Our blog is a platform where writers,
            thinkers, and creators come together to share their perspectives on
            technology, culture, lifestyle, and everything in between.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p className={styles.description}>
            Our mission is to create a vibrant community of readers and writers
            who are curious about the world around them. We believe in the power
            of storytelling and the importance of diverse voices in shaping our
            understanding of the world.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>What We Cover</h2>
          <div className={styles.topics}>
            <div className={styles.topic}>
              <h3>Technology</h3>
              <p>Latest trends, tutorials, and insights from the tech world</p>
            </div>
            <div className={styles.topic}>
              <h3>Culture</h3>
              <p>Art, music, literature, and cultural phenomena</p>
            </div>
            <div className={styles.topic}>
              <h3>Lifestyle</h3>
              <p>Health, wellness, travel, and personal development</p>
            </div>
            <div className={styles.topic}>
              <h3>Sports</h3>
              <p>Sports news, analysis, and commentary</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Join Our Community</h2>
          <p className={styles.description}>
            Whether you&apos;re a reader looking for inspiration or a writer
            wanting to share your story, we welcome you to join our community.
            Together, we can create meaningful conversations and build
            connections that last.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
