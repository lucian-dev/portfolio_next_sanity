import { motion } from 'framer-motion';
import { client } from 'client';
import { featuredProjects, allTestimonials } from '@utils/data';
import siteMetadata from '@utils/siteMetadata';
import HeadSeo from '@components/head/HeadSeo';
import AboutContent from '@components/about/AboutContent';
import LastProjects from '@components/projects/LastProjects';
import Testimonials from '@components/testimonials/Testimonials';
import styles from '@components/layout/Layout.module.scss';

const About = ({ lastProjects, testimonials }) => {
  return (
    <>
      <HeadSeo
        title={`About -- Lucian-DEV`}
        description={`I build different types of websites like One-Page, Magazine, E-commerce, Portfolio, Blogs, Landing Pages.`}
        canonicalUrl={`${siteMetadata.siteUrl}/about`}
        ogType={'website'}
      />
      <motion.section
        className={styles.mainSection}
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', bounce: 0.6, duration: 0.5, damping: 14 }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.displayContent}>
          <div className={styles.container}>
            <AboutContent />
            <LastProjects lastProjects={lastProjects} />
            <Testimonials testimonials={testimonials} />
          </div>
        </div>
      </motion.section>
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
