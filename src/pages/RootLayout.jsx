import { Outlet } from 'react-router-dom';

import SideBar from '../components/sideBar/SideBar';

const RootLayout = () => {
  return (
    <>
      <div className="px-6 py-4 flex gap-6 text-white">
        <SideBar />
        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
