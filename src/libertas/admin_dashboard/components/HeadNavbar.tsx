import { NavLink } from "react-router-dom";
import Logo from "@/assets/logo.png";
const HeadNavbar = () => {
  return (
    <div className="bg-primary z-[9999] fixed top-0 left-0 w-full text-white px-8 py-3 flex justify-between items-center shadow-md">
      <div className="">
        <NavLink
          to="/"
          className="text-xl overflow-hidden w-[200px] h-auto font-bold flex items-center "
        >
          <img className="object-cover w-full h-full" src={Logo} alt="logo" />
        </NavLink>
      </div>
      <div className="flex items-center">
        <div className="relative mr-5 cursor-pointer">
          <span className="text-xl">📬</span>
          <div className="absolute -top-2 -right-2 bg-[#e74c3c] text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
            3
          </div>
        </div>

        <div className="w-9 h-9 rounded-full bg-[#4a69bd] text-white flex items-center justify-center font-bold">
          JD
        </div>
      </div>
    </div>
  );
};

export default HeadNavbar;
