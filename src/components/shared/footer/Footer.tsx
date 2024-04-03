/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BiLogoLinkedin } from 'react-icons/bi';

function Footer() {
  return (
    <div className="flex items-end w-full min-h-screen bg-white">
      <footer className="w-full text-gray-700 bg-gray-100 body-font">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
              <img
                className=""
                width={120}
                height={100}
                src="http://www.nigussystems.com/images/nigus-logo.png"
                alt=""
              />
            </a>
            <h2 className="mt-2 text-sm text-gray-500">
              Nigus Systems Private Limited
            </h2>
            <div>
              <p>
                We work across 24 x 7 to help you run your business without any
                hassle.
              </p>
              <span className="bg-blue-400">
                <BiLogoLinkedin
                  className="bg-blue-900 text-white p-3 rounded-xl"
                  size={40}
                />
              </span>
              <p>© 2024 Nigus Systems Pvt Ltd</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
