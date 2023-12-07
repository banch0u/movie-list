'use client';
import Hero from './components/hero';
import Titles from './components/titles';
import People from './components/people';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingMovies } from './redux/trending/moviesSlice';
import { getTrendingTvShows } from './redux/trending/tvShowsSlice';
import { getUpcoming } from './redux/movies/upcomingSlice';
import { getOnTheAir } from './redux/tvShows/onTheAirSlice';
import { getPopularMovies } from './redux/movies/popularSlice';
import { getPopularTvShows } from './redux/tvShows/popularSlice';
import { getPopularPeople } from './redux/people/popularSlice';

export default function Home() {
  const dispatch = useDispatch();
  const trendingMovies = useSelector((state) => state.trendingMovies);
  const trendingTvShows = useSelector((state) => state.trendingTvShows);
  const upcomingMovies = useSelector((state) => state.upcomingMovies);
  const onTheAirTvShows = useSelector((state) => state.onTheAirTvShows);
  const popularMovies = useSelector((state) => state.popularMovies);
  const popularTvShows = useSelector((state) => state.popularTvShows);
  const popularPeople = useSelector((state) => state.popularPeople);

  useEffect(() => {
    dispatch(getTrendingMovies({ language: 'en-US' }));
    dispatch(getTrendingTvShows({ language: 'en-US' }));
    dispatch(getUpcoming({ language: 'en-US' }));
    dispatch(getOnTheAir({ language: 'en-US' }));
    dispatch(getPopularMovies({ language: 'en-US' }));
    dispatch(getPopularTvShows({ language: 'en-US' }));
    dispatch(getPopularPeople({ language: 'en-US' }));
  }, [dispatch]);
  return (
    <main>
      <Hero />
      <Titles
        title={'Trending'}
        movieData={trendingMovies?.data}
        tvShowData={trendingTvShows?.data}
      />
      <Titles
        title={'Upcoming'}
        bg={false}
        movieData={upcomingMovies?.data}
        tvShowData={onTheAirTvShows?.data}
      />
      <Titles
        type={'title'}
        title={"What's Popular"}
        movieData={popularMovies?.data}
        tvShowData={popularTvShows?.data}
      />
      <People title={'Popular People'} bg={false} data={popularPeople?.data} />
    </main>
  );
}
