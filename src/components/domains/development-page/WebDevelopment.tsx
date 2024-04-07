import Slider from '../../core/slider/Slider';
// import Img from '../../../assests/web.gif';
import Web from '../../../assests/webApp.png';
import App from '../../../assests/appApp.png';
import Soft from '../../../assests/softApp.png';
import Ai from '../../../assests/aiApp.png';
import Call from '../../../assests/callApp.png';
import CRM from '../../../assests/crmApp.png';
import Appli from '../../../assests/appliApp.png';
import WEB from '../../../assests/web1.png';
import { ImageSlider } from '../../core/ImageSlider';

function WebDevelopment() {
  return (
    <section className="container mx-auto w-auto my-5 font-customFont ">
      {/* front page is here */}
      <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:text-left xl:text-left">
        <div className="md:mt-9 xl:mt-32">
          <h2 className="text-3xl text-center md:text-left xl:text-5xl xl:text-left font-extrabold">
            Revolutionizing Enterprise with Innovative Solutions
          </h2>
          <p className="leading-8 text-center md:text-left xl:text-left my-5 text-lg">
            Modernize the organization with innovative software solutions,
            applications and integrations
          </p>
        </div>
        <div className="my-9">
          <ImageSlider />
        </div>
      </div>
      {/* client slider page */}

      <div>
        <h4 className="text-center text-3xl mt-9 font-bold">Our clients</h4>
        <div className="">
          <Slider />
        </div>
      </div>

      <div className="mx-5">
        <h3 className="text-3xl my-6 text-center font-bold">
          Innovative IT Solutions
        </h3>
        <p className="text-lg">
          Utilize our software development expertise to seamlessly integrate
          business applications with new or existing systems, ensuring
          streamlined operations and enhanced efficiency.
        </p>
        <div className="flex flex-wrap justify-center gap-5 my-9">
          <div className="shadow-lg shadow-gray-200 rounded-xl p-9 transform transition duration-500 hover:scale-110 ">
            <div className="flex justify-center">
              <img
                src={Web}
                alt=""
                className="rounded-xl w-32"
                loading="lazy"
              />
            </div>
            <h3 className="text-center font-bold mt-2">Web Development</h3>
          </div>
          <div className="shadow-lg shadow-gray-200 rounded-xl p-9  transform transition duration-500 hover:scale-110 ">
            <div className="flex justify-center">
              <img
                src={App}
                alt=""
                className="rounded-xl w-32 "
                loading="lazy"
              />
            </div>
            <h3 className="text-center text-sm  font-bold mt-2">
              Application Development
            </h3>
          </div>

          <div className="shadow-lg shadow-gray-200 rounded-xl p-9  transform transition duration-500 hover:scale-110 ">
            <div className="flex justify-center">
              <img
                src={Soft}
                alt=""
                className="rounded-xl w-32 "
                loading="lazy"
              />
            </div>
            <h3 className="text-center text-sm  font-bold mt-2">
              Software Development
            </h3>
          </div>
          <div className="shadow-lg shadow-gray-200 rounded-xl p-9  transform transition duration-500 hover:scale-110 ">
            <div className="flex justify-center">
              <img
                src={Ai}
                alt=""
                className="rounded-xl w-32 "
                loading="lazy"
              />
            </div>
            <h3 className="text-center  font-bold mt-2">AI/ML Development</h3>
          </div>
          <div className="shadow-lg shadow-gray-200 rounded-xl p-9 transform transition duration-500 hover:scale-110 ">
            <div className="flex justify-center">
              <img
                src={Call}
                alt=""
                className="rounded-xl w-32 "
                loading="lazy"
              />
            </div>
            <h3 className="text-center  font-bold mt-2">System Integration</h3>
          </div>
          <div className="shadow-lg shadow-gray-200 rounded-xl p-9 transform transition duration-500 hover:scale-110 ">
            <div className="flex justify-center">
              <img
                src={CRM}
                alt=""
                className="rounded-xl w-32 "
                loading="lazy"
              />
            </div>
            <h3 className="text-center  font-bold mt-2">CRM Integration</h3>
          </div>
          <div className="shadow-lg shadow-gray-200 rounded-xl p-9  transform transition duration-500 hover:scale-110 ">
            <div className="flex justify-center">
              <img
                src={Appli}
                alt=""
                className="rounded-xl w-32 "
                loading="lazy"
              />
            </div>
            <h3 className="text-center text-sm  font-bold mt-2">
              Application Integration
            </h3>
          </div>
        </div>
      </div>
      {/* last items */}
      <div className="mx-5 my-3">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  font-customFont">
          <div className="">
            <p className="leading-8 text-lg">
              Our services are designed to help businesses establish a robust
              online presence in the digital age. We empower our clients to
              create impactful websites that effectively engage users and
              provide seamless experiences. Whether it's an enterprise software,
              a corporate website, or a web application, we leverage our
              creativity and technical expertise to develop responsive,
              user-friendly.
            </p>
            <p className="leading-8 text-lg my-5">
              Web Development Application Development Software Development AI/ML
              Development System Integration
            </p>
          </div>
          <div className="xl:px-28  transform transition duration-500 hover:scale-110">
            <img src={WEB} alt="" className="" />
          </div>
        </div>
      </div>
      {/* <Flip />
      <Software /> */}
    </section>
  );
}

export default WebDevelopment;
