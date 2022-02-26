import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { client } from '../../client';
import { categories, filteredProjects } from '@utils/data';
import ProjectCard from '@components/projects/ProjectCard';
import styles from './Projects.module.scss';

const ProjectsList = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState();
  const [activeProjects, setActiveProjects] = useState(null);

  useEffect(() => {
    if (activeCategory) {
      const query = filteredProjects(activeCategory);
      client.fetch(query).then((data) => {
        setActiveProjects(data);
      });
    } else {
      setActiveProjects(projects);
    }
  }, [activeCategory, projects]);

  return (
    <div className={styles.projects}>
      <div className="mainTitle textCenter">
        <h1>
          Selected <span>projects</span>
        </h1>
      </div>
      <ul className={styles.filterProducts}>
        <li>
          <button
            className={`btnS ${!activeCategory ? 'isActive' : ''}`}
            onClick={() => setActiveCategory(null)}
          >
            View All
          </button>
        </li>
        {categories.map((category) => {
          const isActive = category.name.toLowerCase() === activeCategory;
          return (
            <li key={category.id}>
              <button
                className={`btnS ${isActive ? 'isActive' : ''}`}
                onClick={() => setActiveCategory(category.name.toLowerCase())}
              >
                {category.name}
              </button>
            </li>
          );
        })}
      </ul>
      <div className={styles.projectsGrid}>
        <AnimatePresence exitBeforeEnter>
          {activeProjects &&
            activeProjects.map((project) => <ProjectCard key={project._id} item={project} />)}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectsList;
