import sReq from "../assets/images/requirements.png";
const Requirements = () => {
  return (
    <div className="bg-black bg-opacity-100h-screen w-full md:w-full">
      <div
        className="bg-cover bg-no-repeat bg-center h-screen"
        style={{
          backgroundImage: `url(${sReq})`,
        }}
      >
        <div className="container py-28 mx-auto">
          <p className="text-white font-light text-sm text-center letter-spacing -tracking-tighter">
            Can my computer run this game?
          </p>
          <div className="text-white">
            <h3 className="uppercase font-extralight tracking-widest text-3xl pt-16 px-36 sm:text-lg">
              System Requirements
            </h3>
          </div>
          <div className="row flex flex-row py-4 mx-24 pt-12">
            <div className=" flex flex-col text-white min-w-3.5 w-[16rem] border-t border-r border-b border-l border-white border-opacity-30">
              <div className="p-3">
                <p className="text-yellow-600 uppercase">OS :</p>
                <p>Windows 7 64-bit only</p>
                <p>(No OXS support at this time)</p>
              </div>
              <div className=" border-t border-white w-64 border-opacity-30">
                <div className="p-3">
                  <p className="text-yellow-600 uppercase tracking-widest">
                    Memory:
                  </p>
                  <p>4GB RAM</p>
                </div>
              </div>
            </div>
            <div className=" flex flex-col text-white min-w-3.5 w-[16rem] border-t border-r border-b border-white border-opacity-30">
              <div className="p-3">
                <p className="text-yellow-600 uppercase tracking-widest">
                  Procesor:
                </p>
                <p>Intel Core 2 Duo @2.4GHZ</p>
                <p>AMD Athlon X2 @2.8GHZ</p>
              </div>
              <div className="border-b border-t pt-1 min-w-3.5 w-[16rem] border-white  border-opacity-30">
                <div className="p-3">
                  <p className="text-yellow-600 uppercase tracking-widest">
                    Storage:
                  </p>
                  <p>8GB Available space</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-24 -my-4 text-white w-[32rem] border-r border-b border-l border-white border-opacity-30">
            <div className="p-5">
              <p className="text-yellow-600 uppercase tracking-widest">
                Graphics
              </p>
              <p>NVDIA GeForce GTX 660 2GB or</p>
              <p>AMD Radeon HD 7850 2GB DirectX11(Shalder Model 5)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
