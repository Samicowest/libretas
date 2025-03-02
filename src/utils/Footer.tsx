import React from "react";

const Footer: React.FunctionComponent = () => {
  return (
    <div className="bg-primary py-8">
      <div className="flex max-w-5xl gap-8 md:gap-2 flex-col-reverse md:flex-row justify-between mx-auto p-5">
        <div className="flex-2 p-2 w-full  md:w-[60%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex-1 p-2">
              <h6 className="text-xl text-white font-bold">Company</h6>
              <ul>
                <li className="list-none text-white py-2 cursor-pointer">
                  Services
                </li>
                <li className="list-none text-white py-2 cursor-pointer">
                  About
                </li>
                <li className="list-none text-white py-2 cursor-pointer">
                  Contact
                </li>
                <li className="list-none text-white py-2 cursor-pointer">
                  Team
                </li>
              </ul>
            </div>
            <div className="flex-1 p-2">
              <h6 className="text-xl text-white font-bold">Help</h6>
              <ul>
                <li className="list-none text-white py-2 cursor-pointer">
                  Contact
                </li>
                <li className="list-none text-white py-2 cursor-pointer">
                  Returns
                </li>
                <li className="list-none text-white py-2 cursor-pointer">
                  Faq
                </li>
                <li className="list-none text-white py-2 cursor-pointer">
                  Privacy
                </li>
              </ul>
            </div>
            <div className="flex-1 p-2">
              <h6 className="text-xl text-white font-bold">Social</h6>
              <ul>
                <li className="list-none text-white py-2 cursor-pointer">
                  Facebook
                </li>
                <li className="list-none text-white py-2 cursor-pointer">
                  Instagram
                </li>
                <li className="list-none text-white py-2 cursor-pointer">
                  Pinterest
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-3 p-2 w-full  md:w-[40%]">
          <h6 className="text-2xl text-white mb-2">Let's stay in touch</h6>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-2 flex-grow border border-gray-300 rounded-l-md"
            />
            <button className="bg-primary2 text-white p-2 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
