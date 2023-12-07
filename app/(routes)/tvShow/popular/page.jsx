'use client';
import React, { useEffect, useState } from 'react';
import Wrapper from '../../../components/UI/wrapper';
import Title from '../../../components/UI/title';
import TitleCard from '../../../components/titleCard';
import CustomPagination from '../../../components/customPagination';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularTvShows } from '../../../redux/tvShows/popularSlice';

const Popular = () => {
  const [page, setPage] = useState('1');
  const dispatch = useDispatch();
  let popularTvShows = useSelector((state) => state.popularTvShows);
  useEffect(() => {
    popularTvShows = null;
    dispatch(getPopularTvShows({ language: 'en-US', page: page }));
  }, [dispatch, page]);
  return (
    <main>
      <Wrapper>
        <Title link={false}>Popular Tv Shows</Title>
        <div className='grid  grid-cols-5 gap-8 py-6'>
          {popularTvShows?.data?.results?.map((item) => (
            <TitleCard data={item} type={'tvShow'} />
          ))}
        </div>
        <CustomPagination
          totalPages={popularTvShows?.data?.total_pages}
          changePage={setPage}
        />
      </Wrapper>
    </main>
  );
};

export default Popular;
