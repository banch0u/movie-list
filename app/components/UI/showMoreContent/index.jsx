import React from 'react';
import ShowMoreText from 'react-show-more-text';

const ShowMoreContent = ({ children }) => {
  return (
    <ShowMoreText
      lines={4}
      more='Show more'
      less='Show less'
      className='content-css'
      anchorClass='no-underline cursor-pointer block text-center mt-1'
      expanded={false}
      truncatedEndingComponent={` `}>
      {children}
    </ShowMoreText>
  );
};

export default ShowMoreContent;
