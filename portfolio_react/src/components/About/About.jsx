import React from "react";
import AboutImg from "../../assets/Avatar About Image1.png";
import { IoArrowForward } from "react-icons/io5";

export const About = () => {
  return (
    <div
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black/30
  shadow-x1 mx-0 md:mx-20 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:g-30" src={AboutImg} alt="About img" />
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">Frontend Developer</h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur, aperiam? Deserunt laboriosam, saepe a incidunt
                  blanditiis mollitia
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">Backend Developer</h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur, aperiam? Deserunt laboriosam, saepe a incidunt
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">Database Developer</h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur, 
                </p>
              </span>
            </div>

          </ul>
        </div>
      </div>
    </div>
  );
};
