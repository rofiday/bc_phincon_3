import heroBG from "../assets/images/main-bg.jpg";
import { TbTriangleInverted } from "react-icons/tb";

const HeroSection = () => {
  return (
    <section
      className="hero bg-cover bg-no-repeat bg-center h-screen"
      id="hero"
      style={{ backgroundImage: `url(${heroBG})` }}
    >
      <div className="container mx-auto w-full">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="md:text-4xl font-medium mb-5 text-white uppercase">
            Play Tradisional Game
          </h1>
          <p className="text-white font-thin text-xl mb-5">
            Experience new tradisional game play
          </p>
          <button className="bg-yellow-600 hover:bg-yellow-500 py-2 px-16 text-black font-bold uppercase">
            Play Now
          </button>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center text-white mb-5">
          <div className="flex flex-col items-center">
            <p>The Story</p>
            <TbTriangleInverted />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
