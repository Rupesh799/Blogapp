import React from "react";
import styles from "./contact.module.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Contact Us</h1>

        <div className={styles.contactGrid}>
          {/* Contact Information */}
          <div className={styles.contactInfo}>
            <h2 className={styles.sectionTitle}>Get in Touch</h2>
            <p className={styles.description}>
              We&apos;d love to hear from you! Whether you have a question,
              feedback, or want to contribute to our blog, feel free to reach
              out to us.
            </p>

            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <div className={styles.icon}>
                  <FaEnvelope />
                </div>
                <div className={styles.infoContent}>
                  <h3>Email</h3>
                  <p>hello@blogapp.com</p>
                  <p>support@blogapp.com</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.icon}>
                  <FaPhone />
                </div>
                <div className={styles.infoContent}>
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                  <p>+1 (555) 987-6543</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.icon}>
                  <FaMapMarkerAlt />
                </div>
                <div className={styles.infoContent}>
                  <h3>Address</h3>
                  <p>123 Blog Street</p>
                  <p>Digital City, DC 12345</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.icon}>
                  <FaClock />
                </div>
                <div className={styles.infoContent}>
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9AM - 6PM</p>
                  <p>Saturday: 10AM - 4PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.contactForm}>
            <h2 className={styles.sectionTitle}>Send us a Message</h2>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.input}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={styles.input}
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className={styles.textarea}
                  placeholder="Tell us more about your inquiry..."
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
