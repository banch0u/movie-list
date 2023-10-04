'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import './swiper.css';
import { FreeMode } from 'swiper/modules';
import Img from '../../assets/images/no_image_dark.png';
import Img2 from '../../assets/images/home.png';
import Image from 'next/image';
import Wrapper from '../UI/wrapper';
import Title from '../UI/title';
import Link from 'next/link';
const swiperSection = ({ bg = true, title, type = 'slide' }) => {
  return (
    <section
      className='py-16'
      style={{ backgroundColor: bg ? '#000' : '#1F1F1F' }}>
      <Wrapper>
        <Title link={false}>{title}</Title>
        {type === 'card' ? (
          <>
            <Swiper
              slidesPerView={7.5}
              spaceBetween={24}
              freeMode={true}
              pagination={false}
              modules={[FreeMode]}
              className='mySwiper mt-4 mb-2'>
              <SwiperSlide>
                <Image src={Img} alt='' className='rounded-t-xl' />
                <div className='bg-black rounded-b-xl p-2 text-sm'>
                  <p className='font-semibold'>Gary Oldman</p>
                  <p className='font-light'>James Gordon</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={Img} alt='' className='rounded-t-xl' />
                <div className='bg-black rounded-b-xl p-2 text-sm'>
                  <p className='font-semibold'>Gary Oldman</p>
                  <p className='font-light'>James Gordon</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Link href={''}>
                  <Image src={Img} alt='' className='rounded-t-xl' />
                </Link>
                <div className='bg-black rounded-b-xl p-2 text-sm'>
                  <Link href={''}>
                    <p className='font-semibold'>Gary Oldman</p>
                  </Link>
                  <p className='font-light'>James Gordon</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={Img} alt='' className='rounded-t-xl' />
                <div className='bg-black rounded-b-xl p-2 text-sm'>
                  <p className='font-semibold'>Gary Oldman</p>
                  <p className='font-light'>James Gordon</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={Img} alt='' className='rounded-t-xl' />
                <div className='bg-black rounded-b-xl p-2 text-sm'>
                  <p className='font-semibold'>Gary Oldman</p>
                  <p className='font-light'>James Gordon</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={Img} alt='' className='rounded-t-xl' />
                <div className='bg-black rounded-b-xl p-2 text-sm'>
                  <p className='font-semibold'>Gary Oldman</p>
                  <p className='font-light'>James Gordon</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={Img} alt='' className='rounded-t-xl' />
                <div className='bg-black rounded-b-xl p-2 text-sm'>
                  <p className='font-semibold'>Gary Oldman</p>
                  <p className='font-light'>James Gordon</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={Img} alt='' className='rounded-t-xl' />
                <div className='bg-black rounded-b-xl p-2 text-sm'>
                  <p className='font-semibold'>Gary Oldman</p>
                  <p className='font-light'>James Gordon</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={Img} alt='' className='rounded-t-xl' />
                <div className='bg-black rounded-b-xl p-2 text-sm'>
                  <p className='font-semibold'>Gary Oldman</p>
                  <p className='font-light'>James Gordon</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={Img} alt='' className='rounded-t-xl' />
                <div className='bg-black rounded-b-xl p-2 text-sm'>
                  <p className='font-semibold'>Gary Oldman</p>
                  <p className='font-light'>James Gordon</p>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className='flex justify-end'>
              <Link
                href={''}
                className='text-xl hover:text-customOrange transition-all'>
                Show more...
              </Link>
            </div>
          </>
        ) : null}
        {type === 'slide' ? (
          <>
            <Swiper
              slidesPerView={3.2}
              spaceBetween={24}
              freeMode={true}
              pagination={false}
              modules={[FreeMode]}
              className='mySwiper mt-4 mb-2'>
              <SwiperSlide>
                <Image src={Img2} alt='' className='rounded-t-xl' />
                <p className='text-xl font-semibold mt-4'>Game of Thrones</p>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={Img2} alt='' className='rounded-t-xl' />
                <p className='text-xl font-semibold mt-4'>Game of Thrones</p>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={Img2} alt='' className='rounded-t-xl' />
                <p className='text-xl font-semibold mt-4'>Game of Thrones</p>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={Img2} alt='' className='rounded-t-xl' />
                <p className='text-xl font-semibold mt-4'>Game of Thrones</p>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={Img2} alt='' className='rounded-t-xl' />
                <p className='text-xl font-semibold mt-4'>Game of Thrones</p>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={Img2} alt='' className='rounded-t-xl' />
                <p className='text-xl font-semibold mt-4'>Game of Thrones</p>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={Img2} alt='' className='rounded-t-xl' />
                <p className='text-xl font-semibold mt-4'>Game of Thrones</p>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={Img2} alt='' className='rounded-t-xl' />
                <p className='text-xl font-semibold mt-4'>Game of Thrones</p>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={Img2} alt='' className='rounded-t-xl' />
                <p className='text-xl font-semibold mt-4'>Game of Thrones</p>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={Img2} alt='' className='rounded-t-xl' />
                <p className='text-xl font-semibold mt-4'>Game of Thrones</p>
              </SwiperSlide>
            </Swiper>
            {/* <div className='flex justify-end'>
              <Link
                href={''}
                className='text-xl hover:text-customOrange transition-all'>
                Show more...
              </Link>
            </div> */}
          </>
        ) : null}
      </Wrapper>
    </section>
  );
};

export default swiperSection;
