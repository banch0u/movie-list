import React from 'react';

const Score = ({ score, bg }) => {
  const determineColor = (score) => {
    if (score >= 0 && score < 40) {
      return 'red';
    } else if (score >= 40 && score <= 70) {
      return 'yellow';
    } else if (score > 70 && score <= 100) {
      return 'green';
    } else {
      return 'black ';
    }
  };
  return (
    <div
      className='w-6 h-6 rounded-full inline-flex items-center justify-center text-sm font-bold mr-2'
      style={{ backgroundColor: `${bg ? '#1C1C1C' : '#000000'}` }}>
      <span style={{ color: `${determineColor(score)}` }}>
        {Math.trunc(score)}
      </span>
    </div>
  );
};

export default Score;
