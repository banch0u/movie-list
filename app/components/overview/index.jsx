import React from 'react';
import Wrapper from '../UI/wrapper';
import Title from '../UI/title';
const Overview = ({ overview }) => {
  return (
    <section className='py-16'>
      <Wrapper>
        <Title link={false}>Overview</Title>
        <p className='mt-2 text-2xl font-normal'>{overview}</p>
      </Wrapper>
    </section>
  );
};

export default Overview;
