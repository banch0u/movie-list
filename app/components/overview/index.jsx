import React from 'react';
import Wrapper from '../UI/wrapper';
import Title from '../UI/title';
const Overview = () => {
  return (
    <section className='py-16'>
      <Wrapper>
        <Title link={false}>Overview</Title>
        <p className='mt-2 text-2xl font-normal'>
          With the price on his head ever increasing, John Wick uncovers a path
          to defeating The High Table. But before he can earn his freedom, Wick
          must face off against a new enemy with powerful alliances across the
          globe and forces that turn old friends into foes.
        </p>
      </Wrapper>
    </section>
  );
};

export default Overview;
