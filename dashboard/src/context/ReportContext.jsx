/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';

export const ReportContext = createContext();

const ReportReducer = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case 'ADD_REPORT':
      return [...action.payload];
    default:
      return state;
  }
};

const initialState = [
  {
    id: '',
    image_url: '',
    stock: '',
    price: '',
    size: '',
    sku: '',
    total_sales: '',
    design: '',
    sell_quantity: '',
    sell_price: '',
    sub_total: '',
    sell_invoice_no: '',
    unit_price: '',
    tax: '',
    tax_included_price: '',
  },
];

export const ReportProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ReportReducer, initialState);
  console.log(state);
  return (
    <ReportContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ReportContext.Provider>
  );
};
