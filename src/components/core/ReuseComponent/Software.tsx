function Software() {
  return (
    <section className="container mx-auto w-auto my-12 ">
      <div>
        <div className=" text-center">
          <h3 className="font-bold text-xl xl:text-3xl">
            Innovate. Build. Thrive
          </h3>
          <p className=" text-lg">
            Revolutionize your digital landscape with cutting-edge software
            solutions. Innovate, build, and thrive in a world of endless
            possibilities.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 my-9 h-full w-full">
          {/* first flip */}
          <div className=" w-full  h-32 rounded-xl cursor-pointer group perspective">
            <div className="relative rounded-xl  shadow-lg shadow-gray-300 preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              <div className="absolute backface-hidden w-full h-32 flex flex-col items-center justify-center">
                Enterprise Software
              </div>
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
                <div className="text-center flex flex-col items-center justify-center h-full text-gray-800">
                  <button
                    type="button"
                    className="bg-blue-500 p-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-500 group-hover:bottom-10 scale-0 group-hover:scale-75"
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* second flip cart */}
          <div className="w-full h-32 rounded-xl cursor-pointer group perspective">
            <div className="relative rounded-xl  shadow-lg shadow-gray-300 preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              <div className="absolute backface-hidden w-full h-32 flex flex-col items-center justify-center">
                Customized Software
              </div>
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
                <div className="text-center flex flex-col items-center justify-center h-full text-gray-800">
                  <button
                    type="button"
                    className="bg-blue-500 p-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-500 group-hover:bottom-10 scale-0 group-hover:scale-75"
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-32  rounded-xl cursor-pointer group perspective">
            <div className="relative rounded-xl  shadow-lg shadow-gray-300 preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              <div className="absolute backface-hidden w-full h-32 flex flex-col items-center justify-center">
                Enterprise Applications
              </div>
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
                <div className="text-center flex flex-col items-center justify-center h-full text-gray-800">
                  <button
                    type="button"
                    className="bg-blue-500 p-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-500 group-hover:bottom-10 scale-0 group-hover:scale-75"
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-32  rounded-xl cursor-pointer group perspective">
            <div className="relative rounded-xl  shadow-lg shadow-gray-300 preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              <div className="absolute backface-hidden w-full h-32 flex flex-col items-center justify-center">
                Solutions & Consulting
              </div>
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
                <div className="text-center flex flex-col items-center justify-center h-full text-gray-800">
                  <button
                    type="button"
                    className="bg-blue-500 p-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-500 group-hover:bottom-10 scale-0 group-hover:scale-75"
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-32  rounded-xl cursor-pointer group perspective">
            <div className="relative rounded-xl  shadow-lg shadow-gray-300 preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              <div className="absolute backface-hidden w-full h-32 flex flex-col items-center justify-center">
                Support & Maintenance
              </div>
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
                <div className="text-center flex flex-col items-center justify-center h-full text-gray-800">
                  <button
                    type="button"
                    className="bg-blue-500 p-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-500 group-hover:bottom-10 scale-0 group-hover:scale-75"
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Software;
