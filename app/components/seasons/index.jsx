import React, { useState } from 'react';
import Wrapper from '../UI/wrapper';
import Title from '../UI/title';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './style.css';
import { StarIcon } from '../../icons';
import AccordionItem from '../accordionItem';

const Seasons = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const filteredSeasons = data?.seasons?.filter(
    (item) => item.season_number !== 0
  );
  return (
    <section className='py-16'>
      <Wrapper>
        <Title link={false}>Seasons</Title>
        <div className='accordion flex flex-col gap-2 mt-4'>
          {filteredSeasons?.map((item) => (
            <Accordion
              expanded={expanded === `panel${item.id}`}
              onChange={handleChange(`panel${item.id}`)}
              key={item.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1bh-content'
                id='panel1bh-header'
                className='!bg-customOrange !text-black !rounded-lg'>
                <div className='flex gap-4'>
                  <h5 className='font-semibold text-xl'>{item.name}</h5>
                  <p className=' text-xl'>{item.episode_count} Episodes</p>
                  <p className='flex items-center  text-xl'>
                    <StarIcon /> {item.vote_average.toFixed(1)}
                  </p>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <AccordionItem seasonNum={item?.season_number} id={data?.id} />
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Seasons;
