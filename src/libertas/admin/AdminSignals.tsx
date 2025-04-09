import StatCard from "@/components/AdminComponent/StatCard";
import SignalQueue from "@/components/AdminComponent/SignalQueue";
import ActiveValidations from "@/components/AdminComponent/ActiveValidations";
import MarketOverview from "@/components/AdminComponent/MarketOverview";
import RecentResults from "@/components/AdminComponent/RecentResults";

const AdminSignals = () => {
  return (
    <>
      <div className="p-4  w-full bg-[#f5f7fa]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Signals Pending Validation"
            value="12"
            trend="+2 since yesterday"
          />
          <StatCard
            title="Your Validation Rate"
            value="92%"
            trend="+5% this week"
          />
          <StatCard
            title="Consensus Success Rate"
            value="87%"
            trend="-2% this month"
            isNegative
          />
          <StatCard
            title="Average Response Time"
            value="42m"
            trend="-8m improvement"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-6 p-2 md:p-0">
          <div className="col-span-2">
            <SignalQueue />
            <ActiveValidations />
          </div>
          <div className="w-full">
            <RecentResults />
            <MarketOverview />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSignals;
