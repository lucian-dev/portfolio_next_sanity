import Link from 'next/link';
import { urlFor } from '../../client';
import styles from './Projects.module.scss';

const ProjectItem = ({ project }) => {
  return (
    <>
      {project &&
        project.map((item) => (
          <div className={styles.project} key={item._id}>
            <div className="mainTitle">
              <h1>{item.title}</h1>
            </div>
            <div className={styles.gridProject}>
              <div className={styles.info}>
                <span>Project type:</span>
                <p>{item.projectType.charAt(0).toUpperCase() + item.projectType.slice(1)}</p>
                <span>Tech:</span>
                <p>{item.tech}</p>
                <span>Maintenance:</span>
                <p>{item.maintenance.charAt(0).toUpperCase() + item.maintenance.slice(1)}</p>
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
                  <img src={urlFor(item.image).url()} alt={item.title} loading="lazy" />
                </div>
                <img
                  src={urlFor(item.image).url()}
                  alt={item.title}
                  className={styles.imgBack}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ProjectItem;
