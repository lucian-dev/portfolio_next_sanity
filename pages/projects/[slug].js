import Head from 'next/head';
import { motion } from 'framer-motion';
import { client } from '../../client';
import { allProjects, projectDetail, allTestimonials } from '../../utils/data';
import ProjectItem from '@components/projects/ProjectItem';
import Testimonials from '@components/testimonials/Testimonials';
import styles from '@components/layout/Layout.module.scss';

const ProjectPage = ({ project, testimonials }) => {
  return (
    <>
      <Head>
        <title>{project.title}</title>
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
            <ProjectItem project={project} />
            <Testimonials testimonials={testimonials} />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export const getStaticProps = async ({ params: { slug } }) => {
  const project = await client.fetch(projectDetail(`${slug}`));
  const testimonials = await client.fetch(allTestimonials);

  return { props: { project, testimonials } };
};

export const getStaticPaths = async () => {
  const projects = await client.fetch(allProjects);

  const paths = projects.map((project) => ({
    params: { slug: project.slug.current },
  }));

  return { paths, fallback: false };
};

export default ProjectPage;
