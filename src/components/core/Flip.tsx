function Flip() {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-slate-200">
      <div className=" group h-96 w-96">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-200 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">software development</div>
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-black ox-12 text-center text-slate-900  [transform:rotateY(180deg)] [backface-visibility:hidden]">
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
    </div>
  );
}

export default Flip;
