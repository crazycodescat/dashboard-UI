import { SellsContext } from '../context/SellsContext';
import { useContext } from 'react';

const useSellsContext = () => {
  const context = useContext(SellsContext);

  if (!context) {
    throw new Error(
      'useLocationContext must be used within a LocationProvider'
    );
  }

  return context;
};

export default useSellsContext;
