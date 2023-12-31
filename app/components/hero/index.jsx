'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../UI/wrapper';
import Button from '../UI/button';
import SearchBar from '../searchBar';
import { getTopRated } from '../../redux/movies/topRatedSlice';

const Hero = () => {
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.movieTopRated);
  const rndTitle = Math.floor(Math.random() * 20) + 1;
  useEffect(() => {
    const rndPage = Math.floor(Math.random() * 100) + 1;
    dispatch(
      getTopRated({
        page: rndPage,
        language: 'en-US',
      })
    );
    setLoad(true);
  }, [dispatch]);
  return (
    <section className='max-h-[700px]  m-auto overflow-hidden relative'>
      {load ? (
        <div>
          {data?.results ? (
            <div className=' relative' style={{ aspectRatio: 1903 / 700 }}>
              <img
                src={`https://image.tmdb.org/t/p/original${data?.results[rndTitle]?.backdrop_path}`}
                alt={data?.results[rndTitle]?.original_title}
                className='w-full'
              />
              <div
                className='w-full bg-customGray absolute top-0 left-0 -z-10 animate-pulse'
                style={{ aspectRatio: 1903 / 700 }}></div>
            </div>
          ) : (
            <div
              className='w-full bg-customGray animate-pulse'
              style={{ aspectRatio: 1903 / 700 }}></div>
          )}
        </div>
      ) : (
        <div
          className='w-full bg-customGray animate-pulse'
          style={{ aspectRatio: 1903 / 700 }}></div>
      )}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3'>
        <Wrapper>
          <h2 className='text-6xl mb-2'>Welcome</h2>
          <p className='text-2xl mb-6'>
            Movies are the gateway to discover new worlds, and in each frame, we
            find a piece of our own.
          </p>
          <SearchBar />
        </Wrapper>
      </div>
    </section>
  );
};

export default Hero;
