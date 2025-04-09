const Navbar = () => {
  return (
    <div className="bg-[#1a2942] text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <span className="text-2xl mr-2">⚖️</span>
        <span className="text-xl font-bold">LIBERTAS TRADING</span>
      </div>
      <div className="flex items-center">
        <div className="relative mr-4 cursor-pointer">
          📬
          <div className="absolute top-[-8px] right-[-8px] bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            3
          </div>
        </div>
        <div className="w-9 h-9 bg-[#4a69bd] text-white rounded-full flex items-center justify-center font-bold">
          JD
        </div>
      </div>
    </div>
  );
};

export default Navbar;
