'use client';
import React, { useEffect, useState } from 'react';
import Wrapper from '../../../components/UI/wrapper';
import Title from '../../../components/UI/title';
import TitleCard from '../../../components/titleCard';
import CustomPagination from '../../../components/customPagination';
import { useDispatch, useSelector } from 'react-redux';
import { getOnTheAir } from '../../../redux/tvShows/onTheAirSlice';

const Upcoming = () => {
  const [page, setPage] = useState('1');
  const dispatch = useDispatch();
  let onTheAirTvShows = useSelector((state) => state.onTheAirTvShows);
  useEffect(() => {
    onTheAirTvShows = null;
    dispatch(getOnTheAir({ language: 'en-US', page: page }));
  }, [dispatch, page]);
  return (
    <main>
      <Wrapper>
        <Title link={false}>Upcoming Tv Shows</Title>
        <div className='grid  grid-cols-5 gap-8 py-6'>
          {onTheAirTvShows?.data?.results?.map((item) => (
            <TitleCard data={item} type={'tvShow'} />
          ))}
        </div>
        <CustomPagination
          totalPages={onTheAirTvShows?.data?.total_pages}
          changePage={setPage}
        />
      </Wrapper>
    </main>
  );
};

export default Upcoming;
