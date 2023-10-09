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
import { getTvShowDetails } from '../../../redux/tvShows/detailsSlice';
import { getTvShowExternalLinks } from '../../../redux/tvShows/externalLinksSlice';
import { getTvShowCombinedCredits } from '../../../redux/tvShows/combinedCreditsSlice';

const TvShow = () => {
  const { tvShowId } = useParams();
  const dispatch = useDispatch();
  const tvShowDetails = useSelector((state) => state.tvShowDetails);
  const tvShowExternalLinks = useSelector((state) => state.tvShowExternalLinks);
  const tvShowCombinedCredits = useSelector(
    (state) => state.tvShowCombinedCredits
  );

  useEffect(() => {
    dispatch(getTvShowDetails(tvShowId, { language: 'en-US' }));
    dispatch(getTvShowExternalLinks(tvShowId));
    dispatch(getTvShowCombinedCredits(tvShowId, { language: 'en-US' }));
  }, [dispatch]);
  return (
    <main>
      <InfoCard
        details={tvShowDetails?.data}
        externalLinks={tvShowExternalLinks?.data}
        type='tvShow'
      />
      <Slogan tagline={tvShowDetails?.data?.tagline} />
      <Overview overview={tvShowDetails?.data?.overview} />
      <SwiperSection
        bg={false}
        title={'Cast'}
        type={'card'}
        data={tvShowCombinedCredits?.data}
      />
      <Seasons data={tvShowDetails?.data} />
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
