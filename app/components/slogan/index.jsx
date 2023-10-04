import React from 'react';
import Wrapper from '../UI/wrapper';

const Slogan = ({ tagline }) => {
  return (
    <h3 className=' bg-customOrange text-black text-center text-4xl font-semibold py-4'>
      <Wrapper>{tagline}</Wrapper>
    </h3>
  );
};

export default Slogan;
