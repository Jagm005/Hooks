import { createContext, useContext } from 'react';

export const ColorContext = createContext('blue');

export const ColorProvider = ({ children, color }) => (
  <ColorContext.Provider value={color}>
    {children}
  </ColorContext.Provider>
);

export const useColor = () => useContext(ColorContext);