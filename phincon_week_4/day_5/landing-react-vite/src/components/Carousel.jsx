import carouselBG from "../assets/images/the-games-bg.jpg";
import rockPaper from "../assets/images/rockpaperstrategy-1600.jpg";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    rockPaper,
    "https://picsum.photos/id/1016/1600/500",
    "https://picsum.photos/id/1015/1600/500",
  ];
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <section
      className="carousel h-screen bg-cover bg-no-repeat bg-center w-full "
      id="carousel"
      style={{ backgroundImage: `url(${carouselBG})` }}
    >
      <div className="container mx-auto px-4 w-full">
        <div className="row lg:flex lg:flex-row justify-center items-center py-24 md:flex md:flex-col ">
          <div>
            <div className="text-white mb-10 flex-start ">
              <h3 className="text-md font-thin -mt-5">
                What&apos;s so special?
              </h3>
              <h1 className="text-3xl uppercase">The Games</h1>
            </div>
          </div>
          <div className="relative w-full max-w-3xl mx-auto">
            <div className="overflow-hidden relative h-80 md:w-full md:object-cover md:object-center">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-transform transform 
                  ${
                    index === currentIndex
                      ? "translate-x-0"
                      : "translate-x-full"
                  }`}
                >
                  <img
                    src={image}
                    alt="carousel"
                    className="w-full h-full object-cover "
                  />
                </div>
              ))}
            </div>
            <button
              className="absolute top-1/2 md:-left-7  lg:-left-7 left-5 transform transition duration-1000 ease-in-out -translate-y-1/2 hover:scale-110 text-white"
              onClick={prevSlide}
            >
              <BiLeftArrow />
            </button>
            <button
              className="absolute top-1/2 md:-right-7  lg:-right-7 right-5 transform-translate transition-all ease-in-out duration-700 -translate-y-1/2 text-white "
              onClick={nextSlide}
            >
              <BiRightArrow />
            </button>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 shadow-black ${
                    index === currentIndex ? "bg-gray-100" : "bg-yellow-500"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
