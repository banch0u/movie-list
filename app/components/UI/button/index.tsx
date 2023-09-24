import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  rightRound?: boolean;
}

const Button = ({ children, rightRound = false }: Props) => {
  return (
    <>
      {!rightRound ? (
        <button className='py-2 px-9 bg-customOrange text-black font-semibold rounded-lg'>
          {children}
        </button>
      ) : (
        <button className='py-4 px-9 bg-customOrange text-black font-semibold rounded-r-lg'>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
