import HeadNavbar from "./components/HeadNavbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { useEffect, useRef, useState } from "react";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef<HTMLDivElement>(null);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight);
      }
    };

    updateNavbarHeight(); // Initial measurement
    window.addEventListener("resize", updateNavbarHeight); // Update on resize

    return () => {
      window.removeEventListener("resize", updateNavbarHeight); // Cleanup
    };
  }, []);

  return (
    <>
      <div className="min-h-screen  bg-gray-100">
        {/* Sidebar Toggle Button */}
        <HeadNavbar navbarRef={navbarRef} />

        {/* Sidebar Toggle Button */}
        {!isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="fixed left-4 top-3 p-2 z-[99999]  text-white rounded-full hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}

        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
          navbarHeight={navbarHeight}
        />

        {/* Main Content */}
        <div
          className={`transition-all duration-300 ${
            isSidebarOpen ? "md:ml-64" : "md:ml-0"
          }`}
          style={{ paddingTop: `${navbarHeight}px` }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
