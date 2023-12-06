'use client';
import React, { useEffect, useState } from 'react';
import Wrapper from '../../../components/UI/wrapper';
import Title from '../../../components/UI/title';
import TitleCard from '../../../components/titleCard';
import CustomPagination from '../../../components/customPagination';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularMovies } from '../../../redux/movies/popularSlice';

const Popular = () => {
  const [page, setPage] = useState('1');
  const dispatch = useDispatch();
  let popularMovies = useSelector((state) => state.popularMovies);
  useEffect(() => {
    popularMovies = null;
    dispatch(getPopularMovies({ language: 'en-US', page: page }));
  }, [dispatch, page]);
  return (
    <main>
      <Wrapper>
        <Title link={false}>Now Playing</Title>
        <div className='grid  grid-cols-5 gap-8 py-6'>
          {popularMovies?.data?.results?.map((item) => (
            <TitleCard data={item} type={'movie'} />
          ))}
        </div>
        <CustomPagination
          totalPages={popularMovies?.data?.total_pages}
          changePage={setPage}
        />
      </Wrapper>
    </main>
  );
};

export default Popular;
