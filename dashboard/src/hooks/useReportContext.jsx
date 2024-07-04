import { ReportContext } from '../context/ReportContext';
import { useContext } from 'react';

export const useReportContext = () => {
  const context = useContext(ReportContext);

  return context;
};
