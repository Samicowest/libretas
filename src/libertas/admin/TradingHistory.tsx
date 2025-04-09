import { activeValidations, Signal } from "../../data/adminData";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const getStatusColor = (status: Signal["status"]) => {
  switch (status) {
    case "Pending":
      return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    case "Validating":
      return "bg-blue-100 text-blue-800 hover:bg-blue-200";
    case "Approved":
      return "bg-green-100 text-green-800 hover:bg-green-200";
    case "Rejected":
      return "bg-red-100 text-red-800 hover:bg-red-200";
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-200";
  }
};

const getVoteColor = (vote: Signal["yourVote"]) => {
  if (vote === "Approved") {
    return "bg-green-100 text-green-800 hover:bg-green-200";
  } else if (vote === "Rejected") {
    return "bg-red-100 text-red-800 hover:bg-red-200";
  }
  return "bg-gray-100 text-gray-800 hover:bg-gray-200";
};

const getProgressColor = (status: Signal["status"]) => {
  switch (status) {
    case "Approved":
      return "bg-green-500";
    case "Rejected":
      return "bg-red-500";
    default:
      return "bg-blue-500";
  }
};

const getResultColor = (status: Signal["result"]) => {
  switch (status) {
    case "Profit":
      return "bg-green-500";
    case "Loss":
      return "bg-red-500";
    default:
      return "bg-blue-500";
  }
};

const TradingHistory = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <div className="hidden  md:block bg-white rounded-lg p-6 shadow-sm mb-6">
        <div className="flex justify-between items-center mb-6">
          <div className="text-xl font-bold text-[#2c3e50]">
            Trading History
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left text-sm text-[#7f8c8d] p-2">Signal</th>
              <th className="text-left text-sm text-[#7f8c8d] p-2">Asset</th>
              <th className="text-left text-sm text-[#7f8c8d] p-2">
                Investment
              </th>
              <th className="text-left text-sm text-[#7f8c8d] p-2">Entry</th>
              <th className="text-left text-sm text-[#7f8c8d] p-2">
                Stop Loss
              </th>
              <th className="text-left text-sm text-[#7f8c8d] p-2">
                Take Profit
              </th>
              <th className="text-left text-sm text-[#7f8c8d] p-2">P%L</th>
              <th className="text-left text-sm text-[#7f8c8d] p-2">Display</th>
            </tr>
          </thead>
          <tbody>
            {activeValidations.map((signal) => (
              <tr key={signal.id}>
                <td className="p-2">
                  <div className="flex items-center">
                    <div
                      className={`w-6 h-6 rounded-md flex items-center justify-center mr-2 ${
                        signal.type === "BUY"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {signal.type.charAt(0)}
                    </div>
                    {signal.type} #{signal.id}
                  </div>
                </td>
                <td className="p-2">{signal.asset}</td>
                <td className="p-2">{signal.entry}</td>

                <td className="p-2">
                  <div className="flex items-center">
                    <span className="text-md">{signal.entry}</span>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <span className="text-md">{signal.stopLoss}</span>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <span className="text-md">{signal.takeProfit}</span>
                  </div>
                </td>
                <td className="p-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${getResultColor(
                      signal.result
                    )}`}
                  >
                    {signal.outcome}% - {signal.result}
                  </span>
                </td>
                <td className="p-2">
                  <Link
                    to={`/signal/${signal.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile View */}
      <div className="md:hidden space-y-4 bg-white p-4 rounded-md">
        <div className="flex justify-between items-center mb-6">
          <div className="text-xl font-semibold text-[#2c3e50]">
            Active Validations
          </div>
          <div className="text-[#3498db] text-sm cursor-pointer">View All</div>
        </div>
        {activeValidations.map((signal) => (
          <Card key={signal.id}>
            <Collapsible
              open={openItems[signal.id]}
              onOpenChange={() => toggleItem(signal.id)}
            >
              <CardHeader className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center justify-between first-line:  w-full">
                    <div className="flex items-center  space-x-2">
                      <span className="text-base">
                        {signal.type} #{signal.id}
                      </span>
                      <span>{signal.asset}</span>
                    </div>
                  </div>
                  <CollapsibleTrigger asChild>
                    <button
                      type="button"
                      className="p-2 rounded-full hover:bg-gray-100"
                    >
                      {openItems[signal.id] ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                  </CollapsibleTrigger>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <Badge className={getStatusColor(signal.status)}>
                    {signal.status}
                  </Badge>
                  {signal.yourVote ? (
                    <Badge className={getVoteColor(signal.yourVote)}>
                      Your vote: {signal.yourVote}
                    </Badge>
                  ) : (
                    <Badge variant="outline">Not Voted</Badge>
                  )}
                </div>
              </CardHeader>
              <CollapsibleContent>
                <CardContent className="pt-0 pb-4 px-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">
                        Consensus Progress
                      </h4>
                      <Progress
                        value={
                          (signal.consensusProgress! / signal.consensusTotal!) *
                          100
                        }
                        className={getProgressColor(signal.status)}
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>
                          {signal.consensusProgress}/{signal.consensusTotal}{" "}
                          Validated
                        </span>
                        <span>
                          {Math.round(
                            (signal.consensusProgress! /
                              signal.consensusTotal!) *
                              100
                          )}
                          %
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        ))}
      </div>
    </>
  );
};

export default TradingHistory;
