import { NavLink } from "react-router-dom";
import Logo from "@/assets/logo.png";

interface NavbarProps {
  navbarRef: React.RefObject<HTMLDivElement>;
}
const HeadNavbar: React.FC<NavbarProps> = ({ navbarRef }) => {
  return (
    <div
      ref={navbarRef}
      className="bg-primary fixed z-[9999] top-0 left-0 w-full text-white px-8 py-3 flex justify-between items-center shadow-md"
    >
      <div className="">
        <NavLink
          to="/"
          className="text-xl overflow-hidden w-[100px] pl-8 md:w-[200px] h-auto font-bold flex items-center "
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
      </div>
    </div>
  );
};

export default HeadNavbar;
