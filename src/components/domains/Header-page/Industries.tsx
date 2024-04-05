import React from 'react';

function Industries() {
  return (
    <section>
      <section className="container mx-auto w-auto mt-9">
        <div className="flex justify-between gap-9 mx-24 font-customFont">
          <div className="flex justify-between  ">
            <div className="w-1/2">
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
            <div className="">
              <img
                width={500}
                height={100}
                src="http://www.nigussystems.com/images/importance-cust-relationship.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Industries;
