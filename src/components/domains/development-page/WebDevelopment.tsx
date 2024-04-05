import React from 'react';
import Slider from '../../core/slider/Slider';
import Flip from '../../core/Flip';
import Software from '../../core/ReuseComponent/Software';
// import Slider from '../../core/slider/Slider';

function WebDevelopment() {
  return (
    <section className="container mx-auto w-auto font-customFont ">
      {/* front page is here */}
      <div className="flex justify-between mt-12 w-full items-center">
        <div className="mt-32 mr-32 w-1/2">
          <h2 className="text-5xl font-extrabold">
            Revolutionizing Enterprise with Innovative Solutions
          </h2>
          <p className="leading-9 my-5 text-lg">
            Modernize the organization with innovative software solutions,
            applications and integrations
          </p>
        </div>
        <div>
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

      <div className="[perspective:1000px]">
        <h3 className="text-4xl text-center font-bold">
          Innovative IT Solutions
        </h3>
        <p className="text-xl">
          Utilize our software development expertise to seamlessly integrate
          business applications with new or existing systems, ensuring
          streamlined operations and enhanced efficiency.
        </p>
        <div className="flex flex-wrap justify-center gap-5 my-9">
          <div className="shadow-lg shadow-gray-200 rounded-xl  w-fit h-fit px-16 py-16 ">
            <img
              src="http://www.nigussystems.com/images/apps.png"
              alt=""
              width={100}
            />

            <h3>Web Development</h3>
          </div>
          <div className="shadow-lg shadow-gray-200 rounded-xl  w-fit h-fit px-16 py-16 ">
            <img
              src="http://www.nigussystems.com/images/reliablity.png"
              alt=""
              width={100}
              className="flex justify-center"
            />
            <h3 className="">Application Development</h3>
          </div>
          <div className="shadow-lg shadow-gray-200 rounded-xl  w-fit h-fit px-16 py-16 ">
            <img
              src="http://www.nigussystems.com/images/unified%20communications.png"
              alt=""
              width={100}
              className="flex justify-center"
            />
            <h3>Software Development</h3>
          </div>
          <div className="shadow-lg shadow-gray-200 rounded-xl  w-fit h-fit px-16 py-16 ">
            <img
              src="http://www.nigussystems.com/images/application-integration.png"
              alt=""
              width={100}
              className="flex justify-center"
            />
            <h3>AI/ML Development</h3>
          </div>
          <div className="shadow-lg shadow-gray-200 rounded-xl  w-fit h-fit px-16 py-16 ">
            {' '}
            <img
              src="http://www.nigussystems.com/images/call-center-solutions.png"
              alt=""
              width={100}
              className="flex justify-center"
            />{' '}
            <h3>System Integration</h3>
          </div>
          <div className="shadow-lg shadow-gray-200 rounded-xl  w-fit h-fit px-16 py-16 ">
            {' '}
            <img
              src="http://www.nigussystems.com/images/crm%20integration.png"
              alt=""
              width={100}
              className="flex justify-center"
            />
            <h3>CRM Integration</h3>
          </div>
          <div className="shadow-lg shadow-gray-200 rounded-xl  w-fit h-fit px-16 py-16 ">
            <img
              src="http://www.nigussystems.com/images/web-conferencing.png"
              alt=""
              width={100}
              className="flex justify-center"
            />
            <h3>Application Integration</h3>
          </div>
        </div>
      </div>
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
      <Flip />
      <Software />
    </section>
  );
}

export default WebDevelopment;
