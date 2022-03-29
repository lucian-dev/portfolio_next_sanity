import Link from 'next/link';
import { useRouter } from 'next/router';
import BlockContent from '@sanity/block-content-to-react';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin } from 'react-icons/ti';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import siteMetadata from '@utils/siteMetadata';
import Sidebar from './Sidebar';
import ArticleCard from './ArticleCard';
import styles from './Blog.module.scss';

const ArticleItem = ({ article, related }) => {
  const router = useRouter();
  const { title, body, category } = article[0];

  return (
    <div className={styles.rowArticles}>
      <div className={styles.articleContent}>
        <Link href="/blog">
          <a className={styles.backIcon}>
            <RiArrowGoBackLine />
          </a>
        </Link>
        <div className="mainTitle">
          <h1>{title}</h1>
        </div>
        <BlockContent
          blocks={body}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          dataset="production"
        />
        <div className={styles.social}>
          <span>Share:</span>
          <FacebookShareButton url={`${siteMetadata.siteUrl}${router.asPath}`}>
            <TiSocialFacebook />
          </FacebookShareButton>
          <TwitterShareButton
            url={`${siteMetadata.siteUrl}${router.asPath}`}
            title={title}
            hashtags={['dev-articles', `${title}`]}
          >
            <TiSocialTwitter />
          </TwitterShareButton>
          <LinkedinShareButton url={`${siteMetadata.siteUrl}${router.asPath}`} title={title}>
            <TiSocialLinkedin />
          </LinkedinShareButton>
        </div>
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
