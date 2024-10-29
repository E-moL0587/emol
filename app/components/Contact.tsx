import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Contact.module.css';

interface FormData {
  userMail: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ userMail: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', message: '', isError: false });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setModalContent({
          title: 'Message Sent Successfully!',
          message: 'Thank you for reaching out! I will get back to you as soon as possible.',
          isError: false
        });
        setFormData({ userMail: '', message: '' });
      } else {
        const error = await res.json();
        throw new Error(error.message || 'Something went wrong');
      }
    } catch (error) {
      setModalContent({
        title: 'Oops! Something went wrong...',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.',
        isError: true
      });
    } finally {
      setIsSubmitting(false);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent({ title: '', message: '', isError: false });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get in Touch</h2>
        <p className={styles.subtitle}>Have a question or want to work together?</p>

        <form ref={formRef} onSubmit={handleSubmit} className={`${styles.form} ${styles.fadeInUp}`}>
          <div className={styles.formGroup}>
            <label htmlFor="userMail" className={styles.label}>Your Email Address</label>
            <input type="email" id="userMail" name="userMail" value={formData.userMail} onChange={handleChange} className={styles.input} placeholder="example@domain.com" required disabled={isSubmitting} />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Your Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} className={styles.textarea} placeholder="Write your message here..." rows={5} required disabled={isSubmitting} />
          </div>

          <button type="submit" className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`} disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className={styles.spinner}></span>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>

        {showModal && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={`${styles.modalContent} ${modalContent.isError ? styles.errorModal : styles.successModal}`} onClick={e => e.stopPropagation()}>
              <h3 className={styles.modalTitle}>{modalContent.title}</h3>
              <p className={styles.modalMessage}>{modalContent.message}</p>
              <button onClick={closeModal} className={styles.closeButton}>Close</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
