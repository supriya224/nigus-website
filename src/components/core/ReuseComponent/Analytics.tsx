import React from 'react';

function Analytics() {
  return (
    <section className="container mx-auto w-auto">
      <div className="flex justify-between gap-9 my-9 text-center mx-32">
        <div className=" items-center">
          <div className=" flex justify-center">
            <img
              width={150}
              height={100}
              src="http://www.nigussystems.com/images/queue-statistics.png"
              alt=""
            />
          </div>
          <div>
            <h3 className="text-xl">Analytics</h3>
            <p>
              Elevate performance through cutting-edge IT system analytics,
              providing deep insights for strategic decision-making and business
              empowerment.
            </p>
          </div>
        </div>

        <div className=" items-center">
          <div className=" flex justify-center">
            <img
              width={150}
              height={100}
              src="http://www.nigussystems.com/images/call-features.png"
              alt=""
            />
          </div>
          <div>
            <h3>Application Integrations</h3>
            <p>
              Seamlessly connect and enhance your applications for optimized
              performance and streamlined operations through our expert
              integration solutions.
            </p>
          </div>
        </div>

        <div className=" items-center">
          <div className=" flex justify-center">
            <img
              width={150}
              height={100}
              src="http://www.nigussystems.com/images/configure.png"
              alt=""
            />
          </div>
          <div>
            <h3>Installation & Support</h3>
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
