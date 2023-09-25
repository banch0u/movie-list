import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import './swiper.css';
import { FreeMode } from 'swiper/modules';
import Img from '../../assets/images/home.png';
import Image from 'next/image';
import { PlayButton } from '@/app/icons';

const TrailersItem = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3.2}
        spaceBetween={24}
        freeMode={true}
        pagination={false}
        modules={[FreeMode]}
        className='mySwiper'>
        <SwiperSlide>
          <div>
            <PlayButton />
          </div>
          <Image src={Img} alt='' className='rounded-xl' />
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <PlayButton />
          </div>
          <Image src={Img} alt='' className='rounded-xl' />
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <PlayButton />
          </div>
          <Image src={Img} alt='' className='rounded-xl' />
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <PlayButton />
          </div>
          <Image src={Img} alt='' className='rounded-xl' />
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <PlayButton />
          </div>
          <Image src={Img} alt='' className='rounded-xl' />
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <PlayButton />
          </div>
          <Image src={Img} alt='' className='rounded-xl' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TrailersItem;
