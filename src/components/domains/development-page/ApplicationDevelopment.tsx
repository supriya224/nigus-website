function ApplicationDevelopment() {
  return (
    <section>
      <section className="container mx-auto w-auto font-customFont">
        <div className="flex justify-between mt-12 w-full items-center">
          <div className=" mr-32 w-1/2">
            <h2 className="text-5xl font-extrabold">
              Empowering Innovation through Customized Applications
            </h2>
            <p className=" my-5 text-lg">
              We specialize in crafting cutting-edge applications that redefine
              user experiences and drive business success.Our team of
              experienced developers utilizes the latest technologies to create
              scalable and robust applications tailored to meet your unique
              needs.
            </p>
            <p className=" my-5 text-lg">
              From concept to deployment, we are dedicated to delivering
              top-notch solutions that elevate your digital presence and exceed
              your expectations.
            </p>
          </div>
          <div>
            <img
              width={600}
              height={100}
              src="http://www.nigussystems.com/images/customer-support-system.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto w-auto">
        <h3 className="text-2xl text-gray-500 font-semibold">
          Empowering Innovation: Tailored Applications for a Dynamic Future
        </h3>
        <div className="flex justify-between w-full">
          <div className="flex justify-center items-center text-center  w-1/2">
            <img
              width={200}
              height={100}
              src="http://www.nigussystems.com/images/versatality-features.png"
              alt=""
            />
          </div>
          <div className=" mr-32 w-1/2">
            <p className="leading-2 my-5 text-lg">
              Stay ahead in a dynamic landscape with our forward-thinking system
              integrations. Embrace innovation as we align and future-proof your
              technology infrastructure for sustained success.
            </p>
            <p className="leading-2 my-5 text-lg">
              Enhance your enterprise support system with customer support
              agents performance, real time queue and agent statistics.
            </p>
          </div>
        </div>
      </section>
      {/* reuse component */}
    </section>
  );
}

export default ApplicationDevelopment;
