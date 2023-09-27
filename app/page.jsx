'use client';
import Hero from './components/hero';
import Titles from './components/titles';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingMovies } from './redux/trending/moviesSlice';
import { getTrendingTvShows } from './redux/trending/tvShowsSlice';
import { getUpcoming } from './redux/movies/upcomingSlice';
import { getOnTheAir } from './redux/tvShows/onTheAirSlice';

export default function Home() {
  const dispatch = useDispatch();
  const [ids, setIds] = useState([]);
  const trendingMovies = useSelector((state) => state.trendingMovies);
  const trendingTvShows = useSelector((state) => state.trendingTvShows);
  const upcomingMovies = useSelector((state) => state.upcomingMovies);
  const onTheAirTvShows = useSelector((state) => state.onTheAirTvShows);

  useEffect(() => {
    dispatch(getTrendingMovies({ language: 'en-US' }));
    dispatch(getTrendingTvShows({ language: 'en-US' }));
    dispatch(getUpcoming({ language: 'en-US' }));
    dispatch(getOnTheAir({ language: 'en-US' }));
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
        type={'trailer'}
        title={'Upcoming'}
        bg={false}
        movieData={upcomingMovies?.data}
        tvShowData={onTheAirTvShows?.data}
      />
      <Titles type={'title'} title={"What's Popular"} />
    </main>
  );
}
