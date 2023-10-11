'use client';
import React from 'react';
import Wrapper from '../UI/wrapper';
import Title from '../UI/title';
import Link from 'next/link';

const People = ({ bg = true, title, data }) => {
  const blankArr = Array(12).fill('');
  return (
    <section
      className='py-16'
      style={{ backgroundColor: `${bg ? '#000000' : '#1F1F1F'}` }}>
      <Wrapper>
        <div className='pb-4'>
          <Title>{title}</Title>
        </div>
        <div className='grid grid-cols-3  gap-6'>
          {data?.results ? (
            <>
              {data?.results?.slice(0, 12).map((item) => {
                return (
                  <Link
                    href={`/person/${item?.id}`}
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
            </>
          ) : (
            <>
              {blankArr.map(() => (
                <div className='flex items-center gap-4'>
                  <div
                    className='w-[80px] h-[80px] rounded-full animate-pulse'
                    style={{
                      aspectRatio: 1 / 1,
                      backgroundColor: bg ? '#1F1F1F' : '#000000',
                    }}></div>
                  <h4
                    className='w-1/3 h-4 rounded-xl animate-pulse'
                    style={{
                      backgroundColor: bg ? '#1F1F1F' : '#000000',
                    }}></h4>
                </div>
              ))}
            </>
          )}
        </div>
      </Wrapper>
    </section>
  );
};

export default People;
