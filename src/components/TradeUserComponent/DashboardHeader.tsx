const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="text-md md:text-2xl font-semibold text-[#2c3e50]">
        Analyst Dashboard
      </div>
      <div className="flex gap-2">
        <button className="text-md bg-[#3498db] text-white px-4 py-2 rounded-md">
          Create New Signal
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
