import React from 'react';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
import { FaHeadphones } from 'react-icons/fa';

function Contact() {
  return (
    <section className="container mx-52 w-auto my-9">
      <h3 className="text-3xl font-extrabold text-gray-700 text-center my-9">
        Contact US
      </h3>
      <div className="flex justify-between gap-20  w-full ">
        {/* first section */}
        <div className=" w-1/3 leading-9 text-xl text-center">
          <div>
            <p className="flex justify-center">
              <HiOutlineBuildingOffice size={50} className="text-blue-500" />
            </p>
            <h3 className="text-3xl my-5"> Office locations</h3>
            <p className="text-gray-600 font-extrabold  text-lg">
              Bangalore , India
            </p>
            <p className="text-lg my-3 text-gray-400">
              No.8, 20th Main Road, Koramanagala 5th Block, Bangalore-560095,
              Karnataka
            </p>
            <p className="text-lg my-4 text-gray-400">
              Opposite to HDFC/Federal Bank, Above Gocolors
            </p>
          </div>
          <div className="my-9">
            <h3 className="text-gray-600 font-extrabold  text-xl">
              Chennai, india
            </h3>
            <p className="text-gray-400">
              No.3, 2nd floor, Antona apartments, Ayyavoo street, Shenoy Nagar,
              Chennai-600030, Tamilnadu
            </p>
          </div>
        </div>
        {/* second section */}
        <div className=" w-1/3 text-lg">
          <p className="  flex justify-center">
            <MdOutlineLocalPostOffice
              size={50}
              className=" text-center text-blue-500"
            />
          </p>
          <h3 className="text-xl font-extrabold  text-center">
            {' '}
            For sales and support
          </h3>
          <p className="text-base text-gray-400">
            For any sales & support contact us at
            <ul className="my-3 leading-10 items-center mt-4 mx-8">
              <li className="items-center text-lg my-2">
                <span className="">&#x2022;</span>
                sales@nigussystems.com
              </li>
              <li className="items-center text-lg my-2">
                <span className="">&#x2022;</span>
                saravanaguptha@nigussystems.com
              </li>
              <li className="items-center text-lg">
                <span className="">&#x2022;</span>
                India +91 98806 98312
              </li>
            </ul>
          </p>
        </div>
        {/*  &#10003;/}
        {/* third section */}
        <div className=" w-1/3 text-center leading-9 font-bold">
          <p className="  flex justify-center">
            <FaHeadphones size={50} className="text-blue-600" />
          </p>
          <h3 className="text-xl"> Global Presence</h3>

          <ul className="text-gray-500 leading-10 text-xl my-9">
            <li>USA</li>
            <li>Europe</li>
            <li>Australia</li>
            <li>Middle East</li>
            <li>India</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
