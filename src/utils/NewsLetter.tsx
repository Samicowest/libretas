import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const NewsLetter: React.FC = () => {
  return (
    <div className="bg-gray-100 px-4 py-12">
      <div className="flex flex-col gap-4 items-center p-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-primary2 mb-4">NewsLetter</h2>
        <h2 className="text-md text-center  text-gray-400 mb-4">
          Subscribe to our news letter to be informed
        </h2>
        <input
          type="email"
          placeholder="Input your email"
          className="mb-4 p-2 rounded-xl border w-full md:w-[60%] border-gray-300 focus:outline-primary"
        />
        <button className="bg-primary2 rounded-full text-white px-4 py-2 mt-4 flex items-center transition-colors duration-300 delay-100 hover:bg-pinkHeavy">
          Subscribe <MdOutlineKeyboardDoubleArrowRight className="pl-2" />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
