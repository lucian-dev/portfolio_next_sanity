import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { urlFor } from 'client';
import { placeholder } from '@utils/data';
import styles from './Blog.module.scss';

const ArticleCard = ({ article }) => {
  return (
    <motion.div
      className={styles.card}
      layout
      initial={{ y: '-50%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '-75%', opacity: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30, mass: 0.5 }}
    >
      <Link href={`/blog/${article.slug.current}`}>
        <a>
          <div className={styles.cardImage}>
            <Image
              src={urlFor(article.featuredImage).url()}
              alt={article.title}
              layout="fill"
              placeholder="blur"
              blurDataURL={placeholder}
            />
          </div>
          <div className={styles.cardInfo}>
            <div className={styles.cardMeta}>
              <span>{article.articleDate}</span>
              <span className={styles.cardMetaCat}>{article.category}</span>
            </div>
            <h4>{article.title}</h4>
          </div>
        </a>
      </Link>
    </motion.div>
  );
};

export default ArticleCard;
