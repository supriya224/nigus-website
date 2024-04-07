import React from 'react';
import Soft from '../../../assests/software1.png';
import about from '../../../assests/about3.png';
import app from '../../../assests/appApp.png';
import application from '../../../assests/application2.png';

function About() {
  return (
    <section>
      <section className="container mx-auto w-auto ">
        <section className="mx-auto my-4 font-customFont ">
          {/* Montserrat", serif */}
          <h3 className="px-9 my-5 text-4xl text-gray-500 text-center font-extrabold">
            About us
          </h3>
          <p className="leading-7 px-5 my-5 text-center text-lg  text-gray-400">
            At Nigus Systems, we are passionate about leveraging cutting-edge
            technologies to create innovative solutions that drive business
            success. With a focus on excellence and customer satisfaction, our
            team of experts is dedicated to delivering high-quality products and
            services tailored to meet your specific needs. Partner with us and
            experience the difference of reliable, scalable, and future-ready
            solutions.
          </p>
          {/* grid component */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-9">
            <div className="mx-12 xl:mx-32 my-1 ">
              <div className="w-fit flex justify-center rounded-xl shadow-lg shadow-gray-400">
                <img
                  src={application}
                  alt=""
                  className="rounded-xl w-fit  transform transition duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl  font-bold my-2">
                Customer-Centric Solutions
              </h3>
              <p className="leading-7 text-lg ">
                {' '}
                Experience an intuitive and user-friendly interface tailored to
                meet the needs of your team. Our software prioritizes a seamless
                user experience, reducing learning curves and optimizing
                productivity.
              </p>
            </div>
            <div className="mx-12 xl:mx-32 my-1 ">
              <div className="w-fit flex justify-center rounded-xl shadow-lg shadow-gray-400  my-2">
                <img
                  src={Soft}
                  alt=""
                  loading="lazy"
                  className="rounded-xl w-full  transform transition duration-500 hover:scale-110"
                />
              </div>

              <h3 className="text-xl   font-bold">
                Scalability and Flexibility
              </h3>
              <p className="leading-7 text-lg">
                Grow your business without constraints. Our software solutions
                offer scalability and flexibility, accommodating the evolving
                demands of your organization. Scale up effortlessly as your
                requirements change.
              </p>
            </div>

            <div className="mx-12 xl:mx-32 my-1 ">
              <div className="w-fit  flex justify-center rounded-xl shadow-lg shadow-gray-400">
                <img
                  src={about}
                  alt=""
                  loading="lazy"
                  className="rounded-xl  transform transition duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold my-2">Innovative Technology</h3>
              <p className="leading-7 text-lg ">
                {' '}
                Embrace cutting-edge technology with our software solutions,
                ensuring your business stays ahead in an ever-evolving digital
                landscape. Benefit from features designed to enhance efficiency
                and adaptability.
              </p>
            </div>

            <div className="mx-12 xl:mx-32 my-1 ">
              <div className=" w-fit flex justify-center rounded-xl shadow-lg shadow-gray-900">
                <img
                  src={app}
                  alt=""
                  loading="lazy"
                  className="rounded-xl  transform transition duration-500 hover:scale-110"
                />
              </div>

              <h3 className="text-xl font-bold  my-2">Support and Training</h3>
              <p className="leading-7 text-lg">
                Benefit from a dedicated support team committed to your success.
                Our software solutions come with personalized training options
                and ongoing support, empowering your team to maximize the full
                potential of our tools.
              </p>
            </div>
          </div>
        </section>
      </section>
      <section className="bg-blue-800 text-lg xl:text-4xl flex justify-center w-full">
        <div className="container mx-auto  py-12 text-center text-white font-extrabold w-2/3">
          Decade-plus of experience in India, the Middle East, and the Asia
          Pacific, delivering enterprise software and application solutions
          tailored to meet diverse business needs.
        </div>
      </section>
    </section>
  );
}

export default About;
