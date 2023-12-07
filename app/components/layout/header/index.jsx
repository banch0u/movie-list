'use client';
import React from 'react';
import Wrapper from '../../UI/wrapper';
import Link from 'next/link';
import Button from '../../UI/button';
import Img from '../../../assets/images/no_image_dark.png';
import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMultiBarSearch } from '../../../redux/search/multiBarSlice';
import './style.css';
const Header = () => {
  const [query, setQuery] = useState('');
  const [focus, setFocus] = useState(false);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.multiBarSearch);
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.replace(`/search/${e.target[0].value}`);
    setQuery('');
  };
  useEffect(() => {
    dispatch(
      getMultiBarSearch({
        query: query.replaceAll('%20', ' '),
        include_adult: 'false',
        language: 'en-US',
        page: 1,
      })
    );
  }, [query]);
  return (
    <header className=''>
      <Wrapper>
        <nav className='flex items-center justify-between py-4'>
          <div>
            <Link href={'/'}>
              <h1 className='font-black text-4xl hover:rotate-12 transition-all hover:text-customOrange'>
                M
              </h1>
            </Link>
          </div>
          <ul className='flex gap-20 text-xl font-semibold dropdowns'>
            <li class='dropdown'>
              <button class='dropbtn'>Movies</button>
              <div class='dropdown-content'>
                <Link href='/movie/popular'>Popular</Link>
                <Link href='/movie/nowPlaying'>Now Playing</Link>
                <Link href='/movie/upcoming'>Upcoming</Link>
                <Link href='/movie/topRated'>Top Rated</Link>
              </div>
            </li>
            <li class='dropdown'>
              <button class='dropbtn'>Tv Shows</button>
              <div class='dropdown-content'>
                <Link href='/tvShow/popular'>Popular</Link>
                <Link href='/tvShow/upcoming'>Upcoming</Link>
                <Link href='/tvShow/topRated'>Top Rated</Link>
              </div>
            </li>
            <li class='dropdown'>
              <button class='dropbtn'>People</button>
              <div class='dropdown-content'>
                <Link href='#'>Popular People</Link>
              </div>
            </li>
          </ul>
          <div className='flex gap-4 relative'>
            <form
              onSubmit={(e) => handleSubmit(e)}
              // onBlur={() => setFocus(false)}
              onFocus={() => setFocus(true)}>
              <input
                type='text'
                placeholder='Search'
                className='bg-customGray text-white p-4 rounded-lg w-60 outline-customOrange'
                onChange={(e) => handleSearch(e)}
              />
              {focus ? (
                <>
                  {query ? (
                    <div className='bg-customGray text-white absolute top-16 z-30 w-80 p-4 rounded-lg flex flex-col gap-2 border border-black'>
                      {data?.results?.slice(0, 4).map((item) => (
                        <Link
                          href={
                            item?.media_type === 'movie'
                              ? `/movie/${item.id}`
                              : '' || item?.media_type === 'person'
                              ? `/person/${item.id}`
                              : '' || item?.media_type === 'tv'
                              ? `/tvShow/${item.id}`
                              : ''
                          }
                          onClick={() => setQuery('')}
                          className='flex gap-2'>
                          {item?.poster_path || item?.profile_path ? (
                            <img
                              src={
                                item?.media_type === 'person'
                                  ? `${
                                      process.env.NEXT_PUBLIC_STORAGE +
                                      item?.profile_path
                                    }`
                                  : `${
                                      process.env.NEXT_PUBLIC_STORAGE +
                                      item?.poster_path
                                    }`
                              }
                              alt={item?.name}
                              className='w-16 rounded-lg'
                            />
                          ) : (
                            <Image
                              src={Img}
                              alt={'No image'}
                              className='w-16 rounded-lg'
                            />
                          )}
                          <h4 className='line-clamp-4'>
                            {item?.media_type === 'movie'
                              ? item?.title
                              : item?.name}
                          </h4>
                        </Link>
                      ))}
                      <Link
                        onClick={() => setQuery('')}
                        href={`/search/${query}`}
                        className='text-center text-gray-300'>
                        Show more
                      </Link>
                    </div>
                  ) : null}
                </>
              ) : null}
            </form>
            <Button>Log in</Button>
          </div>
        </nav>
      </Wrapper>
    </header>
  );
};

export default Header;
