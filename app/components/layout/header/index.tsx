import React from 'react';
import Wrapper from '../../UI/wrapper';
import Link from 'next/link';
import { SearchIcon } from '@/app/icons';
import Button from '../../UI/button';

const Header = () => {
  return (
    <header className=''>
      <Wrapper>
        <nav className='flex items-center justify-between py-4'>
          <div>
            <Link href={'/'}>
              <h1 className='font-black text-4xl hover:rotate-12 transition-all'>
                M
              </h1>
            </Link>
          </div>
          <ul className='flex gap-20 text-xl font-semibold'>
            <li className='transition hover:font-extrabold '>
              <Link href=''>Movies</Link>
            </li>
            <li className='transition hover:font-extrabold '>
              <Link href=''>Tv Shows</Link>
            </li>
            <li className='transition hover:font-extrabold '>
              <Link href=''>Peoples</Link>
            </li>
          </ul>
          <div className='flex gap-4'>
            <form>
              <input
                type='text'
                placeholder='Search'
                className='bg-customGray text-white p-4 rounded-lg w-60 outline-customOrange'
              />
            </form>
            <Button>Log in</Button>
          </div>
        </nav>
      </Wrapper>
    </header>
  );
};

export default Header;
