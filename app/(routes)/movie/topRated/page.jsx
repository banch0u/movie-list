'use client';
import React, { useEffect, useState } from 'react';
import Wrapper from '../../../components/UI/wrapper';
import Title from '../../../components/UI/title';
import TitleCard from '../../../components/titleCard';
import CustomPagination from '../../../components/customPagination';
import { useDispatch, useSelector } from 'react-redux';
import { getTopRated } from '../../../redux/movies/topRatedSlice';

const TopRated = () => {
  const [page, setPage] = useState('1');
  const dispatch = useDispatch();
  let movieTopRated = useSelector((state) => state.movieTopRated);
  useEffect(() => {
    movieTopRated = null;
    dispatch(getTopRated({ language: 'en-US', page: page }));
  }, [dispatch, page]);
  return (
    <main>
      <Wrapper>
        <Title link={false}>Top Rated Movies</Title>
        <div className='grid  grid-cols-5 gap-8 py-6'>
          {movieTopRated?.data?.results?.map((item) => (
            <TitleCard data={item} type={'movie'} />
          ))}
        </div>
        <CustomPagination
          totalPages={movieTopRated?.data?.total_pages}
          changePage={setPage}
        />
      </Wrapper>
    </main>
  );
};

export default TopRated;
