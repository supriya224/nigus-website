import React from 'react';
import Analytics from '../../core/ReuseComponent/Analytics';
import System from '../../core/ReuseComponent/System';
import Collaboration from '../../core/ReuseComponent/Collaboration';

function SystemDevelopment() {
  return (
    <section>
      <section className="container mx-auto w-auto font-customFont ">
        <div className="px-5 xl:mt-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 w-full items-center">
          <div className=" ">
            <h2 className="text-2xl xl:text-5xl font-extrabold">
              Breaking Boundaries
            </h2>
            <p className=" my-3">
              Break free from limitations with integration expertise, unifying
              software, systems, and applications for a streamlined and cohesive
              business experience Stay ahead of the curve with integration
              solutions, future-proofing businesses by connecting and supporting
              software, systems, and applications with cutting-edge expertise.
            </p>
          </div>
          <div className="">
            <img
              src="http://www.nigussystems.com/images/complete-callcenter-solution.gif"
              alt=""
              className="lg:px-5 xl:px-5"
            />
          </div>
        </div>
        <div className="mx-5 my-5">
          <img src="http://www.nigussystems.com/images/slider.gif" alt="" />
        </div>
      </section>
      <System />
      <Collaboration />
      <Analytics />
    </section>
  );
}

export default SystemDevelopment;
