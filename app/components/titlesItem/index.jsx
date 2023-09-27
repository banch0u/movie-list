'use client';
import Image from 'next/image';
import React, { use, useEffect, useState } from 'react';
import CoverImage from '../../assets/images/title.jpg';
import Score from '../score';
import Link from 'next/link';

const TitlesItem = ({ type = 'movie', data }) => {
  const [load, setLoad] = useState(false);

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

  useEffect(() => {
    data ? setLoad(true) : null;
  }, [data]);
  return (
    <div className='flex gap-6 justify-center'>
      {load ? (
        <>
          {data?.results?.slice(0, 6).map((item) => (
            <Link href={''} className='w-[16.6%]' key={item?.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
                alt={
                  type === 'movie' ? item?.original_title : item?.original_name
                }
                className='rounded-xl mb-2'
              />
              <div>
                <Score score={item?.vote_average * 10} />
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
      ) : null}
    </div>
  );
};

export default TitlesItem;
