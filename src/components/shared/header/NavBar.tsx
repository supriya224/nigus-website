/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
// import { FiMenu } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoCloseOutline } from 'react-icons/io5';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
// import {  } from 'react-icons/bs';

interface NavLink {
  label: string;
  link: string;
}

export default function NavBar() {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [activeButton, setActiveButton] = useState('');

  const navlinks: NavLink[] = [
    {
      label: 'Web development',
      link: '/',
    },
    {
      label: ' Application Development',
      link: '/application-development',
    },
    {
      label: ' Software Development',
      link: '/software-development',
    },
    {
      label: 'AI/ML Development',
      link: '/al-ml-development',
    },
    {
      label: '  System Integration',
      link: '/system-development',
    },
  ];

  const handleButtonClick = (label: string) => {
    setActiveButton(label);
    setMenu(false); // Close side menu if a link is clicked
  };

  return (
    <main className=" ">
      <div className="container mx-auto w-auto">
        <nav className="flex justify-between px-1 items-center py-1">
          <div className="flex items-center gap-5 relative">
            <section className="flex items-center justify-end gap-2">
              {/* menu */}
              <BsThreeDotsVertical
                onClick={() => setMenu(true)}
                className="text-3xl cursor-pointer absolute top-[-45px] right-[-350px]  lg:hidden"
              />
            </section>
            {navlinks.map((link) => (
              <Link
                key={link.label}
                className={clsx(
                  'text-black font-bold hover:text-blue-500',
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
          </div>

          {/* sidebar mobile menu */}
          <div
            className={clsx(
              'fixed h-full w-screen lg:hidden bg-black/20 backdrop-blur-sm top-0 right-0 left-0 -translate-y-full transition-all duration-300',
              isSideMenuOpen && 'translate-y-2',
            )}
          >
            <section className="text-black bg-white flex-col absolute left-0 top-0 h-fit p-8 gap-8 z-50 w-full flex">
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
            </section>
          </div>
        </nav>
      </div>
    </main>
  );
}
