import { AnimatePresence } from 'framer-motion';
import { useFilter } from 'hooks/useFilter';
import { articleCategories, filteredArticles } from '@utils/data';
import Sidebar from './Sidebar';
import Filters from '../filters/Filters';
import ArticleCard from './ArticleCard';
import styles from './Blog.module.scss';

const ArticlesList = ({ articles }) => {
  const { data: activeArticles, category, setCategory } = useFilter(filteredArticles, articles);

  let now = new Date();
  let backdate = now.setDate(now.getDate() - 5);
  backdate = new Date(backdate).toISOString().slice(0, 10);

  return (
    <div className={`${styles.rowArticles} ${styles.blogPage}`}>
      <div className={styles.articlesGrid}>
        <AnimatePresence>
          {activeArticles?.length >= 1 ? (
            activeArticles.map((article) => <ArticleCard key={article._id} article={article} />)
          ) : (
            <p>No articles found</p>
          )}
        </AnimatePresence>
      </div>
      <Sidebar>
        <div className={styles.sidebarCol}>
          <h3>Categories</h3>
          <Filters
            category={category}
            setCategory={setCategory}
            categoryLink={articleCategories}
            classType="filterArticles"
          />
        </div>
        <div className={styles.sidebarCol}>
          <h3>Most recent</h3>
          {articles
            .filter((item) => item.articleDate >= backdate)
            .slice(0, 2)
            .map((article) => (
              <ArticleCard key={article._id} article={article} />
            ))}
        </div>
      </Sidebar>
    </div>
  );
};

export default ArticlesList;
