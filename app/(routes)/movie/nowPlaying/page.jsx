'use client';
import React, { useEffect, useState } from 'react';
import Wrapper from '../../../components/UI/wrapper';
import Title from '../../../components/UI/title';
import TitlesItem from '../../../components/titlesItem';
import Link from 'next/link';
import Score from '../../../components/score';
import TitleCard from '../../../components/titleCard';
import { Pagination } from '@mui/material';
import CustomPagination from '../../../components/customPagination';
import { useDispatch, useSelector } from 'react-redux';
import { getNowPlaying } from '../../../redux/movies/nowPlayingSlice';

const NowPlaying = () => {
  const [page, setPage] = useState('1');
  const dispatch = useDispatch();
  let nowPlayingMovies = useSelector((state) => state.nowPlayingMovies);
  useEffect(() => {
    nowPlayingMovies = null;
    dispatch(getNowPlaying({ language: 'en-US', page: page }));
  }, [dispatch, page]);
  return (
    <main>
      <Wrapper>
        <Title link={false}>Now Playing</Title>
        <div className='grid  grid-cols-5 gap-8 py-6'>
          {nowPlayingMovies?.data?.results?.map((item) => (
            <TitleCard data={item} type={'movie'} />
          ))}
        </div>
        <CustomPagination
          totalPages={nowPlayingMovies?.data?.total_pages}
          changePage={setPage}
        />
      </Wrapper>
    </main>
  );
};

export default NowPlaying;
