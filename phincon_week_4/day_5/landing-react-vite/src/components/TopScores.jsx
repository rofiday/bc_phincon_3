import topScoresBG from "../assets/images/quotes.webp";
import { FaTwitter } from "react-icons/fa";
const TopScores = () => {
  return (
    <section
      className="h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${topScoresBG})` }}
    >
      <div className="container mx-auto py-24 text-white">
        <div className="row md:flex items-center justify-between mx-20">
          <div className="left mx-auto md:w-full text-center md:text-left mb-10">
            <h1 className="text-3xl font-thin tracking-widest mb-3">
              TOP SCORES
            </h1>
            <p className="text-sm font-thin w-2/2 mb-3">
              this top score from various games provided <br />
              on this platform
            </p>
            <button className="bg-yellow-600 hover:bg-yellow-500 py-2 px-16 text-black font-bold mt-5">
              see more
            </button>
          </div>
          <div className="right flex flex-col gap-10">
            <div className="card bg-zinc-900 py-2 px-4 md:w-96 rounded-md">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img
                    src="https://picsum.photos/id/27/50/50"
                    alt="card-photo"
                    className="rounded-full"
                  />
                  <div className="leading-none">
                    <h3 className="font-thin text-yellow-600 tracking-wide -ml-0">
                      Evan Lathi
                    </h3>
                    <p className="font-thin text-zinc-500   ">PC Gamer</p>
                  </div>
                </div>
                <FaTwitter className="text-sm text-zinc-500" />
              </div>
              <p className="text-sm pt-2">
                &quot;One of my gaming highlights of the year&quot;
              </p>
              <p className="font-thin text-zinc-600 mt-1">June 18, 2021</p>
            </div>
            <div className="card bg-zinc-900 py-2 px-4 md:max-w-sm md:-ml-48 rounded-md">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img
                    src="https://picsum.photos/id/27/50/50"
                    alt="card-photo"
                    className="rounded-full"
                  />
                  <div className="leading-none">
                    <h3 className="font-thin text-yellow-600 tracking-wide">
                      Jada Griffin
                    </h3>
                    <p className="font-thin text-zinc-500 ">PC Gamer</p>
                  </div>
                </div>
                <FaTwitter className="text-sm text-zinc-500" />
              </div>
              <p className="text-sm pt-2">
                &quot;The next big thing in the world of streaming and survival
                games.&quot;
              </p>
              <p className="font-thin text-zinc-600 mt-1">June 18, 2021</p>
            </div>
            <div className="card bg-zinc-900 py-2 px-4 md:max-w-96 rounded-md">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img
                    src="https://picsum.photos/id/27/50/50"
                    alt="card-photo"
                    className="rounded-full"
                  />
                  <div className="leading-none">
                    <h3 className="font-thin text-yellow-600 tracking-wide">
                      Aaron Williams
                    </h3>
                    <p className="font-thin text-zinc-500 ">PC Gamer</p>
                  </div>
                </div>
                <FaTwitter className="text-sm text-zinc-500" />
              </div>
              <p className="text-sm pt-2">
                &quot;Snoop Fogg Playing The Wildly Entertainig &apos;SOS&apos;
                Is Ridiculous &quot;
              </p>
              <p className="font-thin text-zinc-600 mt-1">June 18, 2021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopScores;
