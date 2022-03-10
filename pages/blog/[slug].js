import Head from 'next/head';
import { motion } from 'framer-motion';
import { client } from 'client';
import { allArticles, singleArticle } from '@utils/data';
import ArticleItem from '@components/blog/ArticleItem';
import styles from '@components/layout/Layout.module.scss';

const Article = ({ article, related }) => {
  return (
    <>
      <Head>
        <title>Article - {article[0].title}</title>
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
            <ArticleItem article={article} related={related} />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export const getStaticProps = async ({ params: { slug } }) => {
  const article = await client.fetch(singleArticle(`${slug}`));
  const related = await client.fetch(allArticles);

  return { props: { article, related }, revalidate: 10 };
};

export const getStaticPaths = async () => {
  const articles = await client.fetch(allArticles);

  const paths = articles.map((article) => ({
    params: { slug: article.slug.current },
  }));

  return { paths, fallback: false };
};

export default Article;
