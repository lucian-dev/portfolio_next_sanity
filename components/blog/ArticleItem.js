import BlockContent from '@sanity/block-content-to-react';
import Sidebar from './Sidebar';
import ArticleCard from './ArticleCard';
import styles from './Blog.module.scss';

const ArticleItem = ({ article, related }) => {
  const { title, body, category } = article[0];

  return (
    <div className={styles.rowArticles}>
      <div className={styles.articleContent}>
        <div className="mainTitle">
          <h1>{title}</h1>
        </div>
        <BlockContent
          blocks={body}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          dataset="production"
        />
      </div>
      <Sidebar>
        <div className={styles.sidebarCol}>
          <h3>Related Articles</h3>
          {related
            .filter((item) => item.category === category)
            .slice(0, 2)
            .map((article) => (
              <ArticleCard key={article._id} article={article} />
            ))}
        </div>
      </Sidebar>
    </div>
  );
};

export default ArticleItem;
