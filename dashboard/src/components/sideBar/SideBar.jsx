import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoChevronBackSharp } from 'react-icons/io5';
import { RiHomeSmileLine } from 'react-icons/ri';
import { MdChevronRight } from 'react-icons/md';
import { FaCartShopping } from 'react-icons/fa6';
import { GiArchiveRegister } from 'react-icons/gi';
import { MdDashboard } from 'react-icons/md';

// COMPONENTS
import SideBarChips from '../SideBarChips';

const SideBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const chevronRight = <MdChevronRight />;
  const sideBarMenu = [
    {
      leftIcon: <FaCartShopping />,
      name: 'eCommerce',
      rightIcon: chevronRight,
      notificationBadge: false,
      path: '/ecommerce',
      subMenu: [
        { subMenuName: 'item sale', path: '/reports/items-sale' },
        { subMenuName: 'inventory', path: '/reports/inventory' },
        {
          subMenuName: 'purchase forecast',
          path: '/reports/purchase-forecast',
        },
        {
          subMenuName: 'daily sale',
          path: '/reports/daily-sale',
        },
      ],
    },
    {
      leftIcon: <GiArchiveRegister />,
      name: 'Reports',
      rightIcon: chevronRight,
      notificationBadge: false,
      path: '/reports/',
      subMenu: [
        { subMenuName: 'item sale', path: '/reports/items-sale' },
        { subMenuName: 'inventory', path: '/reports/inventory' },
        {
          subMenuName: 'purchase forecast',
          path: '/reports/purchase-forecast',
        },
        {
          subMenuName: 'daily sale',
          path: '/reports/daily-sale',
        },
      ],
    },
    {
      leftIcon: <GiArchiveRegister />,
      name: 'Products',
      rightIcon: chevronRight,
      notificationBadge: false,
      path: '/products',
      subMenu: [
        { subMenuName: 'item sale', path: '/reports/items-sale' },
        { subMenuName: 'inventory', path: '/reports/inventory' },
        {
          subMenuName: 'purchase forecast',
          path: '/reports/purchase-forecast',
        },
        {
          subMenuName: 'daily sale',
          path: '/reports/daily-sale',
        },
      ],
    },
    {
      leftIcon: <GiArchiveRegister />,
      name: 'Customers',
      rightIcon: chevronRight,
      notificationBadge: false,
      path: '/customers',
      subMenu: [
        { subMenuName: 'item sale', path: '/reports/items-sale' },
        { subMenuName: 'inventory', path: '/reports/inventory' },
        {
          subMenuName: 'purchase forecast',
          path: '/reports/purchase-forecast',
        },
        {
          subMenuName: 'daily sale',
          path: '/reports/daily-sale',
        },
      ],
    },
  ];

  const sideBarToggler = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  return (
    <div
      className={`${
        isSideBarOpen ? 'absolute -left-56' : ''
      } text-white bg-primary05 p-3 max-w-[300px] h-screen rounded-md`}
    >
      {/* SIDEBAR */}
      <div className="flex flex-col gap-12">
        <div className="flex flex-col justify-between items-center gap-6 relative w-52">
          <div className="p-1 cursor-pointer ">
            <img
              className="max-w-14"
              src="https://res.cloudinary.com/ddx7todbr/image/upload/v1719812979/dashboard-UI/qs94jf9sz9hnoffppvgz.png"
              alt="Profile image"
            />
          </div>
          <button className="text-sm font-semibold rounded-lg text-black bg-white px-2 py-1">
            PROFILE
          </button>
          <button
            onClick={sideBarToggler}
            className="cursor-pointer w-6 h-6 rounded-full bg-white flex justify-center items-center absolute top-2 -right-5"
          >
            <IoChevronBackSharp className="text-black text-[14px] " />
          </button>
        </div>
        <Link to="/">
          <div className="flex gap-2 items-center">
            <MdDashboard />
            <SideBarChips
              LeftIcon={RiHomeSmileLine}
              // RightIcon={chevronRight}
              notificationBadge={false}
              sideBarKey={890}
            >
              Dashboard
            </SideBarChips>
          </div>
        </Link>
      </div>
      {/* APPS AND PAGES */}
      <div className="mt-4">
        <p className=" text-[10px] font-semibold text-slate-500">
          APPS AND PAGES
        </p>
        {/* APPS AND PAGES WRAPPER */}
        <div className="flex flex-col gap-1">
          {sideBarMenu.map((chips, i) => {
            return (
              <div key={i}>
                <SideBarChips
                  LeftIcon={chips.leftIcon}
                  RightIcon={chips.rightIcon}
                  notificationBadge={false}
                  sideBarKey={i}
                  subMenu={chips.subMenu}
                >
                  {chips.name}
                </SideBarChips>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
