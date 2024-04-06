import React from 'react';

function System() {
  return (
    <section className="container mx-auto w-auto my-12 font-customFont">
      <div>
        <div className="px-5">
          <h3 className=" text-xl text-center font-bold xl:text-2xl">
            Unifying Software, Systems & Applications
          </h3>
          <p className="my-2">
            Decade of experience in integration with comprehensive services,
            seamlessly connecting software, systems, and applications for
            superior business outcomes.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2 px-9  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 my-9 h-full w-full  ">
          <div className="w-full py-12 shadow-lg shadow-gray-300  p-12 rounded-xl">
            Enterprise Software
          </div>
          <div className="w-full  py-12 shadow-lg shadow-gray-300   p-12 rounded-xl">
            Customized Software
          </div>
          <div className="w-full  py-12 shadow-lg shadow-gray-300   p-12 rounded-xl">
            Enterprise Applications
          </div>
          <div className="w-full  py-12 shadow-lg shadow-gray-300   p-12 rounded-xl">
            Solutions & Consulting
          </div>
          <div className="w-full  py-12 shadow-lg shadow-gray-300   p-12 rounded-xl">
            Support & Maintenance
          </div>
        </div>
      </div>
    </section>
  );
}

export default System;
