import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import './swiper.css';
import { FreeMode } from 'swiper/modules';
import Img from '../../assets/images/home.png';
import Image from 'next/image';
import { PlayButton } from '../../icons';
import { useDispatch, useSelector } from 'react-redux';
import { getVideos } from '../../redux/movies/videosSlice';
import { getImages } from '../../redux/movies/imagesSlice';
const TrailersItem = ({ data }) => {
  const [ids, setIds] = useState([]);
  console.lo;
  return (
    <div>
      <Swiper
        slidesPerView={3.2}
        spaceBetween={24}
        freeMode={true}
        pagination={false}
        modules={[FreeMode]}
        className='mySwiper'>
        {ids?.map((item) => (
          <SwiperSlide key={item}>
            <div>
              <PlayButton />
            </div>
            {/* <img src={Img} alt='' className='rounded-xl' /> */}
            <div></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrailersItem;
