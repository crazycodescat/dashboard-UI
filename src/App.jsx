import { useState } from 'react';
import { RiHomeSmileLine } from 'react-icons/ri';
import { MdChevronRight } from 'react-icons/md';
import { FaPaypal } from 'react-icons/fa';
import SideBarChips from './components/SideBarChips';
import ReportStrips from './components/ReportStrips';
import Candles from './components/Candles';
import SmallCard from './components/SmallCard';
import ProfitCandles from './components/ProfitCandles';
import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar';

function App() {
  const reportInfo = {
    valueType: 'Income',
    price: '$42,845',
  };
  return (
    <>
      {/* DASHBOARD UI */}
      <div className='relative'>
        <Header />
        <SideBar />

        {/* <SideBarChips LeftIcon={RiHomeSmileLine} RightIcon={MdChevronRight}>
          Dashboard
        </SideBarChips>
        <ReportStrips
          ReportIcon={FaPaypal}
          ReportValues={{
            valueType: 'Income',
            price: '$42,845',
          }}
          ReportAnalytics="+1.4k"
        ></ReportStrips>
        <Candles />
        <SmallCard />
        <ProfitCandles/> */}
      </div>
    </>
  );
}

export default App;
