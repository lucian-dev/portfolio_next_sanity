import Head from 'next/head';
import { motion } from 'framer-motion';
import { client } from '../../client';
import { allProjects, allTestimonials } from '@utils/data';
import ProjectsList from '@components/projects/ProjectsList';
import Testimonials from '@components/testimonials/Testimonials';
import styles from '@components/layout/Layout.module.scss';

const Projects = ({ projects, testimonials }) => {
  return (
    <>
      <Head>
        <title>Projects - Lucian-DEV</title>
      </Head>
      <motion.section
        className={styles.mainSection}
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', bounce: 0.6, duration: 0.5, damping: 14 }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.displayContent}>
          <div className={styles.container}>
            <ProjectsList projects={projects} />
            <Testimonials testimonials={testimonials} />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Projects;

export const getStaticProps = async () => {
  const projects = await client.fetch(allProjects);
  const testimonials = await client.fetch(allTestimonials);

  return {
    props: { projects, testimonials },
  };
};
