import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
interface direct {
  link: string;
}
export function SubNavbar(link: direct) {
  const linked = link.link;
  return (
    <>
      <nav className="hidden fixed z-[99999] bg-primary top-0 left-0 w-full lg:flex justify-between items-center px-16 py-3">
        <div className="overflow-hidden w-[200px] h-auto">
          <img className="object-cover w-full h-full" src={Logo} alt="logo" />
        </div>
        <div className="flex justify-between items-center gap-4">
          <NavLink
            to="/"
            className="relative py-2 px-4  before:absolute text-xs lg:text-sm cursor-pointer before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[0%] transition-all duration-200 hover:before:w-[60%]  text-white font-bold"
          >
            Home
          </NavLink>
          /
          <NavLink
            to={`/${linked}`}
            className="relative py-2 px-4 capitalize  before:absolute text-xs lg:text-sm cursor-pointer before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[0%] transition-all duration-200 hover:before:w-[60%]  text-white font-bold"
          >
            {linked}
          </NavLink>
        </div>
      </nav>
    </>
  );
}
