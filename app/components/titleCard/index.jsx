import React from 'react';
import Link from 'next/link';
import Score from '../score';
import Img from '../../assets/images/no_image_dark.png';
import Image from 'next/image';

const TitleCard = ({ data, type, bg = true }) => {
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
  console.log(data);
  return (
    <Link
      href={
        type === 'movie'
          ? `/movie/${data?.id}`
          : '' || type === 'tvShow'
          ? `/tvShow/${data?.id}`
          : ''
      }
      key={data?.id}>
      {data ? (
        <img
          src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
          alt={type === 'movie' ? data?.title : data?.name}
          className='rounded-xl mb-2'
        />
      ) : (
        <Image src={Img} alt='no_image' className='rounded-xl mb-2' />
      )}

      <div>
        <Score score={data?.vote_average * 10} bg={bg} />
        <h4 className='inline text-xl hover:text-customOrange transition-all'>
          {type === 'movie' ? data?.title : data.name}
        </h4>
        <p className='text-gray-500'>
          {type === 'movie'
            ? parceDate(data?.release_date)
            : parceDate(data?.first_air_date)}
        </p>
      </div>
    </Link>
  );
};

export default TitleCard;
