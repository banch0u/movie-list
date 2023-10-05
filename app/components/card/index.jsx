import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Img from '../../assets/images/no_image_dark.png';
import Image from 'next/image';

const Card = ({ data, type }) => {
  const [newArr, setNewArr] = useState(null);
  useEffect(() => {
    setNewArr(data);
    if (type) {
      setNewArr({ ...data, media_type: type });
    }
  }, []);
  return (
    <Link
      href={newArr?.media_type === 'movie' ? `/movie/${newArr?.id}` : ''}
      className='bg-customGray rounded-lg p-4 flex gap-6'>
      {newArr?.poster_path || newArr?.profile_path ? (
        <img
          src={
            newArr?.media_type === 'person'
              ? `https://image.tmdb.org/t/p/original${newArr?.profile_path}`
              : `https://image.tmdb.org/t/p/original${newArr?.poster_path}`
          }
          alt={newArr?.name}
          className='w-[100px] rounded-lg'
        />
      ) : (
        <Image src={Img} alt={'No image'} className='w-[100px] rounded-lg' />
      )}

      <div>
        <h4 className='text-2xl inline-block font-semibold hover:text-customOrange transition-all'>
          {newArr?.media_type === 'movie' ? newArr?.title : null}
          {newArr?.media_type === 'tv' ? newArr?.name : null}
          {newArr?.media_type === 'person' ? newArr?.name : null}
        </h4>
        <p className='text-base font-normal text-[#656565]'>
          {newArr?.media_type === 'movie' ? 'Movie' : null}
          {newArr?.media_type === 'tv' ? 'Tv Show' : null}

          {newArr?.known_for_department === 'Acting' ? 'Actor' : null}
          {newArr?.known_for_department === 'Directing' ? 'Director' : null}
          {newArr?.known_for_department === 'Sound' ? 'Composer' : null}
          {newArr?.known_for_department === 'Production' ? 'Producer' : null}
          {newArr?.known_for_department === 'Writing' ? 'Writer' : null}
          {newArr?.known_for_department === 'Visual Effects'
            ? 'Visual Effects'
            : null}
          {newArr?.known_for_department === 'Camera' ? 'Camera' : null}
          {newArr?.known_for_department === 'Art' ? 'Art' : null}
          {newArr?.known_for_department === 'Creator' ? 'Creator' : null}
          {newArr?.known_for_department === 'Crew' ? 'Crew' : null}
          {newArr?.known_for_department === 'Costume & Make-Up'
            ? 'Costume & Make-Up'
            : null}
          {newArr?.known_for_department === 'Lighting' ? 'Lighting' : null}
          {newArr?.known_for_department === 'Editing' ? 'Editing' : null}
        </p>
        <p className='text-base font-normal text-[#656565] line-clamp-4'>
          {newArr?.media_type === 'movie' ? newArr?.overview : null}
          {newArr?.media_type === 'tv' ? newArr?.overview : null}
          {newArr?.media_type === 'person'
            ? newArr?.known_for[0]
              ? `(${
                  newArr?.known_for[0]?.media_type === 'movie'
                    ? newArr?.known_for[0]?.title
                    : newArr?.known_for[0]?.name
                }
                ${newArr?.known_for[1] ? ',' : ''}
                ${
                  newArr?.known_for[1]
                    ? newArr?.known_for[1]?.media_type === 'movie'
                      ? newArr?.known_for[1]?.title
                      : newArr?.known_for[1]?.name
                    : ''
                }
                ${newArr?.known_for[2] ? ',' : ''}
                ${
                  newArr?.known_for[2]
                    ? newArr?.known_for[2]?.media_type === 'movie'
                      ? newArr?.known_for[2]?.title
                      : newArr?.known_for[2]?.name
                    : ''
                })`
              : ''
            : null}
        </p>
      </div>
    </Link>
  );
};

export default Card;
