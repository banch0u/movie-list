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
    <>
      {score ? (
        <div
          className='w-6 h-6 rounded-full inline-flex items-center justify-center text-sm font-bold mr-2'
          style={{ backgroundColor: `${bg ? '#1F1F1F' : '#000000'}` }}>
          <span style={{ color: `${determineColor(score)}` }}>
            {Math.trunc(score)}
          </span>
        </div>
      ) : (
        <div
          className='w-6 h-6 rounded-full inline-flex items-center justify-center text-sm font-bold animate-pulse'
          style={{
            backgroundColor: `${bg ? '#1F1F1F' : '#000000'}`,
            aspectRatio: 1 / 1,
          }}></div>
      )}
    </>
  );
};

export default Score;
