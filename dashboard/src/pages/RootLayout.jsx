import { Outlet } from 'react-router-dom';

import SideBar from '../components/sideBar/SideBar';

const RootLayout = () => {
  return (
    <>
      <div className="px-6 py-4 flex gap-10 text-white">
        <div className="relative">
          <SideBar />
        </div>
        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
