import Head from 'next/head';
const { motion } = require('framer-motion');
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
      <motion.section
        className={styles.mainSection}
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', bounce: 0.6, duration: 0.5, damping: 14 }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.displayContent}>
          <div className={styles.container}>
            <ContactContent />
            <LastProjects lastProjects={lastProjects} />
            <Testimonials testimonials={testimonials} />
          </div>
        </div>
      </motion.section>
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
