import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  isNegative?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  trend,
  isNegative = false,
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="text-sm text-[#7f8c8d] mb-2">{title}</div>
      <div className="text-2xl font-semibold text-[#2c3e50]">{value}</div>
      <div
        className={`text-sm ${
          isNegative ? "text-red-500" : "text-green-500"
        } flex items-center mt-2`}
      >
        {trend}
      </div>
    </div>
  );
};

export default StatCard;
