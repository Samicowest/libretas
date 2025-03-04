import { SignalDetail } from "../types";

interface SignalDetailsProps {
  details: SignalDetail[];
}

const SignalDetails = ({ details }: SignalDetailsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {details.map((detail, index) => (
        <div key={index} className="pb-4">
          <div className="text-sm text-[#7f8c8d] mb-1">{detail.label}</div>
          <div className="text-lg font-medium text-[#2c3e50]">
            {detail.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SignalDetails;
