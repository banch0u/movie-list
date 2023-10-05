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
import { getMovieImages } from '../../../redux/movies/imagesSlice';
import { getMovieVideos } from '../../../redux/movies/videosSlice';
import { getMovieReviews } from '../../../redux/movies/reviewsSice';
import { getSimilarMovies } from '../../../redux/movies/similarSlice';
const Movie = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.movieDetails);
  const movieExternalLinks = useSelector((state) => state.movieExternalLinks);
  const movieCredits = useSelector((state) => state.movieCredits);
  const movieImages = useSelector((state) => state.movieImages);
  const movieVideos = useSelector((state) => state.movieVideos);
  const movieReviews = useSelector((state) => state.movieReviews);
  const similarMovies = useSelector((state) => state.similarMovies);

  useEffect(() => {
    dispatch(getMovieDetails(movieId, { language: 'en-US' }));
    dispatch(getMovieExternalLinks(movieId));
    dispatch(getMovieCredits(movieId, { language: 'en-US' }));
    dispatch(getMovieImages(movieId));
    dispatch(getMovieVideos(movieId, { language: 'en-US' }));
    dispatch(getMovieReviews(movieId, { language: 'en-US', page: '1' }));
    dispatch(getSimilarMovies(movieId, { language: 'en-US', page: '1' }));
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
      <SwiperSection
        title={'Media'}
        type={'slide'}
        images={movieImages?.data}
        videos={movieVideos?.data}
      />
      <Reviews bg={false} data={movieReviews?.data} />
      <SwiperSection
        title={'Similar to'}
        type={'slide'}
        data={similarMovies?.data}
      />
    </main>
  );
};

export default Movie;
