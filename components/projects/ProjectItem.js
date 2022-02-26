import Image from 'next/image';
import Link from 'next/link';
import { capitalize } from '@utils/capitalize';
import { urlFor } from '../../client';
import styles from './Projects.module.scss';

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
            <div className={styles.projectImages}>
              <div className={styles.imgFront}>
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.title}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRlACAABXRUJQVlA4WAoAAAAgAAAAPQMAbgIASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOEwRAAAALz2DmwAHUKMa1aj/gYjofwAA"
                />
                {/* <img src={urlFor(item.image).url()} alt={item.title} loading="lazy" /> */}
              </div>
              <div className={styles.imgBack}>
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.title}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRlACAABXRUJQVlA4WAoAAAAgAAAAPQMAbgIASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOEwRAAAALz2DmwAHUKMa1aj/gYjofwAA"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectItem;
