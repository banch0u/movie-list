import React from 'react';
import Title from '../UI/title';
import Img from '../../assets/images/no_image_dark.png';
import Image from 'next/image';
import {
  FacebookIcon,
  InstagramIcon,
  LinkIcon,
  TikTokIcon,
  TwitterXIcon,
  WikidataIcon,
  YoutubeIcon,
} from '../../icons';
import Link from 'next/link';
import Wrapper from '../UI/wrapper';

const InfoCard = ({ details, externalLinks, type = 'movie', credits }) => {
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
  const getKnownDepartment = (dep) => {
    switch (dep) {
      case 'Acting':
        return 'Actor';
      case 'Directing':
        return 'Director';
      case 'Sound':
        return 'Composer';
      case 'Production':
        return 'Producer';
      case 'Writing':
        return 'Writer';
      default:
        return dep;
    }
  };
  return (
    <section className='mb-16'>
      <Wrapper>
        <Title link={false}>
          {details?.title}
          {details?.name}
        </Title>
        <div className='mt-4 flex gap-6'>
          {type === 'person' ? (
            <>
              {details?.profile_path ? (
                <img
                  src={process.env.NEXT_PUBLIC_STORAGE + details?.profile_path}
                  className='rounded-xl w-[300px]'
                  alt={details?.id}
                />
              ) : (
                <Image
                  src={Img}
                  alt='no_image'
                  className='rounded-xl w-[300px]'
                />
              )}
            </>
          ) : (
            <>
              {details?.poster_path ? (
                <img
                  src={process.env.NEXT_PUBLIC_STORAGE + details?.poster_path}
                  className='rounded-xl w-[300px]'
                  alt={details?.id}
                />
              ) : (
                <Image
                  src={Img}
                  alt='no_image'
                  className='rounded-xl w-[300px]'
                />
              )}
            </>
          )}

          <div className='text-2xl font-semibold flex flex-col gap-2'>
            {details?.original_title ? (
              <p>
                Original title:{' '}
                <span className='font-light'>{details?.original_title}</span>
              </p>
            ) : null}
            {details?.original_name ? (
              <p>
                Original name:{' '}
                <span className='font-light'>{details?.original_name}</span>
              </p>
            ) : null}
            {details?.known_for_department ? (
              <p>
                Occupation:{' '}
                <span className='font-light'>
                  {getKnownDepartment(details?.known_for_department)}
                </span>
              </p>
            ) : null}
            {details?.release_date ? (
              <p>
                Release date:{' '}
                <span className='font-light'>
                  {details?.release_date?.replaceAll('-', '.')}{' '}
                  {details?.status ? `(${details?.status})` : null}
                </span>
              </p>
            ) : null}
            {details?.gender ? (
              <p>
                Gender:{' '}
                <span className='font-light'>
                  {details?.gender === 1 ? 'Female' : 'Male'}
                </span>
              </p>
            ) : null}
            {details?.birthday ? (
              <p>
                Birthday:{' '}
                <span className='font-light'>
                  {details?.birthday?.replaceAll('-', '.')}
                </span>
              </p>
            ) : null}
            {details?.deathday ? (
              <p>
                Day of Death:{' '}
                <span className='font-light'>{details?.deathday}</span>
              </p>
            ) : null}
            {details?.place_of_birth ? (
              <p>
                Place of Birth:{' '}
                <span className='font-light'>{details?.place_of_birth}</span>
              </p>
            ) : null}
            {credits?.cast?.length + credits?.crew?.length > 0 ? (
              <p>
                Credits:{' '}
                <span className='font-light'>
                  {credits?.cast?.length + credits?.crew?.length}
                </span>
              </p>
            ) : null}
            {details?.first_air_date ? (
              <p>
                Release date:{' '}
                <span className='font-light'>
                  {details?.first_air_date?.replaceAll('-', '.')}{' '}
                  {details?.status ? `(${details?.status})` : null}
                </span>
              </p>
            ) : null}
            {details?.last_air_date ? (
              <p>
                Finale date:{' '}
                <span className='font-light'>
                  {details?.last_air_date?.replaceAll('-', '.')}
                </span>
              </p>
            ) : null}
            {details?.next_episode_to_air ? (
              <p>
                Next episode air date:{' '}
                <span className='font-light'>
                  {details?.next_episode_to_air?.replaceAll('-', '.')}
                </span>
              </p>
            ) : null}
            {details?.runtime ? (
              <p>
                Duration:{' '}
                <span className='font-light'>
                  {calculateDuration(details?.runtime)}
                </span>
              </p>
            ) : null}
            {details?.genres ? (
              <p>
                Genre:{' '}
                <span className='font-light'>
                  {formCommas(details?.genres)}
                </span>
              </p>
            ) : null}
            {details?.vote_average ? (
              <p>
                Score:{' '}
                <span className='font-light'>
                  {details?.vote_average?.toFixed(1) + ' '}
                  {details?.vote_count ? `(${details?.vote_count})` : null}
                </span>
              </p>
            ) : null}
            {details?.number_of_seasons || details?.number_of_episodes ? (
              <p>
                Seasons:{' '}
                <span className='font-light'>
                  {details?.number_of_seasons
                    ? `${details.number_of_seasons}S`
                    : null}{' '}
                  {details?.number_of_episodes
                    ? `${details.number_of_episodes}Ep`
                    : null}
                </span>
              </p>
            ) : null}
            {details?.production_companies?.length > 0 ? (
              <p>
                Studio:{' '}
                <span className='font-light'>
                  {formCommas(details?.production_companies)}
                </span>
              </p>
            ) : null}
            {details?.budget ? (
              <p>
                Budget:{' '}
                <span className='font-light'>
                  {currencyFormatter(details?.budget)}
                </span>
              </p>
            ) : null}
            {details?.revenue ? (
              <p>
                Revenue:{' '}
                <span className='font-light'>
                  {currencyFormatter(details?.revenue)}
                </span>
              </p>
            ) : null}
            <div className='flex flex-col gap-2'>
              {details?.homepage ||
              externalLinks?.wikidata_id ||
              externalLinks?.facebook_id ||
              externalLinks?.instagram_id ||
              externalLinks?.tiktok_id ||
              externalLinks?.youtube_id ||
              externalLinks?.twitter_id ? (
                <>
                  <p>Resources: </p>
                  <div className='flex gap-4'>
                    {details?.homepage ? (
                      <Link href={details?.homepage} target='_blank'>
                        <LinkIcon />
                      </Link>
                    ) : null}
                    {externalLinks?.wikidata_id ? (
                      <Link
                        href={
                          'https://www.wikidata.org/wiki/' +
                          externalLinks?.wikidata_id
                        }
                        target='_blank'>
                        <WikidataIcon />
                      </Link>
                    ) : null}
                    {externalLinks?.facebook_id ? (
                      <Link
                        href={
                          'https://www.facebook.com/' +
                          externalLinks?.facebook_id
                        }
                        target='_blank'>
                        <FacebookIcon />
                      </Link>
                    ) : null}
                    {externalLinks?.instagram_id ? (
                      <Link
                        href={
                          'https://www.instagram.com/' +
                          externalLinks?.instagram_id
                        }
                        target='_blank'>
                        <InstagramIcon />
                      </Link>
                    ) : null}
                    {externalLinks?.twitter_id ? (
                      <Link
                        href={
                          'https://twitter.com/' + externalLinks?.twitter_id
                        }
                        target='_blank'>
                        <TwitterXIcon />
                      </Link>
                    ) : null}
                    {externalLinks?.tiktok_id ? (
                      <Link
                        href={
                          'https://www.tiktok.com/@' + externalLinks?.tiktok_id
                        }
                        target='_blank'>
                        <TikTokIcon />
                      </Link>
                    ) : null}
                    {externalLinks?.youtube_id ? (
                      <Link
                        href={
                          'https://www.youtube.com/' + externalLinks?.youtube_id
                        }
                        target='_blank'>
                        <YoutubeIcon />
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
