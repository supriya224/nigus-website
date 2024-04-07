import { FaCheckCircle } from 'react-icons/fa';
import Software from '../../core/ReuseComponent/Software';

function SoftwareDevelopment() {
  return (
    <section className=" font-customFont">
      <section className="container mx-auto w-auto">
        <div className="px-5 mt-5 pb-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 items-center">
          <div className="">
            <h2 className="text-2xl xl:text-5xl font-extrabold">
              Software Excellence, Elevating Businesses to new heights
            </h2>
            <p className="leading-9 text-lg">
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
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </section>
      <Software />
      <section className="container mx-auto w-auto">
        <div className="px-5 mt-5 pb-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 items-center">
          <div className="flex justify-center items-center text-center">
            <img
              width={200}
              height={100}
              src="http://www.nigussystems.com/images/service-mobility.png"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="">
            <p className="leading-2 my-5 text-lg">
              <span className="text-xl font-semibold flex">
                <FaCheckCircle
                  className="text-cyan-400 text-center"
                  size={20}
                />
                Custom Software Solutions:
              </span>
              Every business is unique, and so are its software needs. We
              specialize in developing custom software solutions tailored to
              your specific requirements, industry standards, and business
              objectives.
            </p>
            <p className="leading-2 my-5 text-lg">
              <span className="text-xl font-semibold flex">
                <FaCheckCircle
                  className="text-cyan-400 text-center"
                  size={20}
                />
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
