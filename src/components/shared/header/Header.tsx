/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { CiUser } from 'react-icons/ci';
import { BsHeadset } from 'react-icons/bs';
// import Navbar from '../Navbar';
import NavBar from './NavBar';

interface NavLink {
  label: string;
  link: string;
}

export default function Header() {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [activeButton, setActiveButton] = useState('');

  const navlinks: NavLink[] = [
    {
      label: 'Services',
      link: '/',
    },
    {
      label: 'Solution',
      link: '/solution',
    },
    {
      label: 'Industries',
      link: '/industries',
    },
    {
      label: 'About us',
      link: '/about',
    },
    {
      label: 'Contact Us',
      link: '/contact',
    },
  ];

  const handleButtonClick = (label: string) => {
    setActiveButton(label);
    setMenu(false); // Close side menu if a link is clicked
  };

  return (
    <main className="">
      <div className="container mx-auto w-auto">
        <nav className="flex justify-between px-1 items-center py-1">
          <div className="flex items-center gap-5">
            <section className="flex items-center gap-2">
              {/* menu */}
              <FiMenu
                onClick={() => setMenu(true)}
                className="text-3xl cursor-pointer lg:hidden"
              />
              {/* logo */}
              <img
                src="http://www.nigussystems.com/images/nigus-logo.png"
                alt=""
                width={100}
                height={100}
                className="flex"
              />
            </section>
            {navlinks.map((link) => (
              <Link
                key={link.label}
                className={clsx(
                  'text-black lg:text-sm xl:text-base font-bold hover:text-blue-500',
                  activeButton === link.label &&
                    'text-blue-500 border-b border-blue-600 ',
                  'hidden lg:block xl:flex',
                )}
                to={link.link}
                onClick={() => handleButtonClick(link.label)}
              >
                {link.label}
              </Link>
            ))}
            <section className="text-xs flex justify-between xl:gap-9">
              <h3 className="mr-0.5 hidden text-[12px] lg:text-sm  lg:block">
                sales@nigussystems.com
              </h3>
              <p className="ml-1 text-[8px] lg:text-sm hidden lg:block">
                +91 98806 98312
              </p>

              <div className="hidden xl:flex lg:flex px-3 gap-2 lg:text-sm xl:gap-4">
                <button
                  type="button"
                  className="flex  px-3 items-center text-white bg-cyan-600 md:flex"
                >
                  <CiUser />
                  Sales
                </button>
                <button
                  type="button"
                  className="flex mx-1 px-3 items-center text-white bg-cyan-600"
                >
                  <BsHeadset />
                  Support
                </button>
              </div>
            </section>
          </div>

          {/* sidebar mobile menu */}
          <div
            className={clsx(
              'fixed h-full w-screen lg:hidden bg-black/20 backdrop-blur-sm top-0 right-0 left-0 -translate-x-full transition-all',
              isSideMenuOpen && 'translate-x-1',
            )}
          >
            <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
              <IoCloseOutline
                onClick={() => setMenu(false)}
                className="mt-0 mb-4 text-3xl cursor-pointer"
              />

              {navlinks.map((link) => (
                <Link
                  key={link.label}
                  className="font-bold"
                  to={link.link}
                  onClick={() => handleButtonClick(link.label)}
                >
                  {link.label}
                </Link>
              ))}
              <section className=" text-sm font-bold">
                <div className=" ">
                  <h3 className=" ">sales@nigussystems.com</h3>
                  <p className="">+91 98806 98312</p>
                  <button
                    type="button"
                    className="flex items-center text-white gap-2 bg-cyan-400"
                  >
                    <CiUser />
                    Sales
                  </button>
                  <button
                    type="button"
                    className="flex items-center text-white gap-2 bg-cyan-400 text-sm"
                  >
                    <BsHeadset />
                    Support
                  </button>
                </div>
              </section>
            </section>
          </div>
        </nav>
      </div>
      <div className="border-b" />
      <NavBar />
    </main>
  );
}
