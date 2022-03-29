import { motion } from 'framer-motion';
import { client } from 'client';
import { allArticles } from '@utils/data';
import siteMetadata from '@utils/siteMetadata';
import HeadSeo from '@components/head/HeadSeo';
import ArticlesList from '@components/blog/ArticlesList';
import styles from '@components/layout/Layout.module.scss';

const Blog = ({ articles }) => {
  return (
    <>
      <HeadSeo
        title={`Articles -- Lucian-DEV`}
        description={`Freelance, Front-End stuff, Snippets...`}
        canonicalUrl={`${siteMetadata.siteUrl}/blog`}
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
            <div className="mainTitle textCenter">
              <h1>
                Some <span>articles</span>
              </h1>
              <p>Freelance, Front-End stuff, Snippets...</p>
            </div>
            <ArticlesList articles={articles} />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export const getStaticProps = async () => {
  const articles = await client.fetch(allArticles);

  return {
    props: { articles },
    revalidate: 10,
  };
};

export default Blog;
