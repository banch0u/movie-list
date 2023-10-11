'use client';
import React from 'react';
import Score from '../score';
import Link from 'next/link';

const TitlesItem = ({ type = 'movie', data, bg }) => {
  const blankArr = Array(6).fill('');
  const parceDate = (dateString) => {
    const tempDate = new Date(dateString);
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const year = tempDate.getFullYear();
    const month = tempDate.getMonth();
    const day = tempDate.getDate();
    return day + ' ' + monthNames[month] + ' ' + year;
  };
  return (
    <div className='flex gap-6 justify-center'>
      {data?.results ? (
        <>
          {data?.results?.slice(0, 6).map((item) => (
            <Link
              href={
                type === 'movie'
                  ? `/movie/${item.id}`
                  : '' || type === 'tvShow'
                  ? `/tvShow/${item.id}`
                  : ''
              }
              className='w-[16.6%]'
              key={item?.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
                alt={
                  type === 'movie' ? item?.original_title : item?.original_name
                }
                className='rounded-xl mb-2'
              />
              <div>
                <Score score={item?.vote_average * 10} bg={bg} />
                <h4 className='inline text-xl hover:text-customOrange transition-all'>
                  {type === 'movie' ? item?.title : item.name}
                </h4>
                <p className='text-gray-500'>
                  {type === 'movie'
                    ? parceDate(item?.release_date)
                    : parceDate(item?.first_air_date)}
                </p>
              </div>
            </Link>
          ))}
        </>
      ) : (
        <>
          {blankArr.map(() => (
            <div className='w-[16.6%]'>
              <div
                className='rounded-xl mb-2 animate-pulse'
                style={{
                  aspectRatio: 956 / 1429,
                  backgroundColor: bg ? '#1F1F1F' : '#000000',
                }}></div>
              <div>
                <div className='flex items-center gap-2 mb-1'>
                  <Score bg={bg} />
                  <h4
                    className='rounded-xl w-full h-4 animate-pulse'
                    style={{
                      backgroundColor: bg ? '#1F1F1F' : '#000000',
                    }}></h4>
                </div>
                <p
                  className='w-1/3 h-4 animate-pulse rounded-xl'
                  style={{ backgroundColor: bg ? '#1F1F1F' : '#000000' }}></p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default TitlesItem;
