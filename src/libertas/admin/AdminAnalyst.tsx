import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import StatCard from "./components/StatCard";
import { Analyst, mockAnalysts } from "./data";

const AdminAnalyst: React.FC = () => {
  const [selectedAnalyst, setSelectedAnalyst] = useState<Analyst | null>(null);

  const renderAnalystDetails = (analyst: Analyst) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mt-4">
        <h2 className="text-2xl font-bold mb-4">
          {analyst.name} - Detailed Performance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm text-gray-600">Validation Rate</h3>
            <p className="text-2xl font-bold text-blue-600">
              {analyst.validationRate}%
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-sm text-gray-600">Avg Response Time</h3>
            <p className="text-2xl font-bold text-green-600">
              {analyst.averageResponseTime} min
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-sm text-gray-600">Signal Success Rate</h3>
            <p className="text-2xl font-bold text-purple-600">
              {Math.round(
                (analyst.approvedSignals / analyst.totalSignals) * 100
              )}
              %
            </p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300} className="mt-6">
          <BarChart
            data={[
              {
                name: "Signals",
                Approved: analyst.approvedSignals,
                Rejected: analyst.rejectedSignals,
              },
            ]}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Approved" fill="#82ca9d" />
            <Bar dataKey="Rejected" fill="#ff6384" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="p-4 mt-20">
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
        <div className=" w-full  rounded-md shadow-sm">
          <h1 className="text-3xl font-bold mb-6">
            Analyst Performance Tracking
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {mockAnalysts.map((analyst) => (
              <div
                key={analyst.id}
                className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-xl transition-all"
                onClick={() => setSelectedAnalyst(analyst)}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">{analyst.name}</h2>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    {analyst.name
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <p className="text-sm text-gray-600">Validation</p>
                    <p className="font-bold text-blue-600">
                      {analyst.validationRate}%
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Signals</p>
                    <p className="font-bold text-green-600">
                      {analyst.totalSignals}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Response</p>
                    <p className="font-bold text-purple-600">
                      {analyst.averageResponseTime}m
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedAnalyst && renderAnalystDetails(selectedAnalyst)}
        </div>
      </main>
    </div>
  );
};

export default AdminAnalyst;
