import Head from 'next/head';
import { client } from '../../client';
import { allProjects, projectDetail, allTestimonials } from '../../utils/data';
import ProjectItem from '@components/projects/ProjectItem';
import Testimonials from '@components/testimonials/Testimonials';
import styles from '@components/layout/Layout.module.scss';

const ProjectPage = ({ project, testimonials }) => {
  return (
    <>
      <Head>
        <title>Project - {project[0].title}</title>
      </Head>
      <section className={styles.mainSection}>
        <div className={styles.displayContent}>
          <div className={styles.container}>
            <ProjectItem project={project} />
            <Testimonials testimonials={testimonials} />
          </div>
        </div>
      </section>
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
