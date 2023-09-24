import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Wrapper = ({ children }: Props) => {
  return <div className='max-w-[1440px] w-[75%] m-auto'>{children}</div>;
};

export default Wrapper;
