import Link from 'next/link';
import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Title = ({ children }: Props) => {
  return (
    <h3 className='text-3xl font-semibold hover:text-customOrange transition-all inline-block'>
      <Link href={''}>{children}</Link>
    </h3>
  );
};

export default Title;
