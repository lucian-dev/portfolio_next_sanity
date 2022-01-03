import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonial from './Testimonial';
import styles from './Testimonials.module.scss';

SwiperCore.use([Navigation, Pagination]);

const Testimonials = ({ testimonials }) => {
  return (
    <div className={styles.testimonials}>
      <div className="mainTitle">
        <h2>
          They <span>say...</span>
        </h2>
      </div>
      <Swiper
        slidesPerView={1}
        navigation
        pagination
        spaceBetween={50}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial._id}>
            <Testimonial testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
