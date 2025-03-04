import { activeValidations } from "../data";

const ActiveValidations = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
      <div className="flex justify-between items-center mb-6">
        <div className="text-xl font-semibold text-[#2c3e50]">
          Active Validations
        </div>
        <div className="text-[#3498db] text-sm cursor-pointer">View All</div>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left text-sm text-[#7f8c8d] p-2">Signal</th>
            <th className="text-left text-sm text-[#7f8c8d] p-2">Asset</th>
            <th className="text-left text-sm text-[#7f8c8d] p-2">
              Consensus Progress
            </th>
            <th className="text-left text-sm text-[#7f8c8d] p-2">Status</th>
            <th className="text-left text-sm text-[#7f8c8d] p-2">Your Vote</th>
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
              <td className="p-2">
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div
                    className={`h-1.5 rounded-full ${
                      signal.status === "Approved"
                        ? "bg-green-500"
                        : signal.status === "Rejected"
                        ? "bg-red-500"
                        : "bg-blue-500"
                    }`}
                    style={{
                      width: `${
                        (signal.consensusProgress! / signal.consensusTotal!) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>
                    {signal.consensusProgress}/{signal.consensusTotal} Validated
                  </span>
                  <span>
                    {Math.round(
                      (signal.consensusProgress! / signal.consensusTotal!) * 100
                    )}
                    %
                  </span>
                </div>
              </td>
              <td className="p-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    signal.status === "Pending"
                      ? "bg-gray-100 text-gray-700"
                      : signal.status === "Validating"
                      ? "bg-blue-100 text-blue-700"
                      : signal.status === "Approved"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {signal.status}
                </span>
              </td>
              <td className="p-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    signal.yourVote === "Approved"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {signal.yourVote}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveValidations;
