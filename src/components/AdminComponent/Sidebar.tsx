import React from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navbarHeight: number;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, navbarHeight }) => {
  return (
    <div
      style={{ top: `${navbarHeight}px` }}
      className={`fixed  left-0 h-full w-64 py-8 bg-primary text-white transition-transform duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4 flex flex-col gap-1">
        <Link
          to="analyst"
          className="p-2 my-1 hover:bg-primary2 cursor-pointer"
        >
          Analyst
        </Link>
        <Link
          to="listsignal"
          className="p-2 my-1 hover:bg-primary2 cursor-pointer"
        >
          Signals
        </Link>
        <Link
          to="history"
          className="p-2 my-1 hover:bg-primary2 cursor-pointer"
        >
          Trading History
        </Link>
        <Link to="/login" className="p-2 my-1 hover:bg-primary2 cursor-pointer">
          Login
        </Link>
        <Link
          to="/register"
          className="p-2 my-1 hover:bg-primary2 cursor-pointer"
        >
          Register
        </Link>
        <Link
          to="/create"
          className="p-2 my-1 hover:bg-primary2 cursor-pointer"
        >
          Create
        </Link>
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2  rounded-full hover:bg-gray-600"
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;
