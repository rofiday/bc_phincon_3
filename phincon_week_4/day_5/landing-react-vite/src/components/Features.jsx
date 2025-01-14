import GroupBG from "../assets/images/Group.webp";
import { GoDotFill, GoDot } from "react-icons/go";
const Features = () => {
  return (
    <section
      className="h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${GroupBG})` }}
    >
      <div className="container mx-auto py-24">
        <div className="row flex flex-col justify-end items-center float-right max-w-2xl">
          <div className="content text-white pt-16">
            <h3 className="font-thin text-2xl">What&apos;s so special?</h3>
            <h1 className="font-light text-6xl uppercase mt-2">Features</h1>
          </div>

          <div className="ml-48 mt-20">
            <div className="mt-3 relative">
              <div className="absolute border-l border-white h-28 left-4 top-5"></div>
              <div className="flex gap-6">
                <GoDotFill className="text-4xl text-white" />
                <div className="flex flex-col">
                  <h3 className="text-yellow-600 uppercase tracking-widest text-2xl ">
                    Tradisional Games
                  </h3>
                  <p className="text-white font-thin w-2/3">
                    If you miss your childhood, we provide many tradisionall
                    games here
                  </p>
                </div>
              </div>
              <div
                className="flex
              items-center mt-10 gap-6"
              >
                <GoDot className="text-4xl text-white" />
                <h3 className="text-yellow-600 uppercase tracking-widest text-2xl  ">
                  Game Suit
                </h3>
              </div>
              <div
                className="flex
              items-center mt-10 gap-6"
              >
                <GoDot className="text-4xl text-white" />
                <h3 className="text-yellow-600 uppercase tracking-widest text-2xl ">
                  TDB
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
