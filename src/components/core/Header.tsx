/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
/** @format */

import React, { useState } from 'react';

import { FiMenu } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { CiUser } from 'react-icons/ci';
import { BsHeadset } from 'react-icons/bs';

export default function Header() {
  const [isSideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    {
      labe: 'Services',
      link: '/',
    },
    {
      labe: 'Solution',
      link: '/solution',
    },
    {
      labe: 'Industries',
      link: '/industries',
    },
    {
      labe: 'About us',
      link: '/about',
    },
    {
      labe: 'Contact Us',
      link: '/contact',
    },
  ];

  return (
    <main className="sm:bg-red-400 md:bg-purple-300 lg:to-blue-300 xl:bg-yellow-300">
      <div className="container mx-auto w-auto">
        <nav className="flex justify-between px-1 items-center py-1 ">
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
            {navlinks.map((d, i) => (
              <Link
                key={i}
                className="hidden lg:block xl:flex text-black font-bold hover:text-blue-400"
                to={d.link}
              >
                {d.labe}
              </Link>
            ))}
            <section className="text-sm flex justify-between xl:gap-9">
              <h3 className="mr-0.5 text-[12px] lg:text-base hidden lg:block">
                sales@nigussystems.com
              </h3>
              <p className="ml-2 text-[12px] lg:text-base hidden lg:block">
                +91 98806 98312
              </p>

              <div className="flex px-3 gap-2 lg:text-base xl:gap-4 ">
                <button
                  type="button"
                  className={`flex items-center text-white bg-cyan-600 md:flex `}
                >
                  <CiUser />
                  Sales
                </button>
                <button
                  type="button"
                  className="flex items-center text-white  bg-cyan-600"
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
              ' fixed h-full w-screen lg:hidden bg-black/20  backdrop-blur-sm top-0 right-0 left-0  -translate-x-full  transition-all ',
              isSideMenuOpen && 'translate-x-1',
            )}
          >
            <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
              <IoCloseOutline
                onClick={() => setMenu(false)}
                className="mt-0 mb-4 text-3xl cursor-pointer"
              />

              {navlinks.map((d, i) => (
                <Link key={i} className="font-bold" to={d.link}>
                  {d.labe}
                </Link>
              ))}
              <section className=" text-sm font-bold">
                <div className=" ">
                  <h3 className=" ">sales@nigussystems.com</h3>
                  <p className="">+91 98806 98312</p>
                  <button
                    type="button"
                    className={`flex items-center text-white gap-2 bg-cyan-400 `}
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

          {/* last section */}
        </nav>
      </div>
      <div className="border-b  " />
    </main>
  );
}