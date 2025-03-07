import { marketOverview } from "../data";

const MarketOverview = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div className="text-xl font-semibold text-[#2c3e50]">
          Market Overview
        </div>
        <div className="text-[#3498db] text-sm cursor-pointer">Refresh</div>
      </div>
      <div>
        {marketOverview.map((item, index) => (
          <div
            key={index}
            className="flex justify-between py-2 border-b last:border-b-0"
          >
            <div>
              <div className="font-medium">{item.name}</div>
              <div
                className={`text-sm ${
                  item.isPositive ? "text-green-500" : "text-red-500"
                }`}
              >
                {item.change}
              </div>
            </div>
            <div className="font-semibold">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketOverview;
