import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { capitalize } from '@utils/capitalize';
import { urlFor } from '../../client';
import { IoLinkOutline } from 'react-icons/io5';
import styles from './Projects.module.scss';

const placeholder =
  'data:image/webp;base64,UklGRlACAABXRUJQVlA4WAoAAAAgAAAAPQMAbgIASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOEwRAAAALz2DmwAHUKMa1aj/gYjofwAA';

const ProjectCard = ({ item }) => {
  return (
    <motion.div
      className={styles.lpCard}
      layout
      initial={{ y: '-50%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '-75%', opacity: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30, mass: 0.5 }}
    >
      <Link href={`/projects/${item.slug.current}`}>
        <a className={styles.lpLink}>
          <motion.div className={styles.lpImgBig}>
            <Image
              src={urlFor(item.image).url()}
              alt={item.title}
              layout="fill"
              placeholder="blur"
              blurDataURL={placeholder}
            />
            <div className={styles.lpInfo}>
              <IoLinkOutline />
              <h3>{item.title}</h3>
            </div>
          </motion.div>
          <div className={styles.lpImgSm}>
            <span className={styles.category}>{capitalize(item.projectType)}</span>
            <Image
              src={urlFor(item.image).url()}
              alt={item.title}
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
