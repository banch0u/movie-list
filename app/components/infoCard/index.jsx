import React from 'react';
import Title from '../UI/title';
import Img from '../../assets/images/no_image_dark.png';
import Image from 'next/image';
import {
  FacebookIcon,
  InstagramIcon,
  LinkIcon,
  TwitterXIcon,
  WikidataIcon,
} from '../../icons';
import Link from 'next/link';
import Wrapper from '../UI/wrapper';

const InfoCard = () => {
  return (
    <section className='mb-16'>
      <Wrapper>
        <Title link={false}>Movie Name</Title>
        <div className='mt-4 flex gap-6'>
          <Image src={Img} alt='' className='border rounded-xl' />
          <div className='text-2xl font-semibold flex flex-col gap-2'>
            <p>
              Original title: <span className='font-light'>original name</span>
            </p>
            <p>
              Release Date:{' '}
              <span className='font-light'>21.02.2009 (Releasied)</span>
            </p>
            <p>
              Duration: <span className='font-light'>1h 30m</span>
            </p>
            <p>
              Genre: <span className='font-light'>Thriller, Romantic</span>
            </p>
            <p>
              Score: <span className='font-light'>7.64 (2435 votes)</span>
            </p>
            <p>
              Original Language: <span className='font-light'>English</span>
            </p>
            <p>
              Studio: <span className='font-light'>Dream Works</span>
            </p>
            <p>
              Budget: <span className='font-light'>30,000,000$</span>
            </p>
            <p>
              Revenue: <span className='font-light'>224153233$</span>
            </p>
            <div className='flex flex-col gap-2'>
              <p>Resources: </p>
              <div className='flex gap-4'>
                <Link href={''}>
                  <LinkIcon />
                </Link>
                <Link href={''}>
                  <WikidataIcon />
                </Link>
                <Link href={''}>
                  <FacebookIcon />
                </Link>
                <Link href={''}>
                  <InstagramIcon />
                </Link>
                <Link href={''}>
                  <TwitterXIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default InfoCard;
