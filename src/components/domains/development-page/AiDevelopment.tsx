function AiDevelopment() {
  return (
    <section>
      <section className="container mx-auto w-auto my-3">
        <div className="flex justify-between mt-12 w-full items-center">
          <div className=" mr-32 w-1/2">
            <h2 className="text-5xl font-extrabold">
              Empowering Tomorrow with AI/ML Solutions.
            </h2>
            <p className=" my-5 text-lg">
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
          <div>
            <img
              width={600}
              height={100}
              src="http://www.nigussystems.com/images/realtime-calling.gif"
              alt=""
            />
          </div>
        </div>

        {/* next section */}
        <section>
          <div className="flex justify-between mt-12 gap-9 w-full items-center">
            <div>
              <h2 className="text-xl font-extrabold my-3">
                Fueled by Data, Driven by Intelligence
              </h2>
              <img
                width={600}
                height={100}
                src="http://www.nigussystems.com/images/managed-service.jpg"
                alt=""
              />
            </div>

            <div className=" mr-32 w-1/2">
              <p className=" my-5 text-lg">
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
