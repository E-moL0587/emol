import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    setShowModal(true);
    setMessage('');
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get in Touch</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className={styles.textarea} rows={5} required />
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>

        {showModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h3 className={styles.modalTitle}>Message Sent</h3>
              <p className={styles.modalMessage}>Thank you for your message.</p>
              <button onClick={() => setShowModal(false)} className={styles.closeButton}>OK</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
