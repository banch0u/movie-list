'use client';
import React, { useEffect, useState } from 'react';
import Wrapper from '../../../components/UI/wrapper';
import Title from '../../../components/UI/title';
import SearchBar from '../../../components/searchBar';
import SearchResults from '../../../components/searchResults';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Button from '../../../components/UI/button';
import { useDispatch, useSelector } from 'react-redux';
import { getMultiSearch } from '../../../redux/search/multiSlice';
import { useParams } from 'next/navigation';
import { getMovieSearch } from '../../../redux/search/movieSlice';
import { getTvShowSearch } from '../../../redux/search/tvShowSlice';
import { getPersonSearch } from '../../../redux/search/personSlice';
const Search = () => {
  const { searchQuery } = useParams();
  const [page, setPage] = useState(1);
  const [totalResultsTab, setTotalResultsTab] = useState(1);
  const dispatch = useDispatch();
  const multiSearch = useSelector((state) => state.multiSearch);
  const movieSearch = useSelector((state) => state.movieSearch);
  const tvShowSearch = useSelector((state) => state.tvShowSearch);
  const personSearch = useSelector((state) => state.personSearch);

  const changePage = (page) => {
    setPage(page);
  };
  useEffect(() => {
    dispatch(
      getMultiSearch({
        query: searchQuery.replaceAll('%20', ' '),
        include_adult: 'false',
        language: 'en-US',
        page: page,
      })
    );
    dispatch(
      getMovieSearch({
        query: searchQuery.replaceAll('%20', ' '),
        include_adult: 'false',
        language: 'en-US',
        page: page,
      })
    );
    dispatch(
      getTvShowSearch({
        query: searchQuery.replaceAll('%20', ' '),
        include_adult: 'false',
        language: 'en-US',
        page: page,
      })
    );
    dispatch(
      getPersonSearch({
        query: searchQuery.replaceAll('%20', ' '),
        include_adult: 'false',
        language: 'en-US',
        page: page,
      })
    );
  }, [dispatch, page]);
  return (
    <main className='pb-16'>
      <Wrapper>
        <Title link={false}>Search</Title>
        <div className='w-4/6 m-auto mb-4'>
          <SearchBar />
        </div>
      </Wrapper>
      <div className='w-full bg-customOrange p-3 mb-4'>
        <p className='text-black text-center text-2xl font-bold'>
          About{' '}
          {totalResultsTab === 1 ? multiSearch?.data?.total_results : null}
          {totalResultsTab === 2 ? movieSearch?.data?.total_results : null}
          {totalResultsTab === 3 ? tvShowSearch?.data?.total_results : null}
          {totalResultsTab === 4
            ? personSearch?.data?.total_results
            : null}{' '}
          results found for "{searchQuery.replaceAll('%20', ' ')}"
        </p>
      </div>
      <Wrapper>
        <Tabs>
          <div className='custom-tabs'>
            <TabList>
              <div className='flex justify-center mb-4'>
                <Tab>
                  <div
                    onClick={() => {
                      setTotalResultsTab(1);
                      changePage(1);
                    }}>
                    <Button round={'left'}>All</Button>
                  </div>
                </Tab>
                <Tab>
                  <div
                    onClick={() => {
                      setTotalResultsTab(2);
                      changePage(1);
                    }}>
                    <Button round={'false'}>Movie</Button>
                  </div>
                </Tab>
                <Tab>
                  <div
                    onClick={() => {
                      setTotalResultsTab(3);
                      changePage(1);
                    }}>
                    <Button round={'false'}>Tv Show</Button>
                  </div>
                </Tab>
                <Tab>
                  <div
                    onClick={() => {
                      setTotalResultsTab(4);
                      changePage(1);
                    }}>
                    <Button round={'right'}>Person</Button>
                  </div>
                </Tab>
              </div>
            </TabList>
          </div>
          <TabPanel>
            <SearchResults data={multiSearch?.data} changePage={changePage} />
          </TabPanel>
          <TabPanel>
            <SearchResults
              data={movieSearch?.data}
              changePage={changePage}
              type='movie'
            />
          </TabPanel>
          <TabPanel>
            <SearchResults
              data={tvShowSearch?.data}
              changePage={changePage}
              type='tv'
            />
          </TabPanel>
          <TabPanel>
            <SearchResults
              data={personSearch?.data}
              changePage={changePage}
              type='person'
            />
          </TabPanel>
        </Tabs>
      </Wrapper>
    </main>
  );
};

export default Search;
