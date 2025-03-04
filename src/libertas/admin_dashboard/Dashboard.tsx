import DashboardHeader from "./components/DashboardHeader";
import StatCard from "./components/StatCard";
import SignalQueue from "./components/SignalQueue";
import ActiveValidations from "./components/ActiveValidations";
import MarketOverview from "./components/MarketOverview";
import HeadNavbar from "./components/HeadNavbar";
import RecentResults from "./components/RecentResults";

const Dashboard = () => {
  return (
    <>
      <HeadNavbar />
      <div className="p-8 w-full bg-[#f5f7fa]">
        <DashboardHeader />
        <div className="grid grid-cols-4 gap-6 mb-8">
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
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <SignalQueue />
            <ActiveValidations />
          </div>
          <div>
            <RecentResults />
            <MarketOverview />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
