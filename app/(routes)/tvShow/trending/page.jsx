'use client';
import React, { useEffect, useState } from 'react';
import Wrapper from '../../../components/UI/wrapper';
import Title from '../../../components/UI/title';
import TitleCard from '../../../components/titleCard';
import CustomPagination from '../../../components/customPagination';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingTvShows } from '../../../redux/trending/tvShowsSlice';

const Trending = () => {
  const [page, setPage] = useState('1');
  const dispatch = useDispatch();
  const trendingTvShows = useSelector((state) => state.trendingTvShows);
  useEffect(() => {
    dispatch(getTrendingTvShows({ language: 'en-US', page: page }));
  }, [dispatch, page]);
  return (
    <main>
      <Wrapper>
        <Title link={false}>Trending Tv Shows</Title>
        <div className='grid  grid-cols-5 gap-8 py-6'>
          {trendingTvShows?.data?.results?.map((item) => (
            <TitleCard data={item} type={'movie'} />
          ))}
        </div>
        <CustomPagination
          totalPages={trendingTvShows?.data?.total_pages}
          changePage={setPage}
        />
      </Wrapper>
    </main>
  );
};

export default Trending;
