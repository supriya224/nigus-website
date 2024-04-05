import Software from '../../core/ReuseComponent/Software';

function SoftwareDevelopment() {
  return (
    <section>
      <section className="container mx-auto w-auto">
        <div className="flex justify-between mt-12 w-full items-center">
          <div className=" mr-32 w-1/2">
            <h2 className="text-5xl font-extrabold">
              Software Excellence, Elevating Businesses to new heights
            </h2>
            <p className="leading-9 my-5 text-lg">
              Seamlessly connect software, systems, and applications for
              optimized performance, propelling businesses to unparalleled
              success. Experience the transformative power of unified
              operations, ensuring peak productivity and unlocking new
              possibilities with cutting-edge integration expertise.
            </p>
          </div>
          <div>
            <img
              width={600}
              height={100}
              src="http://www.nigussystems.com/images/complete-callcenter-solution.gif"
              alt=""
            />
          </div>
        </div>
      </section>
      <Software />
      <section className="container mx-auto w-auto">
        <div className="flex justify-between mt-12 w-full">
          <div className="flex justify-center items-center text-center  w-1/2">
            <img
              width={200}
              height={100}
              src="http://www.nigussystems.com/images/service-mobility.png"
              alt=""
            />
          </div>
          <div className=" mr-32 w-1/2">
            <p className="leading-2 my-5 text-lg">
              <span className="text-xl font-semibold">
                {' '}
                Custom Software Solutions:
              </span>
              Every business is unique, and so are its software needs. We
              specialize in developing custom software solutions tailored to
              your specific requirements, industry standards, and business
              objectives.
            </p>
            <p className="leading-2 my-5 text-lg">
              <span className="text-xl font-semibold">
                {' '}
                Technology Expertise:
              </span>
              Our team of experienced developers, architects, and engineers are
              proficient in a wide range of technologies, frameworks, and
              programming languages.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
export default SoftwareDevelopment;
