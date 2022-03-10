import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IoLinkOutline } from 'react-icons/io5';
import { urlFor } from 'client';
import { capitalize } from '@utils/capitalize';
import { placeholder } from '@utils/data';
import styles from './Projects.module.scss';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ y: '-50%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '-75%', opacity: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30, mass: 0.5 }}
    >
      <Link href={`/projects/${project.slug.current}`}>
        <a className={styles.card}>
          <motion.div className={styles.cardImgBig}>
            <Image
              src={urlFor(project.image).url()}
              alt={project.title}
              layout="fill"
              placeholder="blur"
              blurDataURL={placeholder}
            />
            <div className={styles.cardInfo}>
              <IoLinkOutline />
              <h3>{project.title}</h3>
            </div>
          </motion.div>
          <div className={styles.cardImgSm}>
            <span className={styles.cardCategory}>{capitalize(project.projectType)}</span>
            <Image
              src={urlFor(project.image).url()}
              alt={project.title}
              layout="fill"
              placeholder="blur"
              blurDataURL={placeholder}
            />
          </div>
        </a>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
