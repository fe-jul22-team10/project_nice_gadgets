import React from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import './Banner.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Banner: React.FC = () => {
  return (
    <div className="banner">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={18}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        >
        <SwiperSlide>
          <img
            src="https://project-nice-gadgets.herokuapp.com/img/banner_1.png"
            alt="banner_1"
            className="banner__image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://project-nice-gadgets.herokuapp.com/img/banner_2.png"
            alt="banner_2"
            className="banner__image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://project-nice-gadgets.herokuapp.com/img/banner_3.png"
            alt="banner_3"
            className="banner__image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
