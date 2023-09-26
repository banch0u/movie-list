import React from 'react';

const Score = ({ score }) => {
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
    <div className='w-6 h-6 rounded-full bg-customGray inline-flex items-center justify-center text-sm font-bold mr-2'>
      <span style={{ color: `${determineColor(score)}` }}>{score}</span>
    </div>
  );
};

export default Score;
