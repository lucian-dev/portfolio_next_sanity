import Head from 'next/head';
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
      <section className={styles.mainSection}>
        <div className={styles.displayContent}>
          <div className={styles.container}>
            <ProjectsList projects={projects} />
            <Testimonials testimonials={testimonials} />
          </div>
        </div>
      </section>
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
