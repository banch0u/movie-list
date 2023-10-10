import React from 'react';
import Wrapper from '../UI/wrapper';
import Title from '../UI/title';
const Overview = ({ overview, title = 'Overview' }) => {
  return (
    <section className='py-16'>
      <Wrapper>
        <Title link={false}>{title}</Title>
        <p className='mt-4 text-2xl font-normal'>{overview}</p>
      </Wrapper>
    </section>
  );
};

export default Overview;
