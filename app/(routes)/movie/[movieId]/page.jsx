'use client';
import React, { useEffect } from 'react';
import InfoCard from '../../../components/infoCard';
import Overview from '../../../components/overview';
import Slogan from '../../../components/slogan';
import SwiperSection from '../../../components/swiperSection';
import Reviews from '../../../components/reviews';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetails } from '../../../redux/movies/detailsSlice';
import { getMovieExternalLinks } from '../../../redux/movies/externalLinksSlice';
import { getMovieCredits } from '../../../redux/movies/creditsSlice';
import { useParams } from 'next/navigation';
const Movie = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.movieDetails);
  const movieExternalLinks = useSelector((state) => state.movieExternalLinks);
  const movieCredits = useSelector((state) => state.movieCredits);

  useEffect(() => {
    dispatch(getMovieDetails(movieId, { language: 'en-US' }));
    dispatch(getMovieExternalLinks(movieId));
    dispatch(getMovieCredits(movieId, { language: 'en-US' }));
  }, [dispatch]);
  return (
    <main>
      <InfoCard
        movieDetails={movieDetails?.data}
        movieExternalLinks={movieExternalLinks?.data}
      />
      <Slogan tagline={movieDetails?.data?.tagline} />
      <Overview overview={movieDetails?.data?.overview} />
      <SwiperSection
        bg={false}
        title={'Cast'}
        type={'card'}
        data={movieCredits?.data}
      />
      <SwiperSection title={'Media'} type={'slide'} />
      <Reviews bg={false} />
      <SwiperSection title={'Similar to'} type={'slide'} />
    </main>
  );
};

export default Movie;
