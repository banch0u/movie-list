import React, { useState, useEffect } from 'react';

const ShowMoreContent = ({ children, id }) => {
  const [showMore, setShowMore] = useState('line-clamp-4');
  const [line, setLine] = useState(0);

  const toggleShowMore = () => {
    showMore === 'line-clamp-4' ? setShowMore('') : setShowMore('line-clamp-4');
  };
  useEffect(() => {
    const element = document.getElementById(id);
    let numberOfLines = element.clientHeight / 24;
    setLine(numberOfLines);
  }, []);

  return (
    <>
      <p className={`font-light ${showMore}`} id={id}>
        {children}
      </p>
      <div className='flex justify-center'>
        {line > 3 ? (
          <button
            className='hover:text-customOrange transition-all'
            onClick={() => toggleShowMore()}>
            {showMore === '' ? 'Show Less' : ' Show more'}
          </button>
        ) : null}
      </div>
    </>
  );
};

export default ShowMoreContent;
