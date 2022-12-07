import React from 'react';
import { ProductCard } from '../../components/ProductCard';
import { Card } from '../../types/Card';

import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import './Slider.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Props = {
  phones: Card[];
};

export const Slider: React.FC<Props> = ({ phones }) => {
  const visiblePhonse = phones.slice(1, 9);

  return (
    <div className="brand-new-models">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={18}
        slidesPerView={1.3}
        breakpoints={{
          640: { slidesPerView: 2.5 },
          1200: { slidesPerView: 4 },
        }}
        navigation={{
          prevEl: '.homepage__button-prev',
          nextEl: '.homepage__button-next',
        }}
        loop={true}
        >
          {visiblePhonse.map(phone =>
            <SwiperSlide key={phone.id}>
              <ProductCard phone={phone} />
            </SwiperSlide>)
          }
      </Swiper>
    </div>
  );
};
