import React from 'react'
import styles from './Footer.module.css'
import SafeImage from '../ui/SafeImage'
import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.mainContent}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <SafeImage 
                src="/images/logo.png" 
                width={50} 
                height={50} 
                alt="Blog Logo" 
                className={styles.imgLogo} 
                fallbackSrc="/images/logo.png"
              />
              <h2 className={styles.title}>BlogApp</h2>
            </div>
            <p className={styles.description}>
              Discover amazing stories, insights, and perspectives from writers around the world. 
              Join our community of readers and creators.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaTwitter />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksSection}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <div className={styles.linksList}>
              <Link href="/" className={styles.link}>Home</Link>
              <Link href="/about" className={styles.link}>About Us</Link>
              <Link href="/blog" className={styles.link}>Blog</Link>
              <Link href="/contact" className={styles.link}>Contact</Link>
              <Link href="/write" className={styles.link}>Write a Post</Link>
            </div>
          </div>

          {/* Categories */}
          <div className={styles.categoriesSection}>
            <h3 className={styles.sectionTitle}>Categories</h3>
            <div className={styles.linksList}>
              <Link href="/blog?cat=tech" className={styles.link}>Technology</Link>
              <Link href="/blog?cat=sports" className={styles.link}>Sports</Link>
              <Link href="/blog?cat=culture" className={styles.link}>Culture</Link>
              <Link href="/blog?cat=style" className={styles.link}>Style</Link>
              <Link href="/blog?cat=music" className={styles.link}>Music</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className={styles.contactSection}>
            <h3 className={styles.sectionTitle}>Contact Info</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <span>hello@blogapp.com</span>
              </div>
              <div className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>123 Blog Street, Digital City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {currentYear} BlogApp. All rights reserved.
            </p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy" className={styles.bottomLink}>Privacy Policy</Link>
              <Link href="/terms" className={styles.bottomLink}>Terms of Service</Link>
              <Link href="/cookies" className={styles.bottomLink}>Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer