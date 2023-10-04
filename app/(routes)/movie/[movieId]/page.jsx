import React from 'react';
import InfoCard from '../../../components/infoCard';
import Overview from '../../../components/overview';
import Slogan from '../../../components/slogan';
import SwiperSection from '../../../components/swiperSection';
import Reviews from '../../../components/reviews';
const Movie = () => {
  return (
    <main>
      <InfoCard />
      <Slogan />
      <Overview />
      <SwiperSection bg={false} title={'Cast'} type={'card'} />
      <SwiperSection title={'Media'} type={'slide'} />
      <Reviews bg={false} />
      <SwiperSection title={'Similar to'} type={'slide'} />
    </main>
  );
};

export default Movie;
