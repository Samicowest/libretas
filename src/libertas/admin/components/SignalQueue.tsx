import { signalsQueue } from "../data";

const SignalQueue = () => {
  return (
    <>
      <div className="bg-white rounded-lg p-6 shadow-sm mb-6 hidden md:block">
        <div className="flex justify-between items-center mb-6">
          <div className="text-xl font-semibold text-[#2c3e50]">
            Signal Queue
          </div>
          <div className="text-[#3498db] text-sm cursor-pointer">View All</div>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left text-sm text-[#7f8c8d] p-2">Signal</th>
              <th className="text-left text-sm text-[#7f8c8d] p-2">Asset</th>
              <th className="text-left text-sm text-[#7f8c8d] p-2">
                Submitted
              </th>
              <th className="text-left text-sm text-[#7f8c8d] p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {signalsQueue.map((signal) => (
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
                <td className="p-2">{signal.submitted}</td>
                <td className="p-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm text-center ${
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
      <div className="md:hidden p-4 mb-8 bg-white rounded-md">
        <div className="flex justify-between items-center mb-6">
          <div className="text-xl font-semibold text-[#2c3e50]">
            Signal Queue
          </div>
          <div className="text-[#3498db] text-sm cursor-pointer">View All</div>
        </div>
        <div className="space-y-2 flex flex-col">
          {signalsQueue.map((signal) => (
            <div key={signal.id} className="shadow-md rounded-md flex-col ">
              <div className="flex justify-between items-center p-4">
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
                <span className="text-gray-700 font-bold ">BTC</span>
              </div>
              <div className="flex justify-between items-center p-4">
                <span className="text-gray-400">10:24</span>
                <span className="text-blue-400 ">
                  <a href="#dkd" className="text-sm">
                    Validate
                  </a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SignalQueue;
