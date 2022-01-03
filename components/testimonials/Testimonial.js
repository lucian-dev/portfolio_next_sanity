import { urlFor } from 'client';
import styles from './Testimonials.module.scss';

const Testimonial = ({ testimonial }) => {
  return (
    <div className={styles.testimonialWrapper}>
      <div className={styles.authorImg}>
        <img src={urlFor(testimonial.authorImage).url()} alt={testimonial.author} />
      </div>
      <div className={styles.authorTest}>
        <p>{testimonial.text}</p>
      </div>
      <div className={styles.authorInfo}>
        <h5>{testimonial.author}</h5>
        <i>-</i>
        <a href={testimonial.authorProject} target="_blank" rel="noreferrer noopener">
          {testimonial.authorProject}
        </a>
      </div>
    </div>
  );
};

export default Testimonial;
