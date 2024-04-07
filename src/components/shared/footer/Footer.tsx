/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BiLogoLinkedin } from 'react-icons/bi';
import Logo from '../../../assests/nigus-logo.png';

function Footer() {
  return (
    <div className="flex items-end w-full bg-white font-customFont">
      <footer className="w-full text-gray-700 bg-gray-100 body-font">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
              <img
                className=""
                width={120}
                height={100}
                src={Logo}
                alt=""
                loading="lazy"
              />
            </a>
            <h2 className="mt-2 text-lg  font-bold">
              Nigus Systems Private Limited
            </h2>
            <div>
              <p className="text-lg">
                We work across 24 x 7 to help you run your business without any
                hassle.
              </p>
              <span className="bg-blue-400">
                <BiLogoLinkedin
                  className="bg-blue-900 text-white p-3 rounded-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300"
                  size={40}
                />
              </span>
              <p className="text-sm my-4 text-gray-500">
                © 2024 Nigus Systems Pvt Ltd
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
