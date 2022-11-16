import './swiper.scss'

/* Swiper  */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const SwiperSlider = ({ children }) => {
  return (
    <Swiper
      spaceBetween={20}
      modules={[Navigation]}
      navigation

      breakpoints={{
        0: {
          slidesPerView: 1
        },
        600: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 5
        }
      }}
    >
      {children}
    </Swiper>
  )
}

export default SwiperSlider