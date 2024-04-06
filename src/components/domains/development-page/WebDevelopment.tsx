import React from 'react';
import Slider from '../../core/slider/Slider';

function WebDevelopment() {
  return (
    <section className="container mx-auto w-auto font-customFont bg-cyan-800 sm:bg-red-500 md:bg-purple-900 lg:bg-yellow-400 xl:bg-blue-900 ">
      {/* front page is here */}
      <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:text-left xl:text-left">
        <div className="md:mt-9 xl:mt-32">
          <h2 className="text-3xl text-center md:text-left xl:text-5xl xl:text-left font-extrabold">
            Revolutionizing Enterprise with Innovative Solutions
          </h2>
          <p className="leading-9 text-center  md:text-left xl:text-left my-5 text-lg">
            Modernize the organization with innovative software solutions,
            applications and integrations
          </p>
        </div>
        <div className="px-5 md:mt-9">
          <img
            width={600}
            height={100}
            src="http://www.nigussystems.com/images/integration-logos.gif"
            alt=""
          />
        </div>
      </div>
      {/* client slider page */}

      <div>
        <h4 className="text-center text-3xl">Our clients</h4>
        <div>
          <Slider />
        </div>
      </div>

      <div className="mx-5">
        <h3 className="text-4xl my-6 text-center font-bold">
          Innovative IT Solutions
        </h3>
        <p className="text-xl">
          Utilize our software development expertise to seamlessly integrate
          business applications with new or existing systems, ensuring
          streamlined operations and enhanced efficiency.
        </p>
        <div className="flex flex-wrap justify-center gap-5 my-9">
          <div className="shadow-lg shadow-gray-200 rounded-xl  w-fit h-fit px-16 py-16 ">
            <img src="http://www.nigussystems.com/images/apps.png" alt="" />

            <h3>Web Development</h3>
          </div>
          <div className="shadow-lg shadow-gray-200 rounded-xl  w-fit h-fit px-16 py-16 ">
            <img
              src="http://www.nigussystems.com/images/reliablity.png"
              alt=""
              className="flex justify-center"
            />
            <h3 className="">Application Development</h3>
          </div>
          <div className="shadow-lg shadow-gray-200 rounded-xl  w-fit h-fit px-16 py-16 ">
            <img
              src="http://www.nigussystems.com/images/unified%20communications.png"
              alt=""
              className="flex justify-center"
            />
            <h3>Software Development</h3>
          </div>
          <div className="shadow-lg shadow-gray-200 rounded-xl  w-fit h-fit px-16 py-16 ">
            <img
              src="http://www.nigussystems.com/images/application-integration.png"
              alt=""
              className="flex justify-center"
            />
            <h3>AI/ML Development</h3>
          </div>
          <div className="shadow-lg shadow-gray-200 rounded-xl  w-fit h-fit px-16 py-16 ">
            {' '}
            <img
              src="http://www.nigussystems.com/images/call-center-solutions.png"
              alt=""
              className="flex justify-center"
            />{' '}
            <h3>System Integration</h3>
          </div>
          <div className="shadow-lg shadow-gray-200 rounded-xl  w-fit h-fit px-16 py-16 ">
            {' '}
            <img
              src="http://www.nigussystems.com/images/crm%20integration.png"
              alt=""
              className="flex justify-center"
            />
            <h3>CRM Integration</h3>
          </div>
          <div className="shadow-lg shadow-gray-200 rounded-xl  w-fit h-fit px-16 py-16 ">
            <img
              src="http://www.nigussystems.com/images/web-conferencing.png"
              alt=""
              className="flex justify-center"
            />
            <h3>Application Integration</h3>
          </div>
        </div>
      </div>
      {/* last items */}
      <div>
        <div className="flex justify-between mt-5 w-full items-center font-customFont">
          <div className="mt-5 mr-32 w-1/2">
            <h2 className="">
              Our services are designed to help businesses establish a robust
              online presence in the digital age. We empower our clients to
              create impactful websites that effectively engage users and
              provide seamless experiences. Whether it's an enterprise software,
              a corporate website, or a web application, we leverage our
              creativity and technical expertise to develop responsive,
              user-friendly.
            </h2>
            <p className="leading-9 my-5">
              Web Development Application Development Software Development AI/ML
              Development System Integration
            </p>
          </div>
          <div>
            <img
              width={600}
              height={100}
              src="http://www.nigussystems.com/images/business-conferencing.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <Flip />
      <Software /> */}
    </section>
  );
}

export default WebDevelopment;
