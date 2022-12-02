import React from 'react';
import { useMediaQuery } from 'react-responsive';
import BannerMobile1 from '../../assets/images/photos/banner-mobile-1.png';
import BannerMobile2 from '../../assets/images/photos/banner-mobile-2.png';
import BannerMobile3 from '../../assets/images/photos/banner-mobile-3.png';
import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import './Banner.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Banner: React.FC = () => {
  const baseUrl = 'https://project-nice-gadgets.onrender.com/img/';
  const onTablet = useMediaQuery({
    query: '(max-width: 640px)',
  });

  return (
    <>
      <div className="banner">
        <div className="prev">
          <div className="prev__arrow"></div>
        </div>
        <div className="banner__slider">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={18}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.prev',
              nextEl: '.next',
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            >
            <SwiperSlide>
              <img
                src={onTablet ? BannerMobile1 : `${baseUrl}/banner_1.png`}
                alt="banner_1"
                className="banner__image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={onTablet ? BannerMobile2 : `${baseUrl}/banner_2.png`}
                alt="banner_2"
                className="banner__image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={onTablet ? BannerMobile3 : `${baseUrl}/banner_3.png`}
                alt="banner_3"
                className="banner__image"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="next">
          <div className="next__arrow"></div>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </>
  );
};
