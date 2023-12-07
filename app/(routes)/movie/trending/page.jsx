'use client';
import React, { useEffect, useState } from 'react';
import Wrapper from '../../../components/UI/wrapper';
import Title from '../../../components/UI/title';
import TitleCard from '../../../components/titleCard';
import CustomPagination from '../../../components/customPagination';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingMovies } from '../../../redux/trending/moviesSlice';

const Trending = () => {
  const [page, setPage] = useState('1');
  const dispatch = useDispatch();
  const trendingMovies = useSelector((state) => state.trendingMovies);
  useEffect(() => {
    dispatch(getTrendingMovies({ language: 'en-US', page: page }));
  }, [dispatch, page]);
  return (
    <main>
      <Wrapper>
        <Title link={false}>Trending Movies</Title>
        <div className='grid  grid-cols-5 gap-8 py-6'>
          {trendingMovies?.data?.results?.map((item) => (
            <TitleCard data={item} type={'movie'} />
          ))}
        </div>
        <CustomPagination
          totalPages={trendingMovies?.data?.total_pages}
          changePage={setPage}
        />
      </Wrapper>
    </main>
  );
};

export default Trending;
