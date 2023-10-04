import React from 'react';
import Wrapper from '../UI/wrapper';
import Title from '../UI/title';
import { DefaultProfile } from '../../icons';
const Reviews = ({ bg = true }) => {
  return (
    <section
      className='py-16'
      style={{ backgroundColor: bg ? '#000' : '#1F1F1F' }}>
      <Wrapper>
        <Title link={false}>Reviews</Title>
        <div className='mt-2 flex flex-col gap-3'>
          <>
            <div className='flex gap-2 mb-1 items-center'>
              <DefaultProfile />
              <p className='text-xl font-medium'>Username</p>
            </div>
            <p className='font-light'>
              Check out the full spoiler free review at Sunshine State Cineplex.
              \r\nhttps://sunshinestatecineplex.com/2023/03/13/sxsw-2023-john-wick-chapter-4-2023/\r\n\r\nJohn
              Wick: Chapter 4 might be a little long, but when it is fun, there
              are few films that can compete with its magnetism. Reeves shows
              why he’s one of the best genre actors in the world and pours his
              heart and soul into a soft-spoken performance. Combined with
              Stahelski’s fight sequences, this is sure to become a highly
              rewatched, often quoted classic.
            </p>
            <div className='flex justify-end'>
              <p className='font-light'>Jun 9 2015</p>
            </div>
          </>
          <>
            <div className='flex gap-2 mb-1 items-center'>
              <DefaultProfile />
              <p className='text-xl font-medium'>Username</p>
            </div>
            <p className='font-light'>
              Check out the full spoiler free review at Sunshine State Cineplex.
              \r\nhttps://sunshinestatecineplex.com/2023/03/13/sxsw-2023-john-wick-chapter-4-2023/\r\n\r\nJohn
              Wick: Chapter 4 might be a little long, but when it is fun, there
              are few films that can compete with its magnetism. Reeves shows
              why he’s one of the best genre actors in the world and pours his
              heart and soul into a soft-spoken performance. Combined with
              Stahelski’s fight sequences, this is sure to become a highly
              rewatched, often quoted classic.
            </p>
            <div className='flex justify-end'>
              <p className='font-light'>Jun 9 2015</p>
            </div>
          </>
          <>
            <div className='flex gap-2 mb-1 items-center'>
              <DefaultProfile />
              <p className='text-xl font-medium'>Username</p>
            </div>
            <p className='font-light'>
              Check out the full spoiler free review at Sunshine State Cineplex.
              \r\nhttps://sunshinestatecineplex.com/2023/03/13/sxsw-2023-john-wick-chapter-4-2023/\r\n\r\nJohn
              Wick: Chapter 4 might be a little long, but when it is fun, there
              are few films that can compete with its magnetism. Reeves shows
              why he’s one of the best genre actors in the world and pours his
              heart and soul into a soft-spoken performance. Combined with
              Stahelski’s fight sequences, this is sure to become a highly
              rewatched, often quoted classic.
            </p>
            <div className='flex justify-end'>
              <p className='font-light'>Jun 9 2015</p>
            </div>
          </>
        </div>
      </Wrapper>
    </section>
  );
};

export default Reviews;
