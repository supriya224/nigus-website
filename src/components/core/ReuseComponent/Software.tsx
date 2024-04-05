import React from 'react';

function Software() {
  return (
    <section className="container mx-auto w-auto my-12">
      <div>
        <div className="mx-32 text-center group [perspective:1000px]">
          <h3 className=" text-3xl">Innovate. Build. Thrive</h3>
          <p className="mx-32 text-lg">
            Revolutionize your digital landscape with cutting-edge software
            solutions. Innovate, build, and thrive in a world of endless
            possibilities.
          </p>
        </div>
        {/* flip tthis  */}
        <div className="flex justify-between gap-6 mx-6 my-9 relative h-full w-full rounded-xl shadow-xl transition-all duration-500 ">
          <div className="w-full shadow-lg shadow-gray-300  p-12 rounded-xl">
            Enterprise Software
          </div>
          <div className="w-full shadow-lg shadow-gray-300   p-12 rounded-xl">
            Customized Software
          </div>
          <div className="w-full shadow-lg shadow-gray-300   p-12 rounded-xl">
            Enterprise Applications
          </div>
          <div className="w-full shadow-lg shadow-gray-300   p-12 rounded-xl">
            Solutions & Consulting
          </div>
          <div className="w-full shadow-lg shadow-gray-300   p-12 rounded-xl">
            Support & Maintenance
          </div>
        </div>
      </div>
    </section>
  );
}

export default Software;
