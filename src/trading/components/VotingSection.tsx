import React from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import type { Vote } from "../types";

interface VotingSectionProps {
  votes: Vote;
  onVote: (type: "like" | "dislike") => void;
  isExpired: boolean;
}

export const VotingSection: React.FC<VotingSectionProps> = ({
  votes,
  onVote,
  isExpired,
}) => {
  const totalVotes = votes.likes + votes.dislikes;
  const likePercentage = totalVotes > 0 ? (votes.likes / totalVotes) * 100 : 0;

  const getTradeStatus = () => {
    if (!isExpired) return "Voting in Progress";
    return votes.likes > votes.dislikes
      ? "Trade Approved"
      : "Trade Disapproved";
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <Button
          onClick={() => onVote("like")}
          className="flex items-center gap-2"
        >
          <ThumbsUp className="w-4 h-4" /> Support ({votes.likes})
        </Button>
        <Button
          variant="outline"
          onClick={() => onVote("dislike")}
          className="flex items-center gap-2"
        >
          <ThumbsDown className="w-4 h-4" /> Oppose ({votes.dislikes})
        </Button>
      </div>

      <div className="w-full h-4 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${likePercentage}%` }}
        />
      </div>

      <Alert>
        <AlertDescription>Status: {getTradeStatus()}</AlertDescription>
      </Alert>
    </div>
  );
};
