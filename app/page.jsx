'use client';
import Hero from './components/hero';
import Titles from './components/titles';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingMovies } from './redux/trending/moviesSlice';
import { getTrendingTvShows } from './redux/trending/tvShowsSlice';

export default function Home() {
  const dispatch = useDispatch();
  const trendingMovies = useSelector((state) => state.trendingMovies);
  const trendingTvShows = useSelector((state) => state.trendingTvShows);
  useEffect(() => {
    dispatch(getTrendingMovies({ language: 'en-US' }));
    dispatch(getTrendingTvShows({ language: 'en-US' }));
  }, [dispatch]);
  return (
    <main>
      <Hero />
      <Titles
        type={'title'}
        title={'Trending'}
        movieData={trendingMovies?.data}
        tvShowData={trendingTvShows?.data}
      />
      <Titles type={'trailer'} title={'Latest Trailers'} bg={false} />
      <Titles type={'title'} title={"What's Popular"} />
    </main>
  );
}
