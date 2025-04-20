import { useEffect, useRef } from "react";
import Logo from "../assets/logo.png";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-scroll";
// import { NavLink } from "react-router-dom";

export function Navbar() {
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  // const isAct = (path: string) => location.pathname === path;

  // const handleLogin = async () => {
  //   try {
  //     await login("user@example.com", "password");
  //     alert("Login successful");
  //   } catch (error) {
  //     console.error("Error logging in:", error);
  //     alert("Error logging in");
  //   }
  // };

  // const handleButtonClick = () => {
  //   toggleNavbar();
  // };

  const toggleNavbar = () => {
    if (navbarRef.current) {
      navbarRef.current.classList.toggle("hidden");
    }
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      navbarRef.current.classList.add("hidden");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="hidden fixed z-[9999] shadow-gray-50  shadow-bottom-md bg-primary top-0 left-0 w-full lg:flex justify-between items-center px-16 py-3">
        <div className="overflow-hidden w-[200px] h-auto">
          <img className="object-cover w-full h-full" src={Logo} alt="logo" />
        </div>
        <div className="flex justify-between items-center gap-4">
          {/* <NavLink
            to="/admin"
            className="relative py-2 px-4  before:absolute text-xs lg:text-sm cursor-pointer before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[0%] transition-all duration-200 hover:before:w-[60%] before:h-[2px] before:bg-gray-100 text-white font-bold "
          >
            Admin
          </NavLink>
          <NavLink
            to="/trading"
            className="relative py-2 px-4  before:absolute text-xs lg:text-sm cursor-pointer before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[0%] transition-all duration-200 hover:before:w-[60%] before:h-[2px] before:bg-gray-100 text-white font-bold "
          >
            User
          </NavLink> */}

          <Link
            to="research"
            smooth={true}
            duration={500}
            className="relative py-2 px-4  before:absolute text-xs lg:text-sm cursor-pointer before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[0%] transition-all duration-200 hover:before:w-[60%] before:h-[2px] before:bg-gray-100 text-white font-bold "
          >
            Research
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="relative py-2 px-4  before:absolute text-xs lg:text-sm cursor-pointer before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[0%] transition-all duration-200 hover:before:w-[60%] before:h-[2px] before:bg-gray-100 text-white font-bold "
          >
            Projects
          </Link>
          <Link
            to="ventures"
            smooth={true}
            duration={500}
            className="relative py-2 px-4  before:absolute text-xs lg:text-sm cursor-pointer before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[0%] transition-all duration-200 hover:before:w-[60%] before:h-[2px] before:bg-gray-100 text-white font-bold "
          >
            ventures
          </Link>
          <Link
            to="aboutus"
            smooth={true}
            duration={500}
            className="relative py-2 px-4  before:absolute text-xs lg:text-sm cursor-pointer before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[0%] transition-all duration-200 hover:before:w-[60%] before:h-[2px] before:bg-gray-100 text-white font-bold "
          >
            About Us
          </Link>
        </div>
      </nav>
      <div className="fixed z-[99999] bg-primary top-0 left-0 w-full lg:hidden">
        <div className="relative justify-between items-center px-2 sm:px-8 py-3 flex">
          <div className="overflow-hidden w-[100px] md:w-[200px] h-auto">
            <img className="object-cover w-full h-full" src={Logo} alt="logo" />
          </div>
          <div
            className="hidden absolute top-[100%] bg-primary left-0 right-0 px-2 sm:px-8 py-3 transition-navbar"
            ref={navbarRef}
          >
            <div className="flex flex-col">
              {/* <NavLink
                to="/admin"
                className="relative py-2 px-4 text-white w-full cursor-pointer hover:font-bold"
              >
                Admin
              </NavLink>
              <NavLink
                to="/trading"
                className="relative py-2 px-4 text-white w-full cursor-pointer hover:font-bold"
              >
                User
              </NavLink> */}
              <Link
                to="research"
                smooth={true}
                duration={500}
                className="relative py-2 px-4 text-white w-full cursor-pointer hover:font-bold"
              >
                Research
              </Link>

              <Link
                to="project"
                smooth={true}
                duration={500}
                className="relative py-2 px-4 text-white w-full cursor-pointer hover:font-bold"
              >
                Project
              </Link>
              <Link
                to="venture"
                smooth={true}
                duration={500}
                className="relative py-2 px-4 text-white w-full cursor-pointer hover:font-bold"
              >
                Ventures
              </Link>

              <Link
                to="aboutus"
                smooth={true}
                duration={500}
                className="relative py-2 px-4 text-white w-full cursor-pointer hover:font-bold"
              >
                About Us
              </Link>
            </div>
          </div>
          <div className="relative  flex items-center gap-4 text-left">
            <button
              className="lg:hidden py-2 text-white"
              ref={buttonRef}
              onClick={toggleNavbar}
            >
              <RiMenu3Line className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
