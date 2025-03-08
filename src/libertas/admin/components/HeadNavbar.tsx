import { NavLink } from "react-router-dom";
import Logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
const HeadNavbar = () => {
  return (
    <div className="bg-primary fixed top-0 left-0 w-full text-white px-8 py-3 flex justify-between items-center shadow-md">
      <div className="">
        <NavLink
          to="/"
          className="text-xl overflow-hidden w-[100px] md:w-[200px] h-auto font-bold flex items-center "
        >
          <img className="object-cover w-full h-full" src={Logo} alt="logo" />
        </NavLink>
      </div>
      <div className="flex items-center">
        <div className="flex gap-1">
          <Link
            to=""
            className="relative py-2 px-4  before:absolute text-xs lg:text-sm cursor-pointer before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[0%] transition-all duration-200 hover:before: text-white font-bold "
          >
            Analysis
          </Link>
          <Link
            to="analyst"
            className="relative py-2 px-4  before:absolute text-xs lg:text-sm cursor-pointer before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[0%] transition-all duration-200 hover:before: text-white font-bold "
          >
            Analyst
          </Link>
        </div>
        <div className="relative mr-5 cursor-pointer">
          <span className="text-xl">📬</span>
          <div className="absolute -top-2 -right-2 bg-[#e74c3c] text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
            3
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadNavbar;
