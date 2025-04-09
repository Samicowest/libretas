import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa6";

const Whatsaap: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setIsVisible(false); // Hide on scroll down
    } else {
      setIsVisible(true); // Show on scroll up
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <a
      href="https://wa.me/2347065779669"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-4 right-4 z-[99999] rounded-full flex gap-2 items-center bg-green-500 text-white p-4 shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      Chat
      <FaWhatsapp />
    </a>
  );
};

export default Whatsaap;
