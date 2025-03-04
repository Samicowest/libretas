import { ValidatorInfo } from "../types";

interface ValidationHistoryProps {
  validators: ValidatorInfo[];
}

const ValidationHistory = ({ validators }: ValidationHistoryProps) => {
  return (
    <div>
      {validators.map((validator) => (
        <div
          key={validator.id}
          className="flex py-4 border-b border-[#ecf0f1] last:border-b-0"
        >
          <div className="w-10 h-10 rounded-full bg-[#4a69bd] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
            {validator.avatar}
          </div>
          <div className="flex-grow">
            <div className="font-medium mb-1">{validator.name}</div>
            <div
              className={`text-sm flex items-center ${
                validator.approved ? "text-[#388e3c]" : "text-[#d32f2f]"
              }`}
            >
              <span className="mr-1">{validator.approved ? "✓" : "✗"}</span>
              {validator.approved ? "Approved" : "Rejected"}
            </div>
            <div className="text-xs text-[#7f8c8d] mt-1">{validator.time}</div>
            <div className="mt-1">{validator.comment}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ValidationHistory;
