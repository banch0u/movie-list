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

const Seasons = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <section className='py-16'>
      <Wrapper>
        <Title link={false}>Seasons</Title>
        <div className='accordion flex flex-col gap-2'>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1bh-content'
              id='panel1bh-header'
              className='bg-customOrange text-black rounded-lg'>
              <div className='flex gap-4'>
                <h5 className='font-semibold text-xl'>Season 1</h5>
                <p className=' text-xl'>10 Episodes</p>
                <p className='flex items-center  text-xl'>
                  <StarIcon /> 8
                </p>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <AccordionItem />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2bh-content'
              id='panel2bh-header'
              className='bg-customOrange text-black rounded-lg'>
              <div className='flex gap-4'>
                <h5 className='font-semibold text-xl'>Season 1</h5>
                <p className=' text-xl'>10 Episodes</p>
                <p className='flex items-center  text-xl'>
                  <StarIcon /> 8
                </p>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <AccordionItem />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel3bh-content'
              id='panel3bh-header'
              className='bg-customOrange text-black rounded-lg'>
              <div className='flex gap-4'>
                <h5 className='font-semibold text-xl'>Season 1</h5>
                <p className=' text-xl'>10 Episodes</p>
                <p className='flex items-center  text-xl'>
                  <StarIcon /> 8
                </p>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <AccordionItem />
            </AccordionDetails>
          </Accordion>
        </div>
      </Wrapper>
    </section>
  );
};

export default Seasons;
