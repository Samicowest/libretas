import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ValidationActions = () => {
  return (
    <div className="pt-4 border-t border-[#ecf0f1]">
      <h3 className="text-lg font-semibold mb-4">Your Validation</h3>
      <div className="grid grid-cols-2 gap-4">
        <Button className="py-4 text-lg font-semibold bg-[#e8f5e9] text-[#388e3c] hover:bg-[#d7edda]">
          👍 Approve
        </Button>
        <Button className="py-4 text-lg font-semibold bg-[#ffebee] text-[#d32f2f] hover:bg-[#ffdde0]">
          👎 Reject
        </Button>
      </div>

      <div className="mt-6">
        <label htmlFor="comment" className="font-medium block mb-2">
          Your Reasoning (Required)
        </label>
        <Textarea
          id="comment"
          placeholder="Provide your analysis and reasoning for your decision..."
          className="min-h-[100px]"
        />
      </div>
    </div>
  );
};

export default ValidationActions;
