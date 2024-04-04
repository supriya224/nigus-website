import React from 'react';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
import { FaHeadphones } from 'react-icons/fa';

function Contact() {
  return (
    <section className="container mx-auto w-auto my-9 ">
      <h3 className="text-3xl font-extrabold text-gray-700 text-center my-3">
        Contact US
      </h3>
      <div className="flex justify-between gap-20  w-full text-center">
        {/* first section */}
        <div className=" w-1/4 leading-9">
          <div>
            <p className=" bg-red-400 flex justify-center">
              <HiOutlineBuildingOffice size={50} />
            </p>
            <h3 className="text-3xl"> office location</h3>
            <p>Bangalore , India</p>
            <p>
              No.8, 20th Main Road, Koramanagala 5th Block, Bangalore-560095,
              Karnataka
            </p>
            <p>Opposite to HDFC/Federal Bank, Above Gocolors</p>
          </div>
          <div className="my-9">
            <h3>Chennai, india</h3>
            <p>
              No.3, 2nd floor, Antona apartments, Ayyavoo street, Shenoy Nagar,
              Chennai-600030, Tamilnadu
            </p>
          </div>
        </div>
        {/* second section */}
        <div className=" w-1/3">
          <p className=" bg-red-400 flex justify-center">
            <MdOutlineLocalPostOffice
              size={50}
              className=" text-center justify-center items-center"
            />
          </p>
          For sales and support
          <p>
            For any sales & support contact us at sales@nigussystems.com
            saravanaguptha@nigussystems.com India +91 98806 98312
          </p>
        </div>
        {/* third section */}
        <div className=" w-1/3 text-center">
          <p className=" bg-red-400 flex justify-center">
            <FaHeadphones size={50} className="text-blue-600" />
          </p>
          Global Presence
          <ul>
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
