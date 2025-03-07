const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="text-2xl font-semibold text-[#2c3e50]">
        Analyst Dashboard
      </div>
      <div className="flex gap-2">
        <button className="bg-[#3498db] text-white px-4 py-2 rounded-md font-medium">
          Create New Signal
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
