import React from 'react';
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import './Banner.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Banner: React.FC = () => {
  const baseUrl = 'https://project-nice-gadgets.herokuapp.com/img/';

  return (
    <>
      <div className="banner">
        <div className="prev" />
        <div className="banner__slider">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={18}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: '.prev',
              nextEl: '.next',
            }}
            scrollbar={{ draggable: true }}
            >
            <SwiperSlide>
              <img
                src={`${baseUrl}/banner_1.png`}
                alt="banner_1"
                className="banner__image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`${baseUrl}/banner_2.png`}
                alt="banner_2"
                className="banner__image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`${baseUrl}/banner_3.png`}
                alt="banner_3"
                className="banner__image"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="next" />
      </div>
    </>
  );
};
