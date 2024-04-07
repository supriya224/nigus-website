/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-extraneous-dependencies */
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
import { FaHeadphones } from 'react-icons/fa';

function Contact() {
  return (
    <section className="container mx-auto w-auto font-customFont">
      <div>
        <h3 className="text-3xl xl:text-4xl font-extrabold text-gray-900 text-center xl:my-9">
          Contact US
        </h3>
        <div className="gap-9 grid grid-cols-1 px-8 sm:px-32 lg:grid-cols-2 xl:my-9 xl:grid-cols-3 w-full">
          {/* first section */}
          <div className="leading-9 text-xl text-center">
            <div>
              <p className="flex justify-center">
                <HiOutlineBuildingOffice
                  size={50}
                  className="text-blue-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-blue-500 duration-300"
                />
              </p>
              <h3 className="text-xl font-extrabold mb-3 text-center">
                Office locations
              </h3>
              <p className="text-gray-600 font-extrabold text-lg">
                Bangalore, India
              </p>
              <p className="text-base xl:text-lg my-3 text-gray-400">
                No.8, 20th Main Road, Koramanagala 5th Block, Bangalore-560095,
                Karnataka
              </p>
              <p className="text-base xl:text-lg my-4 text-gray-400">
                Opposite to HDFC/Federal Bank, Above Gocolors
              </p>
            </div>
            <div className="my-9">
              <h3 className="text-gray-600 font-extrabold mb-3 text-xl">
                Chennai, India
              </h3>
              <p className="text-gray-400 text-base xl:text-lg">
                No.3, 2nd floor, Antona apartments, Ayyavoo street, Shenoy
                Nagar, Chennai-600030, Tamilnadu
              </p>
            </div>
          </div>
          {/* second section */}
          <div className="leading-9 text-xl text-center font-bold my-5">
            <p className="flex justify-center">
              <MdOutlineLocalPostOffice
                size={50}
                className="text-center text-blue-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-blue-500 duration-300"
              />
            </p>
            <h3 className="text-xl mb-3 font-extrabold text-center">
              For sales and support
            </h3>
            <p className="text-base text-gray-400">
              For any sales & support contact us at
              <ul className="my-3 items-center">
                <li className="items-left text-base my-2">
                  <span>&#x2022;</span>
                  sales@nigussystems.com
                </li>
                <li className="items-center text-base my-2">
                  <span>&#x2022;</span>
                  saravanaguptha@nigussystems.com
                </li>
                <li className="items-center text-base">
                  <span>&#x2022;</span>
                  India +91 98806 98312
                </li>
              </ul>
            </p>
          </div>
          <div className="text-center leading-9 font-bold">
            <p className="flex justify-center">
              <FaHeadphones
                size={50}
                className="text-blue-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-blue-500 duration-300"
              />
            </p>
            <h3 className="text-xl">Global Presence</h3>

            <ul className="text-gray-500 leading-10 text-xl my-9">
              <li>USA</li>
              <li>Europe</li>
              <li>Australia</li>
              <li>Middle East</li>
              <li>India</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
