/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { CiUser } from 'react-icons/ci';
import { BsHeadset } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto w-auto flex justify-between ">
        <div className="flex gap-9 items-center">
          <img
            className=""
            width={100}
            height={100}
            src="http://www.nigussystems.com/images/nigus-logo.png"
          />
          <ul className="flex justify-between gap-7 text-base font-extrabold">
            <Link to="/">
              <li>Services</li>
            </Link>

            <Link to="/solution">
              <li>Solution</li>
            </Link>

            <Link to="/industries">
              <li>Industries</li>
            </Link>

            <Link to="/aboutus">
              <li>About Us</li>
            </Link>

            <Link to="/contactus">
              <li>Contact Us</li>
            </Link>
          </ul>
          <h3>sales@nigussystems.com</h3>
          <p>+91 98806 98312</p>

          <button
            type="button"
            className="flex items-center text-white gap-2 bg-cyan-400 text-sm"
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
      </div>
    </header>
  );
}

export default Header;
