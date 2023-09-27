'use client';
import React from 'react';
import Wrapper from '../UI/wrapper';
import Title from '../UI/title';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './tabs.css';
import Button from '../UI/button';
import TitlesItem from '../titlesItem';
import TrailersItem from '../trailersItem';

const Titles = ({ bg = true, title, movieData, tvShowData }) => {
  return (
    <section
      className='py-16'
      style={{ backgroundColor: `${bg ? '#000000' : '#1F1F1F'}` }}>
      <Wrapper>
        <Tabs>
          <div className='custom-tabs'>
            <Title>{title}</Title>
            <TabList>
              <Tab>
                <Button>Movies</Button>
              </Tab>
              <Tab>
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
