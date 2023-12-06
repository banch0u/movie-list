import React from 'react';
import './pagination.css';
import { Pagination } from '@mui/material';
const CustomPagination = ({ totalPages, changePage }) => {
  const handleChangeQuerry = (e) => {
    changePage(Number(e.target.textContent));
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <div className='flex justify-center'>
      <Pagination
        count={totalPages}
        variant='outlined'
        shape='rounded'
        onChange={(e) => handleChangeQuerry(e)}
      />
    </div>
  );
};

export default CustomPagination;
