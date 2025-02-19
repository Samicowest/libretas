import React, { useEffect } from "react";
import Img1 from "@/assets/aboutus.png";
import { NavLink } from "react-router-dom";

const AboutUs: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="aboutus" className="bg-gray-100 w-full">
      <div className="flex flex-col md:flex-row max-w-5xl mx-auto  justify-center p-6 bg-gray-100">
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl md:text-4xl py-8 font-bold mb-4">About Us</h2>
          <p className="leading-snug">
            At Libertas Alpha, we're driven by a passion for empowering growth,
            innovation, and excellence. Our mission is to foster an ecosystem
            that nurtures asset development, personnel growth, and cutting-edge
            innovation, all while harnessing the power of data analytics.
          </p>
          <ul className="list-disc pl-5 py-8">
            <li className="mb-2">Exceptional customer service</li>
            <li className="mb-2">
              <b>Asset Development:</b> Optimizing resources for maximum returns
            </li>
            <li className="mb-2">
              {" "}
              <b> Personnel Development: </b> Fostering a culture of continuous
              learning and growth
            </li>
            <li className="mb-2">
              {" "}
              <b> Innovation Diffusion: </b> Adopting and integrating new
              technologies and ideas
            </li>
            <li className="mb-2">
              {" "}
              <b> Analytics: </b> Providing actionable insights for informed
              decision-making
            </li>
          </ul>

          <NavLink
            to="/about"
            className=" py-2 px-4 rounded-md bg-primary text-md lg:text-lg cursor-pointer text-white font-bold"
          >
            more...
          </NavLink>
        </div>
        <div className="md:w-1/2 p-4">
          <img
            src={Img1}
            alt="Company Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
