import React, { useEffect, useRef } from 'react';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projectData = [
    {
      title: "Math Calculator",
      description: "An online tool for easy integral calculation.",
      link: "https://math-calculator-info.vercel.app",
      image: "/images/project1.png"
    },
    {
      title: "Pixforge",
      description: "A website for converting 3D models to voxel and mesh formats.",
      link: "https://www.pixforge.jp",
      image: "/images/project2.png"
    },
    {
      title: "Disney Real-time Info",
      description: "A website that provides real-time information about the Disney Sea attraction wait times.",
      link: "https://disney-realtime-info.vercel.app",
      image: "/images/project3.png"
    }
  ];

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

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setProjectRef = (el: HTMLDivElement | null, index: number) => {
    projectRefs.current[index] = el;
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Projects</h2>

        <div className={styles.projectsContainer}>
          {projectData.map((project, index) => (
            <div key={index} ref={(el) => setProjectRef(el, index)} className={`${styles.project} ${styles.fadeInUp}`} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} className={styles.projectImage} />
                <div className={styles.overlay}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.viewButton}>View Project</a>
                </div>
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>{project.link.replace(/(https?:\/\/)?(www\.)?/, '')} →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
