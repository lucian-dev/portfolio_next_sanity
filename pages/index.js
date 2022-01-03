import { client } from '../client';
import { allTestimonials, featuredProjects } from '@utils/data';
import HomeContent from '@components/home/HomeContent';
import LastProjects from '@components/projects/LastProjects';
import Testimonials from '@components/testimonials/Testimonials';
import styles from '@components/layout/Layout.module.scss';

export default function Home({ lastProjects, testimonials }) {
  return (
    <section className={styles.mainSection}>
      <div className={styles.displayContent}>
        <div className={styles.container}>
          <HomeContent />
          <LastProjects lastProjects={lastProjects} />
          <Testimonials testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}

export const getStaticProps = async () => {
  const lastProjects = await client.fetch(featuredProjects);
  const testimonials = await client.fetch(allTestimonials);

  return {
    props: { lastProjects, testimonials },
  };
};
