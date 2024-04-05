/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EllipsisVertical, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="container w-full">
        <div className="">
          <ul className="hidden md:flex my-3 gap-9 ml-72 font-extrabold">
            <Link to="/">
              <li>Web Development </li>
            </Link>
            <Link to="/application-development">
              <li>Application Development </li>
            </Link>
            <Link to="/software-development">
              <li>Software Development </li>
            </Link>
            <Link to="/al-ml-development">
              <li>AI/ML Development </li>
            </Link>
            <Link to="/system-development">
              <li>System Integration </li>
            </Link>
          </ul>
        </div>
        <div className="md:hidden container mx-6 my-6">
          <button type="button" onClick={toggleNavbar} className=" relative">
            {isOpen ? (
              <X className="absolute bottom-[4rem] left-[25rem]" />
            ) : (
              <EllipsisVertical className="absolute bottom-[4rem] left-[25rem]" />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className=" bg-black text-white scale-75">
          <ul className="my-3 gap-9 ml-72 font-extrabold">
            <Link to="/">
              <li>Web Development </li>
            </Link>
            <Link to="/application-development">
              <li>Application Development </li>
            </Link>
            <Link to="/software-development">
              <li>Software Development </li>
            </Link>
            <Link to="/al-ml-development">
              <li>AI/ML Development </li>
            </Link>
            <Link to="/system-development">
              <li>System Integration </li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
