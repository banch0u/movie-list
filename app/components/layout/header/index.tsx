import React from 'react';
import Wrapper from '../../UI/wrapper';
import Link from 'next/link';
import { SearchIcon } from '@/app/icons';

const Header = () => {
  return (
    <header className='border-b-8'>
      <Wrapper>
        <nav className='flex items-center justify-between py-4'>
          <div>
            <Link href={'/'}>
              <h1 className='font-black text-4xl'>M</h1>
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
          <div className='flex items-center gap-6 text-xl font-semibold'>
            <select name='lang' id='lang' className=' bg-transparent'>
              <option className='text-black font-semibold' value='en'>
                EN
              </option>
              <option className='text-black font-semibold' value='az'>
                AZ
              </option>
              <option className='text-black font-semibold' value='ru'>
                RU
              </option>
              <option className='text-black font-semibold' value='tr'>
                TR
              </option>
            </select>
            <Link href={''}>Login</Link>
            <Link href={''}>Join Us</Link>

            <Link href={''}>
              <SearchIcon />
            </Link>
          </div>
        </nav>
      </Wrapper>
    </header>
  );
};

export default Header;
