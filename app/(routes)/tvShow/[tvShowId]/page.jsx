'use client';
import React, { useEffect } from 'react';
import InfoCard from '../../../components/infoCard';
import Overview from '../../../components/overview';
import Slogan from '../../../components/slogan';
import SwiperSection from '../../../components/swiperSection';
import Reviews from '../../../components/reviews';
import Seasons from '../../../components/seasons';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'next/navigation';
import { getTvShowsDetails } from '../../../redux/tvShows/detailsSlice';

const TvShow = () => {
  const { tvShowId } = useParams();
  const dispatch = useDispatch();
  const tvShowDetails = useSelector((state) => state.tvShowDetails);

  useEffect(() => {
    dispatch(getTvShowsDetails(tvShowId, { language: 'en-US' }));
  }, [dispatch]);
  return (
    <main>
      <InfoCard details={tvShowDetails?.data} externalLinks={''} />
      <Slogan tagline={''} />
      <Overview overview={''} />
      <SwiperSection bg={false} title={'Cast'} type={'card'} data={''} />
      <Seasons />
      <SwiperSection
        bg={false}
        title={'Media'}
        type={'slide'}
        images={''}
        videos={''}
      />
      <Reviews data={''} />
      <SwiperSection bg={false} title={'Similar to'} type={'slide'} data={''} />
    </main>
  );
};

export default TvShow;
