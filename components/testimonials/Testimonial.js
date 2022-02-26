import Image from 'next/image';
import { urlFor } from 'client';
import styles from './Testimonials.module.scss';

const Testimonial = ({ testimonial }) => {
  return (
    <div className={styles.testimonialWrapper}>
      <div className={styles.authorImg}>
        <Image
          src={urlFor(testimonial.authorImage).url()}
          alt={testimonial.author}
          width={90}
          height={90}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRlACAABXRUJQVlA4WAoAAAAgAAAAPQMAbgIASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOEwRAAAALz2DmwAHUKMa1aj/gYjofwAA"
        />
      </div>
      <div className={styles.authorTest}>
        <p>{testimonial.text}</p>
      </div>
      <div className={styles.authorInfo}>
        <div>
          <h5>{testimonial.author}</h5>
          <i>-</i>
          <a href={testimonial.authorProject} target="_blank" rel="noreferrer noopener">
            {testimonial.authorProject}
          </a>
        </div>
        <span>{testimonial.authorTitle}</span>
      </div>
    </div>
  );
};

export default Testimonial;
