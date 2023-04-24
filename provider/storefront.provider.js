'use client';
import React from 'react';

export const StorefrontContext = React.createContext();

export const StorefrontProvider = ({ children }) => {
  return (
    <StorefrontContext.Provider value={{}}>
      {children}
    </StorefrontContext.Provider>
  );
};
