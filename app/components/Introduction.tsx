import React from 'react';
import styles from '../styles/Introduction.module.css';

const Introduction = () => {
  return (
    <section id="about" className={styles.introduction}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src="/images/profile.jpg" alt="Kaito Takeuchi" className={styles.profileImage} />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>Coding as Art</h1>
          <p className={styles.description}>Hi, I&apos;m Kaito Takeuchi, a computer science student at Seikei University. I&apos;m aspiring to be a backend engineer.</p>

          <div className={styles.socialLinks}>
            <a href="https://twitter.com/Kaito_32768" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <i className={`${styles.socialIcon} fa fa-twitter`}></i>
            </a>
            <a href="https://www.instagram.com/ka.ito2443/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <i className={`${styles.socialIcon} fa fa-instagram`}></i>
            </a>
            <a href="https://github.com/E-moL0587" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <i className={`${styles.socialIcon} fa fa-github`}></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
