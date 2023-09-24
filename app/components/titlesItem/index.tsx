import Image from 'next/image';
import React from 'react';
import CoverImage from '../../assets/images/title.jpg';
import Score from '../score';
import Link from 'next/link';

const TitleItem = () => {
  return (
    <div className='flex gap-6 justify-center'>
      <Link href={''} className='w-[16.6%]'>
        <Image src={CoverImage} alt='' className='rounded-xl mb-2' />
        <div>
          <Score score={69} />
          <h4 className='inline text-xl hover:text-customOrange transition-all'>
            The Continental: From the World of John Wick
          </h4>
          <p className='text-gray-500'>Sep 22, 2023</p>
        </div>
      </Link>
      <Link href={''} className='w-[16.6%]'>
        <Image src={CoverImage} alt='' className='rounded-xl mb-2' />
        <Score score={69} />
        <h4 className='inline text-xl hover:text-customOrange transition-all'>
          The Continental: From the World of John Wick
        </h4>
        <p className='text-gray-500'>Sep 22, 2023</p>
      </Link>
      <Link href={''} className='w-[16.6%]'>
        <Image src={CoverImage} alt='' className='rounded-xl mb-2' />
        <Score score={69} />
        <h4 className='inline text-xl hover:text-customOrange transition-all'>
          The Continental: From the World of John Wick
        </h4>
        <p className='text-gray-500'>Sep 22, 2023</p>
      </Link>
      <Link href={''} className='w-[16.6%]'>
        <Image src={CoverImage} alt='' className='rounded-xl mb-2' />
        <Score score={69} />
        <h4 className='inline text-xl hover:text-customOrange transition-all'>
          The Continental: From the World of John Wick
        </h4>
        <p className='text-gray-500'>Sep 22, 2023</p>
      </Link>
      <Link href={''} className='w-[16.6%]'>
        <Image src={CoverImage} alt='' className='rounded-xl mb-2' />
        <Score score={69} />
        <h4 className='inline text-xl hover:text-customOrange transition-all'>
          The Continental: From the World of John Wick
        </h4>
        <p className='text-gray-500'>Sep 22, 2023</p>
      </Link>
      <Link href={''} className='w-[16.6%]'>
        <Image src={CoverImage} alt='' className='rounded-xl mb-2' />
        <Score score={69} />
        <h4 className='inline text-xl hover:text-customOrange transition-all'>
          The Continental: From the World of John Wick
        </h4>
        <p className='text-gray-500'>Sep 22, 2023</p>
      </Link>
    </div>
  );
};

export default TitleItem;
