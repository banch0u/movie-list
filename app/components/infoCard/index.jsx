import React from 'react';
import Title from '../UI/title';
import Img from '../../assets/images/no_image_dark.png';
import Image from 'next/image';
import {
  FacebookIcon,
  InstagramIcon,
  LinkIcon,
  TwitterXIcon,
  WikidataIcon,
} from '../../icons';
import Link from 'next/link';
import Wrapper from '../UI/wrapper';

const InfoCard = ({ movieDetails, movieExternalLinks }) => {
  const calculateDuration = (min) => {
    let h = Math.trunc(min / 60);
    let m = min % 60;
    return `${h}h ${m}m`;
  };
  const formCommas = (arr) => {
    let str = '';
    arr.map((item) => (str += item.name + ', '));
    return str.slice(0, -2);
  };
  const currencyFormatter = (num) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(num);
    return formatter;
  };
  return (
    <section className='mb-16'>
      <Wrapper>
        <Title link={false}>{movieDetails?.title}</Title>
        <div className='mt-4 flex gap-6'>
          {movieDetails?.poster_path ? (
            <img
              src={process.env.NEXT_PUBLIC_STORAGE + movieDetails?.poster_path}
              className='rounded-xl w-[300px]'
              alt={movieDetails?.id}
            />
          ) : (
            <Image src={Img} alt='no_image' className='rounded-xl w-[300px]' />
          )}
          <div className='text-2xl font-semibold flex flex-col gap-2'>
            {movieDetails?.original_title ? (
              <p>
                Original title:{' '}
                <span className='font-light'>
                  {movieDetails?.original_title}
                </span>
              </p>
            ) : null}
            {movieDetails?.release_date ? (
              <p>
                Release date:{' '}
                <span className='font-light'>
                  {movieDetails?.release_date?.replaceAll('-', '.')}{' '}
                  {movieDetails?.status ? `(${movieDetails?.status})` : null}
                </span>
              </p>
            ) : null}

            {movieDetails?.runtime ? (
              <p>
                Duration:{' '}
                <span className='font-light'>
                  {calculateDuration(movieDetails?.runtime)}
                </span>
              </p>
            ) : null}
            {movieDetails?.genres ? (
              <p>
                Genre:{' '}
                <span className='font-light'>
                  {formCommas(movieDetails?.genres)}
                </span>
              </p>
            ) : null}
            {movieDetails?.vote_average ? (
              <p>
                Score:{' '}
                <span className='font-light'>
                  {movieDetails?.vote_average?.toFixed(2) + ' '}
                  {movieDetails?.vote_count
                    ? `(${movieDetails?.vote_count})`
                    : null}
                </span>
              </p>
            ) : null}
            {/* {movieDetails?.original_language ? (
              <p>
                Original Language:{' '}
                <span className='font-light'>
                  {movieDetails?.original_language}
                </span>
              </p>
            ) : null} */}
            {movieDetails?.production_companies?.length > 0 ? (
              <p>
                Studio:{' '}
                <span className='font-light'>
                  {formCommas(movieDetails?.production_companies)}
                </span>
              </p>
            ) : null}
            {movieDetails?.budget ? (
              <p>
                Budget:{' '}
                <span className='font-light'>
                  {currencyFormatter(movieDetails?.budget)}
                </span>
              </p>
            ) : null}
            {movieDetails?.revenue ? (
              <p>
                Revenue:{' '}
                <span className='font-light'>
                  {currencyFormatter(movieDetails?.revenue)}
                </span>
              </p>
            ) : null}
            <div className='flex flex-col gap-2'>
              {movieDetails?.homepage ||
              movieExternalLinks?.wikidata_id ||
              movieExternalLinks?.facebook_id ||
              movieExternalLinks?.instagram_id ||
              movieExternalLinks?.twitter_id ? (
                <>
                  <p>Resources: </p>
                  <div className='flex gap-4'>
                    {movieDetails?.homepage ? (
                      <Link href={movieDetails?.homepage} target='_blank'>
                        <LinkIcon />
                      </Link>
                    ) : null}
                    {movieExternalLinks?.wikidata_id ? (
                      <Link
                        href={
                          'https://www.wikidata.org/wiki/' +
                          movieExternalLinks?.wikidata_id
                        }
                        target='_blank'>
                        <WikidataIcon />
                      </Link>
                    ) : null}
                    {movieExternalLinks?.facebook_id ? (
                      <Link
                        href={
                          'https://www.facebook.com/' +
                          movieExternalLinks?.facebook_id
                        }
                        target='_blank'>
                        <FacebookIcon />
                      </Link>
                    ) : null}
                    {movieExternalLinks?.instagram_id ? (
                      <Link
                        href={
                          'https://www.instagram.com/' +
                          movieExternalLinks?.instagram_id
                        }
                        target='_blank'>
                        <InstagramIcon />
                      </Link>
                    ) : null}
                    {movieExternalLinks?.twitter_id ? (
                      <Link
                        href={
                          'https://twitter.com/' +
                          movieExternalLinks?.twitter_id
                        }
                        target='_blank'>
                        <TwitterXIcon />
                      </Link>
                    ) : null}
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default InfoCard;
