import React from 'react';
import Analytics from '../../core/ReuseComponent/Analytics';
import System from '../../core/ReuseComponent/System';
import Collaboration from '../../core/ReuseComponent/Collaboration';

function SystemDevelopment() {
  return (
    <section>
      <section className="container mx-auto w-auto">
        <div className="flex justify-between mt-12 w-full items-center">
          <div className=" mr-32 w-1/2">
            <h2 className="text-5xl font-extrabold">Breaking Boundaries</h2>
            <p className="leading-9 my-5 text-lg">
              Break free from limitations with integration expertise, unifying
              software, systems, and applications for a streamlined and cohesive
              business experience Stay ahead of the curve with integration
              solutions, future-proofing businesses by connecting and supporting
              software, systems, and applications with cutting-edge expertise.
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
        <div>
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
