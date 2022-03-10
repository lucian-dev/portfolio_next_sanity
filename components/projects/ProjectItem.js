import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GiClick } from 'react-icons/gi';
import { urlFor } from 'client';
import { capitalize } from '@utils/capitalize';
import { placeholder } from '@utils/data';
import styles from './Projects.module.scss';

const ProjectItem = ({ project }) => {
  const [tap, setTap] = useState(false);

  const { title, projectType, tech, maintenance, collab, description, projectUrl, image } =
    project[0];

  return (
    <div className={styles.project}>
      <div className="mainTitle">
        <h1>{title}</h1>
      </div>
      <div className={styles.gridProject}>
        <div className={styles.info}>
          <span>Project type:</span>
          <p>{capitalize(projectType)}</p>
          <span>Tech:</span>
          <p>{tech}</p>
          <span>Maintenance:</span>
          <p>{capitalize(maintenance)}</p>
          <span>Collab:</span>
          <p>{collab}</p>
          {description && <p>{description}</p>}
          <a
            href={projectUrl}
            className={`btn ${styles.linkProject}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit website
          </a>
          <div className="btnBottom">
            <Link href="/projects">
              <a className="btnS">...back to All projects</a>
            </Link>
          </div>
        </div>
        <motion.div
          className={styles.projectImages}
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring' }}
        >
          <motion.div
            className={tap ? `${styles.imgFront} ${styles.onTap}` : `${styles.imgFront}`}
            onTapStart={() => setTap(true)}
            onTapCancel={() => setTap(false)}
            onTap={() => setTap(false)}
          >
            <GiClick />
            <Image
              src={urlFor(image).url()}
              alt={title}
              layout="fill"
              placeholder="blur"
              blurDataURL={placeholder}
            />
          </motion.div>
          <div className={styles.imgBackWrapper}>
            <div className={styles.imgBackInner}>
              <Image
                src={urlFor(image).url()}
                alt={title}
                layout="fill"
                placeholder="blur"
                blurDataURL={placeholder}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectItem;
