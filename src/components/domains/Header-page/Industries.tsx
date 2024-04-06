import React from 'react';

function Industries() {
  return (
    <section>
      <section className="container mx-auto w-auto ">
        <div className="gap-9 mx-auto font-customFont">
          <div className="mb-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 ">
            <div className=" mx-8">
              <h2 className="text-2xl font-bold">Industries</h2>
              <p className="leading-9 my-5 text-lg">
                At Nigus Systems, we are dedicated to developing cutting-edge
                technology solutions that empower businesses across various
                industries. Our team of experts specializes in software
                development, digital platforms, and IT consulting services. We
                harness the power of artificial intelligence, cloud computing,
                and data analytics to create customized solutions that drive
                efficiency, productivity, and growth for our clients.
              </p>
              <p className="leading-9 my-5 text-lg">
                {' '}
                We provide a range of software solutions, applications, and
                system integrations with business applications, offering
                numerous advantages as the software extracts insights from
                various applications.
                <ul className="my-3 leading-10 items-center mt-4">
                  <li className="flex items-center text-gray-400 font-semibold">
                    <span className="text-3xl ">&#x2022;</span>
                    IT
                  </li>
                  <li className="flex items-center text-gray-400 font-semibold">
                    <span className="text-3xl">&#x2022;</span>
                    ITeS
                  </li>
                  <li className="flex items-center text-gray-400 font-semibold">
                    <span className="text-3xl">&#x2022;</span>
                    Manufacturing
                  </li>
                  <li className="flex items-center text-gray-400 font-semibold">
                    <span className="text-3xl">&#x2022;</span>
                    Retail
                  </li>
                  <li className="flex items-center text-gray-400 font-semibold">
                    <span className="text-3xl">&#x2022;</span>
                    Education
                  </li>
                </ul>
              </p>
            </div>
            <div className=" ">
              <img
                src="http://www.nigussystems.com/images/importance-cust-relationship.png"
                alt=""
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Industries;
