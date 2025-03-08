import { recentResults } from "../data";

const RecentResults = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
      <div className="flex justify-between items-center mb-6">
        <div className="text-xl font-semibold text-[#2c3e50]">
          Recent Results
        </div>
        <div className="text-[#3498db] text-sm cursor-pointer">View All</div>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left text-sm text-[#7f8c8d] p-2">Signal</th>
            <th className="text-right text-sm text-[#7f8c8d] p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {recentResults.map((signal) => (
            <tr key={signal.id}>
              <td className="p-2 w-full">
                <div className="flex justify-start">
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center mr-2 ${
                      signal.type === "BUY"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {signal.type.charAt(0)}
                  </div>
                  #{signal.id}
                </div>
              </td>
              <td className="p-2 w-full flex justify-end">
                <span
                  className={`px-3 py-1 rounded-full text-sm text-right ${
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentResults;
