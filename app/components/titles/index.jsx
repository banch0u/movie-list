'use client';
import React, { useState } from 'react';
import Wrapper from '../UI/wrapper';
import Title from '../UI/title';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './tabs.css';
import Button from '../UI/button';
import TitlesItem from '../titlesItem';
import TrailersItem from '../swiperSection';

const Titles = ({ bg = true, title, movieData, tvShowData }) => {
  const [mediaType, setMediaType] = useState('movie');
  const linkMaker = (title, mediaType) => {
    let link = '';
    switch (mediaType) {
      case 'movie':
        link += '/movie';
        break;
      case 'tv':
        link += '/tvShow';
        break;
    }
    switch (title) {
      case 'Upcoming':
        link += '/upcoming';
        break;
      case "What's Popular":
        link += '/popular';
        break;
      case 'Trending':
        link += '/trending';
        break;
    }
    return link;
  };
  return (
    <section
      className='py-16'
      style={{ backgroundColor: `${bg ? '#000000' : '#1F1F1F'}` }}>
      <Wrapper>
        <Tabs>
          <div className='custom-tabs'>
            <Title link={linkMaker(title, mediaType)}>{title}</Title>
            <TabList>
              <Tab onClick={() => setMediaType('movie')}>
                <Button>Movies</Button>
              </Tab>
              <Tab onClick={() => setMediaType('tv')}>
                <Button>Tv Shows</Button>
              </Tab>
            </TabList>
          </div>
          <TabPanel>
            <TitlesItem data={movieData} type='movie' bg={bg} />
          </TabPanel>
          <TabPanel>
            <TitlesItem data={tvShowData} type='tvShow' bg={bg} />
          </TabPanel>
        </Tabs>
      </Wrapper>
    </section>
  );
};

export default Titles;
