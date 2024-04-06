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
        {/* flip tthis  */}
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

export default Software;
