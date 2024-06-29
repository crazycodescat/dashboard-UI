import { Link } from 'react-router-dom';
import { IoChevronBackSharp } from 'react-icons/io5';
import { RiHomeSmileLine } from 'react-icons/ri';
import { MdChevronRight } from 'react-icons/md';
import { FaCartShopping } from 'react-icons/fa6';
import { GiArchiveRegister } from 'react-icons/gi';

// COMPONENTS
import SideBarChips from '../SideBarChips';

const SideBar = () => {
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
      name: 'Report',
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

  return (
    <div className="text-white bg-primary05 p-3 max-w-[300px] h-screen rounded-md">
      {/* SIDEBAR */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center gap-2 relative w-52">
          <p className="text-xl font-semibold">SNEAT</p>
          <div className="p-1 cursor-pointer ">
            <img
              className="max-w-8"
              src="src/assets/images/9440461 1.png"
              alt=""
            />
          </div>
          <button className="cursor-pointer outline outline-4 outline-[#f6f5fa] w-4 h-4 rounded-full bg-purple-400 flex justify-center items-center absolute top-1 -right-5">
            <IoChevronBackSharp className="text-white text-[14px] " />
          </button>
        </div>
        <Link to="/">
          <SideBarChips
            LeftIcon={RiHomeSmileLine}
            RightIcon={chevronRight}
            notificationBadge={true}
            sideBarKey={890}
          >
            Dashboard
          </SideBarChips>
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
