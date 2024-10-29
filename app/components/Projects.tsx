import React from 'react';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Projects</h2>
        <div className={styles.projectsContainer}>
          <div className={styles.project}>
            <h3 className={styles.projectTitle}>Math Calculator</h3>
            <p className={styles.projectDescription}>An online tool for easy integral calculation.</p>
            <a href="https://math-calculator-info.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              math-calculator-info.vercel.app
            </a>
          </div>

          <div className={styles.project}>
            <h3 className={styles.projectTitle}>Pixforge</h3>
            <p className={styles.projectDescription}>A website for converting 3D models to voxel and mesh formats.</p>
            <a href="https://www.pixforge.jp" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              www.pixforge.jp
            </a>
          </div>

          <div className={styles.project}>
            <h3 className={styles.projectTitle}>Disney Real-time Info</h3>
            <p className={styles.projectDescription}>A website that provides real-time information about the Disney Sea attraction wait times.</p>
            <a href="https://disney-realtime-info.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              disney-realtime-info.vercel.app
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
