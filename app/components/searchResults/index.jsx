import React from 'react';
import Card from '../card';
import { Pagination } from '@mui/material';
import './pagination.css';
import Wrapper from '../UI/wrapper';
const SearchResults = ({ data, changePage, type }) => {
  const handleChangeQuerry = (e) => {
    changePage(Number(e.target.textContent));
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <Wrapper>
      <div className='flex flex-col gap-5 mb-5'>
        {data?.results?.map((item) => (
          <Card data={item} key={item.id} type={type} />
        ))}
      </div>
      <div className='flex justify-center'>
        <Pagination
          count={data?.total_pages}
          variant='outlined'
          shape='rounded'
          onChange={(e) => handleChangeQuerry(e)}
        />
      </div>
    </Wrapper>
  );
};

export default SearchResults;
