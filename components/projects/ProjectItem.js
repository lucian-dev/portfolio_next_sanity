import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { capitalize } from '@utils/capitalize';
import { urlFor } from '../../client';
import styles from './Projects.module.scss';

const placeholder =
  'data:image/webp;base64,UklGRlACAABXRUJQVlA4WAoAAAAgAAAAPQMAbgIASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOEwRAAAALz2DmwAHUKMa1aj/gYjofwAA';

const ProjectItem = ({ project }) => {
  return (
    <>
      {project.map((item) => (
        <div className={styles.project} key={item._id}>
          <div className="mainTitle">
            <h1>{item.title}</h1>
          </div>
          <div className={styles.gridProject}>
            <div className={styles.info}>
              <span>Project type:</span>
              <p>{capitalize(item.projectType)}</p>
              <span>Tech:</span>
              <p>{item.tech}</p>
              <span>Maintenance:</span>
              <p>{capitalize(item.maintenance)}</p>
              <span>Collab:</span>
              <p>{item.collab}</p>
              <a
                href={item.projectUrl}
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
              <div className={styles.imgFront}>
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.title}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={placeholder}
                />
              </div>
              <div className={styles.imgBackWrapper}>
                <div className={styles.imgBackInner}>
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.title}
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={placeholder}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectItem;
