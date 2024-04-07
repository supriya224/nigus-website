function AiDevelopment() {
  return (
    <section>
      <section className="container mx-auto w-auto font-customFont my-3 ">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 px-5 w-full items-center">
          <div className="my-2">
            <h2 className="text-2xl xl:text-5xl font-extrabold">
              Empowering Tomorrow with AI/ML Solutions.
            </h2>
            <p className=" my-5">
              Unlock the power of data with AI/ML development services tailored
              to your unique needs. From predictive analytics to natural
              language processing, we deliver intelligent solutions that drive
              growth and competitive advantage.{' '}
            </p>
            <p>
              {' '}
              Stay ahead of the curve with integration solutions,
              future-proofing businesses by connecting and supporting software,
              systems, and applications with cutting-edge expertise.
            </p>
          </div>
          <div className="  transform transition duration-500 hover:scale-110">
            <img
              src="http://www.nigussystems.com/images/realtime-calling.gif"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
        {/* next section */}
        <section>
          <div className="px-5 w-full items-center py-2 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            <div>
              <h2 className="text-xl font-extrabold my-3">
                Fueled by Data, Driven by Intelligence
              </h2>
              <div className="  transform transition duration-500 hover:ease-out hover:scale-75">
                <img
                  src="http://www.nigussystems.com/images/managed-service.jpg"
                  loading="lazy"
                  alt=""
                  className="w-fit"
                />
              </div>
            </div>

            <div className="px-5">
              <p className="my-2">
                <span className="text-xl font-bold">AI-driven Solutions:</span>{' '}
                We integrate AI capabilities into your existing systems,
                applications, and workflows to automate repetitive tasks,
                enhance data-driven decision-making, improve customer
                engagement, and drive operational efficiency. Whether you need
                chatbots, virtual assistants, fraud detection systems,
                personalized recommendations, or predictive maintenance
                solutions, we tailor AI-driven solutions to meet your
                objectives.
              </p>
            </div>
          </div>
        </section>
      </section>
      {/* reuse component */}
    </section>
  );
}

export default AiDevelopment;
