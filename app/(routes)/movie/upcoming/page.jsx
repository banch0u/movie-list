'use client';
import React, { useEffect, useState } from 'react';
import Wrapper from '../../../components/UI/wrapper';
import Title from '../../../components/UI/title';
import TitleCard from '../../../components/titleCard';
import CustomPagination from '../../../components/customPagination';
import { useDispatch, useSelector } from 'react-redux';
import { getUpcoming } from '../../../redux/movies/upcomingSlice';

const Upcoming = () => {
  const [page, setPage] = useState('1');
  const dispatch = useDispatch();
  let upcomingMovies = useSelector((state) => state.upcomingMovies);
  useEffect(() => {
    upcomingMovies = null;
    dispatch(getUpcoming({ language: 'en-US', page: page }));
  }, [dispatch, page]);
  return (
    <main>
      <Wrapper>
        <Title link={false}>Upcoming Movies</Title>
        <div className='grid  grid-cols-5 gap-8 py-6'>
          {upcomingMovies?.data?.results?.map((item) => (
            <TitleCard data={item} type={'movie'} />
          ))}
        </div>
        <CustomPagination
          totalPages={upcomingMovies?.data?.total_pages}
          changePage={setPage}
        />
      </Wrapper>
    </main>
  );
};

export default Upcoming;
