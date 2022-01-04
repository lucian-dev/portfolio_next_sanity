import Link from 'next/link';
import { urlFor } from '../../client';
import { IoLinkOutline } from 'react-icons/io5';
import styles from './Projects.module.scss';

const ProjectCard = ({ item }) => {
  return (
    <div className={styles.lpCard}>
      <Link href={`/projects/${item.slug.current}`}>
        <a className={styles.lpLink}>
          <div className={styles.lpImgBig}>
            <img src={urlFor(item.image).url()} alt={item.title} loading="lazy" />
            <div className={styles.lpInfo}>
              <IoLinkOutline />
              <h3>{item.title}</h3>
            </div>
          </div>
          <div className={styles.lpImgSm}>
            <span className={styles.category}>{item.projectType.charAt(0).toUpperCase() + item.projectType.slice(1)}</span>
            <img src={urlFor(item.image).url()} alt={item.title} loading="lazy" />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProjectCard;
