import Head from 'next/head';
import { client } from '../client';
import { featuredProjects, allTestimonials } from '@utils/data';
import ContactContent from '@components/contact/ContactContent';
import LastProjects from '@components/projects/LastProjects';
import Testimonials from '@components/testimonials/Testimonials';
import styles from '@components/layout/Layout.module.scss';

const Contact = ({ lastProjects, testimonials }) => {
  return (
    <>
      <Head>
        <title>Contact - Lucian-DEV</title>
      </Head>
      <section className={styles.mainSection}>
        <div className={styles.displayContent}>
          <div className={styles.container}>
            <ContactContent />
            <LastProjects lastProjects={lastProjects} />
            <Testimonials testimonials={testimonials} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

export const getStaticProps = async () => {
  const lastProjects = await client.fetch(featuredProjects);
  const testimonials = await client.fetch(allTestimonials);

  return {
    props: { lastProjects, testimonials },
  };
};
