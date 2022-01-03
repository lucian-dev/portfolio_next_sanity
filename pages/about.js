import Head from 'next/head';
import { client } from '../client';
import { featuredProjects, allTestimonials } from '@utils/data';
import AboutContent from '@components/about/AboutContent';
import LastProjects from '@components/projects/LastProjects';
import Testimonials from '@components/testimonials/Testimonials';
import styles from '@components/layout/Layout.module.scss';

const About = ({ lastProjects, testimonials }) => {
  return (
    <>
      <Head>
        <title>About - Lucian-DEV</title>
      </Head>
      <section className={styles.mainSection}>
        <div className={styles.displayContent}>
          <div className={styles.container}>
            <AboutContent />
            <LastProjects lastProjects={lastProjects} />
            <Testimonials testimonials={testimonials} />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

export const getStaticProps = async () => {
  const lastProjects = await client.fetch(featuredProjects);
  const testimonials = await client.fetch(allTestimonials);

  return {
    props: { lastProjects, testimonials },
  };
};
