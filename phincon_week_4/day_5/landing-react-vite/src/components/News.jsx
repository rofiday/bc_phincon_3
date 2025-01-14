import newsBG from "../assets/images/newsletter.png";
const News = () => {
  return (
    <section
      className="bg-cover bg-no-repeat bg-center h-screen md:flex md:flex-col md:justify-center md:items-center"
      style={{ backgroundImage: `url(${newsBG})` }}
    >
      <div className="container mx-auto py-4">
        <div className="row text-white py-28 md:flex md:flex-col md:justify-center md:items-center">
          <div className="max-w-xl mx-auto flex flex-col justify-center md:mt-5 mt-80">
            <div className="md:mx-[17rem] lg:mx[17rem] lg:w-full  md:w-full flex flex-col justify-center items-center px-10">
              <p className="mb-10 text-base tracking-[2px] font-thin">
                Want to Stay in Touch?
              </p>
              <h3 className="uppercase text-6xl font-thin leading-[5rem]">
                NewsLetter
              </h3>
              <h3 className="uppercase text-6xl font-thin">Subscribe</h3>
              <p className="mb-10 text-base mt-10 md:mt-5">
                In order to start receiving our news, all you have to do is
                enter your email address. Everything else will be taken care of
                by us. We will send your emails containing information about
                game. We don&apos;t send spam.
              </p>
              <div className="flex w-full gap-4">
                <div className="bg-slate-800 py-2 px-5 rounded-md w-96">
                  <p className="text-sm text-gray-400">Your email address</p>
                  <p className="text-md text-yellow-600">
                    youremail@binar.co.id
                  </p>
                </div>
                <div className="bg-yellow-500 py-2 px-10 rounded-md w-64 flex items-center ">
                  <button className="text-black font-extrabold text-sm mx-auto">
                    Subscribe Now
                  </button>
                </div>
              </div>
              {/* <div className="md:flex md:flex-row md:gap-10 flex flex-col">
                <div className="bg-slate-800   rounded-md mb-5 md:mb-0 md:inline-block">
                  <p className="text-sm text-slate-600">Your email address</p>
                  <p className="font-thin text-sm text-yellow-600">
                    youremail@binar.co.id
                  </p>
                </div>
                <button className="bg-yellow-600 hover:bg-yellow-500 rounded-md text-black font-boldtext-sm">
                  Subscribe Now
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
