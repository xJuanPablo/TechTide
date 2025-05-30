import React from "react";
import hero from "../assets/hero.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";
import RevolvingText from "./RevolvingText";

const Home = () => {
  return (
    <div
      name="home"
      id="home"
      className=" w-full bg-gradient-to-b from-zinc-800 to-gray-900 pt-60 pb-40"
    >
      <div className="max-w-screen-lg mx-auto items-center justify-center">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Text + Button Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left px-4">
            <h2 className="text-3xl sm:text-7xl font-bold text-gray-200">
              Full Stack M.E.R.N. Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
              <RevolvingText />
            </p>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-4 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 pl-1">
                <BsFillArrowRightCircleFill />
              </span>
            </Link>
          </div>

          {/* Image Section */}
          <div className="mt-8 md:mt-0 md:ml-12">
            <img
              src={hero}
              alt="Developer"
              className="mx-auto w-2/3 md:w-full rounded-e-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
