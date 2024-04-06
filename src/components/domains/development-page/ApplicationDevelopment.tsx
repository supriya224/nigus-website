import { FaCheckCircle } from 'react-icons/fa';

function ApplicationDevelopment() {
  return (
    <section>
      <section className="container mx-auto w-auto font-customFont">
        <div className="px-5 mt-5 pb-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 w-full items-center">
          <div className="">
            <h2 className="text-2xl xl:text-left xl:text-5xl font-extrabold">
              Empowering Innovation through Customized Applications
            </h2>
            <p className="leading-7 my-5 text-lg">
              We specialize in crafting cutting-edge applications that redefine
              user experiences and drive business success.Our team of
              experienced developers utilizes the latest technologies to create
              scalable and robust applications tailored to meet your unique
              needs.
            </p>
            <p className=" my-5 leading-7 text-lg">
              From concept to deployment, we are dedicated to delivering
              top-notch solutions that elevate your digital presence and exceed
              your expectations.
            </p>
          </div>
          <div className="lg:p-12 xl:p-12">
            <img
              height={100}
              src="http://www.nigussystems.com/images/customer-support-system.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto w-auto font-customFont">
        <h3 className="text-2xl px-5 my-3 text-gray-800 font-semibold">
          Empowering Innovation: Tailored Applications for a Dynamic Future
        </h3>
        <div className=" w-full px-5 mt-5 pb-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-center items-center text-center">
            <img
              width={200}
              height={100}
              src="http://www.nigussystems.com/images/versatality-features.png"
              alt=""
            />
          </div>
          <div className=" ">
            <p className=" my-5 text-lg flex">
              <FaCheckCircle className="text-cyan-400 text-center" size={50} />
              Stay ahead in a dynamic landscape with our forward-thinking system
              integrations. Embrace innovation as we align and future-proof your
              technology infrastructure for sustained success.
            </p>
            <p className=" my-5 text-lg flex">
              <FaCheckCircle className="text-cyan-400 text-center" size={30} />
              Enhance your enterprise support system with customer support
              agents performance, real time queue and agent statistics.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ApplicationDevelopment;
