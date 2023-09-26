'use client';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';

const CustomProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default CustomProvider;
