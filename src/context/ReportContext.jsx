/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';

export const ReportContext = createContext();

const ReportReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_REPORT':
      return { ...state };
    default:
      return state;
  }
};

const initialState = {
  id: '',
  unit_price: '',
  item_tax: '',
  quantity: '',
  unit_price_inc_tax: '',
  invoice_no: '',
};

export const ReportProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ReportReducer, initialState);

  return (
    <ReportContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ReportContext.Provider>
  );
};
