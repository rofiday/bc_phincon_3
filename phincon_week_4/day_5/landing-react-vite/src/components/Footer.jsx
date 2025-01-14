import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BiCommentDots } from "react-icons/bi";
const Footer = () => {
  return (
    <footer className="mx-auto  py-12 bg-black bg-opacity-96 min-h-fit text-white ">
      <div className="md:flex md:justify-center md:items-center md:flex-row gap-8 ml-28 uppercase tracking-widest flex flex-col">
        <a href="/" className="hover:text-yellow-600 text-sm">
          Main
        </a>
        <a href="/" className="hover:text-yellow-600 text-sm">
          About
        </a>
        <a href="/" className="hover:text-yellow-600 text-sm">
          Game Features
        </a>
        <a href="/" className="hover:text-yellow-600 text-sm">
          System Requirements
        </a>
        <div className="flex flex-row gap-5">
          <a href="/" className="hover:text-red-600 bg-transparent text-2xl">
            <FaFacebookF />
          </a>
          <a href="/" className="hover:text-red-600 bg-transparent text-2xl">
            <FaTwitter />
          </a>
          <a href="/" className="hover:text-red-600 bg-transparent text-2xl">
            <FaYoutube />
          </a>
          <a href="/" className="hover:text-red-600 bg-transparent text-2xl">
            <BiCommentDots />
          </a>
        </div>
      </div>
      <div className="border-t border-gray-500  w-4/5 mx-auto mt-5"></div>
      <div className="flex justify-center items-center  pt-5 gap-20">
        <div className="md:flex md:justify-center md:items-center md:gap-96 flex gap-10">
          <p className="text-md text-zinc-700">
            &copy; 2018 Your Games, Inc. All rights reserved
          </p>
          <p className="uppercase text-sm tracking-widest font-extralight">
            Privacy Policy | Terms Of Services | Code Of Conduct
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
