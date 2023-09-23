import React from 'react';
import Wrapper from '../../UI/wrapper';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='border-t-8'>
      <Wrapper>
        <Wrapper>
          <div className='border-x-8 py-6 flex justify-around'>
            <div>
              <Link href={'/'} className='text-right'>
                <h1 className='font-black text-8xl'>M</h1>
              </Link>
              <button className='bg-transparent text-4xl py-2 px-8 border-4'>
                JOIN US
              </button>
            </div>
            <div className='text-xl'>
              <h3>THE BASICS</h3>
              <ul>
                <li>
                  <Link href={''}>About Us</Link>
                </li>
                <li>
                  <Link href={''}>Contact Us</Link>
                </li>
                <li>
                  <Link href={''}>Support Forums</Link>
                </li>
                <li>
                  <Link href={''}>API</Link>
                </li>
                <li>
                  <Link href={''}>System Status</Link>
                </li>
              </ul>
            </div>
            <div className='text-xl'>
              <h3> GET INVOLVED</h3>
              <ul>
                <li>
                  <Link href={''}>Contribution Bible</Link>
                </li>
                <li>
                  <Link href={''}>Add New Movie</Link>
                </li>
                <li>
                  <Link href={''}>Add New TV Show</Link>
                </li>
              </ul>
            </div>
            <div className='text-xl'>
              <h3>COMMUNITY</h3>
              <ul>
                <li>
                  <Link href={''}>Guidelines</Link>
                </li>
                <li>
                  <Link href={''}>Discussions</Link>
                </li>
                <li>
                  <Link href={''}>Leaderboard</Link>
                </li>
                <li>
                  <Link href={''}>Twitter</Link>
                </li>
              </ul>
            </div>
            <div className='text-xl'>
              <h3>LEGAL</h3>
              <ul>
                <li>
                  <Link href={''}>Terms of Use</Link>
                </li>
                <li>
                  <Link href={''}>API Terms of Use</Link>
                </li>
                <li>
                  <Link href={''}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href={''}>DMCA Takedown Request</Link>
                </li>
              </ul>
            </div>
          </div>
        </Wrapper>
      </Wrapper>
    </footer>
  );
};

export default Footer;
