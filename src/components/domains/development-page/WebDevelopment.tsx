import React from 'react';
// import Slider from '../../core/slider/Slider';

function WebDevelopment() {
  return (
    <section className="container mx-auto w-auto h-fit">
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
      <div className="bg-blue-900">
        <h4 className="text-white">Our clients</h4>
        {/* <Slider /> */}
      </div>
      {/* <div>
        <div>
          Future-Ready Solutions: Transforming Your Business With Innovative
          Software Integrate any business application with new or existing
          systems
        </div>
        <div>Our Clients</div>
        <div>Our services are designed to h</div>
      </div> */}
      <div>
        <h3>
          Future-Ready Solutions: Transforming Your Business With Innovative
          Software Integrate any business application with new or existing
          systems
        </h3>
        <div className="flex flex-wrap justify-center gap-20">
          <img src="http://www.nigussystems.com/images/apps.png" alt="" />
          <img
            src="http://www.nigussystems.com/images/crm%20integration.png"
            alt=""
          />
          <img
            src="http://www.nigussystems.com/images/unified%20communications.png"
            alt=""
          />
          <img
            src="http://www.nigussystems.com/images/application-integration.png"
            alt=""
          />
          <img
            src="http://www.nigussystems.com/images/call-center-solutions.png"
            alt=""
          />
          <img
            src="http://www.nigussystems.com/images/crm%20integration.png"
            alt=""
          />
          <img
            src="http://www.nigussystems.com/images/web-conferencing.png"
            alt=""
          />{' '}
        </div>
      </div>
      <div>
        <div className="flex justify-between mt-12 w-full items-center">
          <div className="mt-32 mr-32 w-1/2">
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
    </section>
  );
}

export default WebDevelopment;
