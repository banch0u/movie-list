'use client';
import React from 'react';
import Wrapper from '../UI/wrapper';
import Title from '../UI/title';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './tabs.css';
import Button from '../UI/button';
import TitleItem from '../titlesItem';

const Titles = () => {
  return (
    <section className='pb-16'>
      <Wrapper>
        <Tabs>
          <div className='custom-tabs'>
            <Title>Trending</Title>
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
            <TitleItem />
          </TabPanel>
          <TabPanel>
            <TitleItem />
          </TabPanel>
        </Tabs>
      </Wrapper>
    </section>
  );
};

export default Titles;
