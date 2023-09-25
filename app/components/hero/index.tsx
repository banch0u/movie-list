import React from 'react';
import Image from 'next/image';
import HeroImg from '../../assets/images/home.png';
import Wrapper from '../UI/wrapper';
import Button from '../UI/button';

const Hero = () => {
  return (
    <section className='max-h-[700px]  m-auto overflow-hidden relative'>
      <Image src={HeroImg} alt='hero' className='w-full grayscale ' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3'>
        <Wrapper>
          <h2 className='text-6xl mb-2'>Wellcome</h2>
          <p className='text-2xl mb-6'>
            Movies are the gateway to discover new worlds, and in each frame, we
            find a piece of our own.
          </p>
          <form action='' className='flex text-black'>
            <input
              type='text'
              placeholder='Search for a movie, tv show...'
              className='rounded-l-lg w-full px-4 outline-customOrange'
            />
            <Button rightRound={true}>Search</Button>
          </form>
        </Wrapper>
      </div>
    </section>
  );
};

export default Hero;
