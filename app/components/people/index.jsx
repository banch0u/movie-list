'use client';
import React from 'react';
import Wrapper from '../UI/wrapper';
import Title from '../UI/title';
import Link from 'next/link';

const People = ({ bg = true, title, data }) => {
  return (
    <section
      className='py-16'
      style={{ backgroundColor: `${bg ? '#000000' : '#1F1F1F'}` }}>
      <Wrapper>
        <div className='pb-4'>
          <Title>{title}</Title>
        </div>
        <div className='grid grid-cols-3  gap-6'>
          {data?.results?.slice(0, 12).map((item) => {
            return (
              <Link
                href={''}
                className='flex items-center gap-4'
                key={item?.id}>
                <div className='w-[80px] h-[80px] overflow-hidden rounded-full'>
                  <img
                    src={`https://image.tmdb.org/t/p/original${item?.profile_path}`}
                    alt={item?.name}
                  />
                </div>
                <h4 className='text-xl hover:text-customOrange transition-all'>
                  {item?.name}
                </h4>
              </Link>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
};

export default People;
