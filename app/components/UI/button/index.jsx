import React from 'react';

const Button = ({ children, round = 'true' }) => {
  return (
    <>
      {round === 'true' ? (
        <button className='py-2 px-9 bg-customOrange hover:opacity-75 transition-all text-black font-semibold rounded-lg'>
          {children}
        </button>
      ) : null}
      {round === 'right' ? (
        <button className='py-4 px-9 bg-customOrange hover:opacity-75 transition-all text-black font-semibold rounded-r-lg'>
          {children}
        </button>
      ) : null}
      {round === 'left' ? (
        <button className='py-4 px-9 bg-customOrange hover:opacity-75 transition-all text-black font-semibold rounded-l-lg'>
          {children}
        </button>
      ) : null}
      {round === 'false' ? (
        <button className='py-4 px-9 bg-customOrange hover:opacity-75 transition-all text-black font-semibold'>
          {children}
        </button>
      ) : null}
    </>
  );
};

export default Button;
