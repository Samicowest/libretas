import { Progress } from "@/components/ui/progress";

interface ValidationStatusProps {
  completed: number;
  total: number;
  percentComplete: number;
  pending: number;
}

const ValidationStatus = ({
  completed,
  total,
  percentComplete,
  pending,
}: ValidationStatusProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <div className="font-medium">Consensus Progress</div>
        <div className="text-sm text-[#7f8c8d]">
          {completed}/{total} Validators
        </div>
      </div>
      <Progress value={percentComplete} className="h-2 mb-2" />
      <div className="flex justify-between text-sm text-[#7f8c8d]">
        <span>{percentComplete}% Complete</span>
        <span>{pending} Pending</span>
      </div>
    </div>
  );
};

export default ValidationStatus;
