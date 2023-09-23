import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Wrapper = ({ children }: Props) => {
  return <div className='w-[90%] m-auto'>{children}</div>;
};

export default Wrapper;
