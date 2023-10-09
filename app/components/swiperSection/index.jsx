'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import './swiper.css';
import { FreeMode } from 'swiper/modules';
import Img from '../../assets/images/no_image_dark.png';
import Img2 from '../../assets/images/no_image_dark_16_9.png';
import Image from 'next/image';
import Wrapper from '../UI/wrapper';
import Title from '../UI/title';
import Link from 'next/link';
import Modal from '../UI/modal';
const swiperSection = ({
  bg = true,
  title,
  type = 'slide',
  data,
  images,
  videos,
  cast,
}) => {
  const [modalKey, setModalKey] = useState('');
  const openModal = (key) => {
    setModalKey(key);
  };
  const closeModal = () => {
    setModalKey('');
  };
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
              {!cast ? (
                <>
                  {data?.cast?.slice(0, 10).map((item) => (
                    <SwiperSlide key={item.id}>
                      <Link href={`/person/${item.id}`}>
                        {item.profile_path ? (
                          <img
                            src={
                              process.env.NEXT_PUBLIC_STORAGE +
                              item.profile_path
                            }
                            alt={item.id}
                            className='rounded-t-xl'
                          />
                        ) : (
                          <Image
                            src={Img}
                            alt='no_image'
                            className='rounded-t-xl'
                          />
                        )}
                        <div className='bg-black rounded-b-xl p-2 text-sm'>
                          <p className='font-semibold'>{item.name}</p>
                          <p className='font-light'>{item.character}</p>
                          <p className='font-light'>
                            {item?.roles?.[0]?.character}
                          </p>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </>
              ) : null}
              {cast === 'cast' ? (
                <>
                  {data?.cast?.slice(0, 10).map((item) => (
                    <SwiperSlide key={item.id}>
                      <Link
                        href={
                          item?.media_type === 'movie'
                            ? `/movie/${item.id}`
                            : ''
                        }>
                        {item?.poster_path ? (
                          <img
                            src={
                              process.env.NEXT_PUBLIC_STORAGE +
                              item?.poster_path
                            }
                            alt={item?.id}
                            className='rounded-t-xl'
                          />
                        ) : (
                          <Image
                            src={Img}
                            alt='no_image'
                            className='rounded-t-xl'
                          />
                        )}
                        <div className='bg-black rounded-b-xl p-2 text-sm'>
                          <p className='font-semibold'>
                            {item?.media_type === 'movie'
                              ? item?.title
                              : item?.name}
                          </p>
                          <p className='font-light'>{item?.character}</p>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </>
              ) : null}
              {cast === 'crew' ? (
                <>
                  {data?.crew?.slice(0, 10).map((item) => (
                    <SwiperSlide key={item.id}>
                      <Link
                        href={
                          item?.media_type === 'movie'
                            ? `/movie/${item.id}`
                            : ''
                        }>
                        {item.poster_path ? (
                          <img
                            src={
                              process.env.NEXT_PUBLIC_STORAGE + item.poster_path
                            }
                            alt={item.id}
                            className='rounded-t-xl'
                          />
                        ) : (
                          <Image
                            src={Img}
                            alt='no_image'
                            className='rounded-t-xl'
                          />
                        )}
                        <div className='bg-black rounded-b-xl p-2 text-sm'>
                          <p className='font-semibold'>{item.title}</p>
                          <p className='font-light'>{item.job}</p>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </>
              ) : null}
              <SwiperSlide>
                <div
                  style={{ aspectRatio: 15453 / 28780 }}
                  className='w-[154.53px] flex items-center'>
                  <Link
                    href={''}
                    className='text-xl hover:text-customOrange transition-all '>
                    Show more
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
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
              {videos?.results?.slice(0, 3).map((item) => (
                <SwiperSlide key={item.id} className='relative'>
                  <iframe
                    width='100%'
                    style={{ aspectRatio: 16 / 9 }}
                    src={`https://www.youtube.com/embed/${item.key}?rel=0?controls=0?modestbranding=1`}
                    title={item.name}
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    className='rounded-xl'
                    allowfullscreen></iframe>
                  <div
                    onClick={() => openModal(item.key)}
                    className='absolute top-0 left-0 w-full'
                    style={{ aspectRatio: 16 / 9 }}></div>
                </SwiperSlide>
              ))}
              {images?.backdrops?.slice(0, 10).map((item, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={process.env.NEXT_PUBLIC_STORAGE + item.file_path}
                    alt={i}
                    className='rounded-xl'
                  />
                </SwiperSlide>
              ))}
              {images?.profiles?.slice(0, 10).map((item, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={process.env.NEXT_PUBLIC_STORAGE + item.file_path}
                    alt={i}
                    className='rounded-xl'
                  />
                </SwiperSlide>
              ))}
              {data?.results?.slice(0, 10).map((item) => (
                <SwiperSlide key={item.id}>
                  {item?.backdrop_path ? (
                    <Link href={`/movie/${item.id}`}>
                      <img
                        src={
                          process.env.NEXT_PUBLIC_STORAGE + item?.backdrop_path
                        }
                        alt={item.id}
                        className='rounded-xl mb-4'
                      />
                    </Link>
                  ) : (
                    <Link href={`/movie/${item.id}`}>
                      <Image
                        src={Img2}
                        alt='no_image'
                        className='rounded-xl mb-4'
                      />
                    </Link>
                  )}

                  <Link
                    href={`/movie/${item.id}`}
                    className='text-xl font-semibold mt-4 hover:text-customOrange transition-all'>
                    {item.title}
                  </Link>
                </SwiperSlide>
              ))}
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
        {type === 'slide-sm' ? (
          <>
            <Swiper
              slidesPerView={7.5}
              spaceBetween={24}
              freeMode={true}
              pagination={false}
              modules={[FreeMode]}
              className='mySwiper mt-4 mb-2'>
              {videos?.results?.slice(0, 3).map((item) => (
                <SwiperSlide key={item.id} className='relative'>
                  <iframe
                    width='100%'
                    style={{ aspectRatio: 16 / 9 }}
                    src={`https://www.youtube.com/embed/${item.key}?rel=0?controls=0?modestbranding=1`}
                    title={item.name}
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    className='rounded-xl'
                    allowfullscreen></iframe>
                  <div
                    onClick={() => openModal(item.key)}
                    className='absolute top-0 left-0 w-full'
                    style={{ aspectRatio: 16 / 9 }}></div>
                </SwiperSlide>
              ))}
              {images?.backdrops?.slice(0, 10).map((item, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={process.env.NEXT_PUBLIC_STORAGE + item.file_path}
                    alt={i}
                    className='rounded-xl'
                  />
                </SwiperSlide>
              ))}
              {images?.profiles?.slice(0, 10).map((item, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={process.env.NEXT_PUBLIC_STORAGE + item.file_path}
                    alt={i}
                    className='rounded-xl'
                  />
                </SwiperSlide>
              ))}
              {data?.results?.slice(0, 10).map((item) => (
                <SwiperSlide key={item.id}>
                  {item?.backdrop_path ? (
                    <Link href={`/movie/${item.id}`}>
                      <img
                        src={
                          process.env.NEXT_PUBLIC_STORAGE + item?.backdrop_path
                        }
                        alt={item.id}
                        className='rounded-xl mb-4'
                      />
                    </Link>
                  ) : (
                    <Link href={`/movie/${item.id}`}>
                      <Image
                        src={Img2}
                        alt='no_image'
                        className='rounded-xl mb-4'
                      />
                    </Link>
                  )}

                  <Link
                    href={`/movie/${item.id}`}
                    className='text-xl font-semibold mt-4 hover:text-customOrange transition-all'>
                    {item.title}
                  </Link>
                </SwiperSlide>
              ))}
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
      <Modal modalKey={modalKey} closeModal={closeModal} />
    </section>
  );
};

export default swiperSection;
