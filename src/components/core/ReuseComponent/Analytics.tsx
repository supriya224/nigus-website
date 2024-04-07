import analy from '../../../assests/analytics.png';
import call from '../../../assests/call.png';
import sett from '../../../assests/setting.png';

function Analytics() {
  return (
    <section className="container mx-auto w-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 my-9 px-5 text-center font-customFont">
        <div className=" items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
          <div className=" flex justify-center">
            <img
              width={150}
              height={100}
              src={analy}
              alt=""
              loading="lazy"
              className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-blue-500 duration-300"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">Analytics</h3>
            <p>
              Elevate performance through cutting-edge IT system analytics,
              providing deep insights for strategic decision-making and business
              empowerment.
            </p>
          </div>
        </div>

        <div className=" items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
          <div className=" flex justify-center">
            <img
              width={150}
              height={100}
              src={call}
              loading="lazy"
              alt=""
              className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-blue-500 duration-300"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">Application Integrations</h3>
            <p>
              Seamlessly connect and enhance your applications for optimized
              performance and streamlined operations through our expert
              integration solutions.
            </p>
          </div>
        </div>

        <div className=" items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
          <div className=" flex justify-center">
            <img
              width={150}
              height={100}
              src={sett}
              loading="lazy"
              alt=""
              className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-blue-500 duration-300"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">Installation & Support</h3>
            <p>
              Efficient installation and unwavering support tailored to ensure
              seamless functionality, providing a foundation for uninterrupted
              business operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Analytics;
