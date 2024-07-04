// import { useState } from 'react';
// import { RiHomeSmileLine } from 'react-icons/ri';
// import { MdChevronRight } from 'react-icons/md';
// import { FaPaypal } from 'react-icons/fa';
// import SideBarChips from './components/SideBarChips';
// import ReportStrips from './components/ReportStrips';
// import Candles from './components/Candles';
// import SmallCard from './components/SmallCard';
// import ProfitCandles from './components/ProfitCandles';
// import Header from './components/header/Header';
// import SideBar from './components/sideBar/SideBar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/main/Dashboard';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import Reports from './pages/main/Reports';
import Customers from './pages/main/Customers';
import Ecommerce from './pages/main/Ecommerce';
import Products from './pages/main/Products';
import { ReportProvider } from './context/ReportContext';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: '/reports/:reportsParams',
        element: <Reports />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/customers',
        element: <Customers />,
      },
      {
        path: '/ecommerce',
        element: <Ecommerce />,
      },
    ],
  },
]);

function App() {
  return (
    <ReportProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </ReportProvider>
  );
}

export default App;

//  <>
//       DASHBOARD UI
//       <div className="relative">
//         <Header />
//         <SideBar />

//         <SideBarChips LeftIcon={RiHomeSmileLine} RightIcon={MdChevronRight}>
//           Dashboard
//         </SideBarChips>
//         <ReportStrips
//           ReportIcon={FaPaypal}
//           ReportValues={{
//             valueType: 'Income',
//             price: '$42,845',
//           }}
//           ReportAnalytics="+1.4k"
//         ></ReportStrips>
//         <Candles />
//         <SmallCard />
//         <ProfitCandles/>
//       </div>
//     </>

// products , customer,
