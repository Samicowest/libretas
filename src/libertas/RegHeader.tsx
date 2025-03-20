import { NavLink } from "react-router-dom";
import Logo from "@/assets/logo.png";
const HeadNavbar = () => {
  return (
    <div className="bg-primary z-[9999] fixed top-0 left-0 w-full text-white px-8 py-3 flex justify-between items-center shadow-md">
      <div className="">
        <NavLink
          to="/"
          className="text-xl overflow-hidden w-[100px] md:w-[200px] h-auto font-bold flex items-center "
        >
          <img className="object-cover w-full h-full" src={Logo} alt="logo" />
        </NavLink>
      </div>
    </div>
  );
};

export default HeadNavbar;
