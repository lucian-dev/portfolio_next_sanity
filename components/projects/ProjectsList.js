import { AnimatePresence } from 'framer-motion';
import { projectCategories, filteredProjects } from '@utils/data';
import { useFilter } from 'hooks/useFilter';
import Filters from '../filters/Filters';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.scss';

const ProjectsList = ({ projects }) => {
  const { data: activeProjects, category, setCategory } = useFilter(filteredProjects, projects);

  return (
    <>
      <Filters category={category} setCategory={setCategory} categoryLink={projectCategories} />
      <div className={styles.projectsGrid}>
        <AnimatePresence>
          {activeProjects &&
            activeProjects.map((project) => <ProjectCard key={project._id} project={project} />)}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ProjectsList;
