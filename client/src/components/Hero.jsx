import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png)] bg-cove\ bg-center h-screen'>
      <img
        src={assets.marvelLogo}
        alt="Marvel Logo"
        className="max-h-11 lg:h-11 mt-20"
      />
      <h1 className="text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110">
        Guardians <br /> of the Galaxy
      </h1>

      <div className="flex items-center gap-4 text-gray-300"></div>
      <span>Action | Adventure | Sci-Fi</span>
    </div>
  );
};

export default Hero;
