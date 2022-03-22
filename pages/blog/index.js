import Head from 'next/head';
import { motion } from 'framer-motion';
import { client } from 'client';
import { allArticles } from '@utils/data';
import ArticlesList from '@components/blog/ArticlesList';
import styles from '@components/layout/Layout.module.scss';

const Blog = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Blog - Lucian-DEV</title>
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
            <div className="mainTitle textCenter">
              <h1>
                Some <span>articles</span>
              </h1>
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
