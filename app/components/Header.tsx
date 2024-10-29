import React, { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;
      
      setVisible(isScrollingDown ? false : true);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header className={`${styles.header} ${visible ? styles.visible : styles.hidden}`}>
      <nav className={styles.nav}>
        <div className={styles.title}>Kaito Takeuchi</div>

        <button className={`${styles.hamburger} ${isOpen ? styles.active : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
