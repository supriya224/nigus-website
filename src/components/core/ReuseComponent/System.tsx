import React from 'react';

function System() {
  return (
    <section className="container mx-auto w-auto my-12">
      <div>
        <div className="mx-32 text-center">
          <h3 className=" text-3xl">
            Unifying Software, Systems & Applications
          </h3>
          <p className="mx-32 text-lg">
            Decade of experience in integration with comprehensive services,
            seamlessly connecting software, systems, and applications for
            superior business outcomes.
          </p>
        </div>
        <div className="flex justify-between gap-6 mx-6 my-9 ">
          <div className="w-full shadow-lg shadow-gray-300  p-12 rounded-xl">
            Software Integrations
          </div>
          <div className="w-full shadow-lg shadow-gray-300   p-12 rounded-xl">
            IT System Integrations
          </div>
          <div className="w-full shadow-lg shadow-gray-300   p-12 rounded-xl">
            Enterprise Applications Integrations
          </div>
          <div className="w-full shadow-lg shadow-gray-300   p-12 rounded-xl">
            IT Solutions & Consulting
          </div>
          <div className="w-full shadow-lg shadow-gray-300   p-12 rounded-xl">
            IT Support & Maintenance
          </div>
        </div>
      </div>
    </section>
  );
}

export default System;
