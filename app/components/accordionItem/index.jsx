'use client';
import React, { useEffect } from 'react';
import { StarIcon } from '../../icons';
import Image from 'next/image';
import Img from '../../assets/images/no_image_dark_16_9.png';
import { useDispatch } from 'react-redux';
import { getTvShowSeasonDetails } from '../../redux/tvShows/seasonDetailsSlice';
import { useState } from 'react';

const AccordionItem = ({ seasonNum, id }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const calculateDuration = (min) => {
    let h = Math.trunc(min / 60);
    let m = min % 60;
    if (h === 0) {
      return `${m}m`;
    } else if (h > 0 && m === 0) {
      return `${h}h`;
    } else {
      return `${h}h ${m}m`;
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(
          getTvShowSeasonDetails({
            seriesId: id,
            seasonId: seasonNum,
            param: { language: 'en-US' },
          })
        );
        setData(response.payload);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [dispatch, id, seasonNum]);
  return (
    <ul className='flex flex-col gap-4'>
      {data?.episodes?.map((item) => (
        <li className='flex gap-5' key={item.id}>
          {item?.still_path ? (
            <img
              src={process.env.NEXT_PUBLIC_STORAGE + item.still_path}
              alt={item?.name}
              className='w-60 rounded-lg'
            />
          ) : (
            <Image src={Img} alt='no_image' className='w-60 rounded-lg' />
          )}
          <div>
            <h6 className='flex gap-7'>
              <span>
                {item?.episode_number}. {item?.name}
              </span>
              <span className='inline'>
                <div className='flex items-center'>
                  <StarIcon color={'#fff'} w={14} h={13} />{' '}
                  <span>{item?.vote_average?.toFixed(1)}</span>
                </div>
              </span>
            </h6>
            <p className='flex gap-7 font-extralight'>
              <span>{calculateDuration(item?.runtime)}</span>
              <span className='inline'>
                <span className='flex items-center'>
                  Aired in {item?.air_date?.replaceAll('-', '.')}
                </span>
              </span>
            </p>
            <p className='line-clamp-4 font-extralight'>{item?.overview}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AccordionItem;
