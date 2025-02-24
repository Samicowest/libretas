import React, { useState, useEffect } from "react";
import { Clock, FileDown, X } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CreatePost } from "./components/CreatePost";
import { Comment } from "./components/Comment";
import { ImageUpload } from "./components/ImageUpload";
import { VotingSection } from "./components/VotingSection";
import type { TradePost, Comment as CommentType, Vote } from "./types";

export const TradingPlatform: React.FC = () => {
  const [votes, setVotes] = useState<Vote>({ likes: 0, dislikes: 0 });
  const [comments, setComments] = useState<CommentType[]>([]);
  const [showCreatePost, setShowCreatePost] = useState(true);
  const [post, setPost] = useState<TradePost | null>(null);
  const [newComment, setNewComment] = useState<
    Omit<CommentType, "author" | "timestamp">
  >({
    text: "",
    images: [],
  });
  const [isExpired, setIsExpired] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState("02:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const [hours, minutes, seconds] = timeRemaining.split(":").map(Number);
      const totalSeconds = hours * 3600 + minutes * 60 + seconds - 1;

      if (totalSeconds <= 0) {
        setIsExpired(true);
        setTimeRemaining("00:00:00");
        clearInterval(timer);
      } else {
        const newHours = String(Math.floor(totalSeconds / 3600)).padStart(
          2,
          "0"
        );
        const newMinutes = String(
          Math.floor((totalSeconds % 3600) / 60)
        ).padStart(2, "0");
        const newSeconds = String(totalSeconds % 60).padStart(2, "0");
        setTimeRemaining(`${newHours}:${newMinutes}:${newSeconds}`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining]);

  const handleCreatePost = (
    postData: Omit<TradePost, "author" | "timestamp">
  ) => {
    setPost({
      ...postData,
      timestamp: new Date().toISOString(),
      author: "Active Trader",
    });
    setShowCreatePost(false);
  };

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.text.trim() || newComment.images.length > 0) {
      setComments([
        ...comments,
        {
          ...newComment,
          author: "Active Trader",
          timestamp: new Date().toISOString(),
        },
      ]);
      setNewComment({ text: "", images: [] });
    }
  };

  const handleVote = (type: "like" | "dislike") => {
    setVotes((prev) => ({
      ...prev,
      [type === "like" ? "likes" : "dislikes"]:
        prev[type === "like" ? "likes" : "dislikes"] + 1,
    }));
  };

  if (showCreatePost) {
    return <CreatePost onSubmit={handleCreatePost} />;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>Trade Analysis</span>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mr-1" />
              {timeRemaining}
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Post Content */}
          {post && (
            <div className="space-y-4">
              <p>{post.text}</p>
              <div className="grid grid-cols-2 gap-4">
                {post.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Analysis ${index + 1}`}
                    className="rounded-lg w-full"
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                Posted by {post.author} on{" "}
                {new Date(post.timestamp).toLocaleString()}
              </div>
            </div>
          )}

          <VotingSection
            votes={votes}
            onVote={handleVote}
            isExpired={isExpired}
          />

          {/* Comments Section */}
          <div className="space-y-4">
            <form onSubmit={handleComment} className="space-y-4">
              <Textarea
                value={newComment.text}
                onChange={(e) =>
                  setNewComment({ ...newComment, text: e.target.value })
                }
                placeholder="Add your analysis or concerns..."
                className="min-h-[100px]"
              />

              {newComment.images.length < 2 && (
                <ImageUpload
                  onImageSelect={(url) =>
                    setNewComment({
                      ...newComment,
                      images: [...newComment.images, url],
                    })
                  }
                />
              )}

              {newComment.images.length > 0 && (
                <div className="grid grid-cols-2 gap-2">
                  {newComment.images.map((img, index) => (
                    <div key={index} className="relative">
                      <img
                        src={img}
                        alt={`Upload ${index + 1}`}
                        className="rounded-lg w-full"
                      />
                      <Button
                        size="icon"
                        variant="destructive"
                        className="absolute top-2 right-2"
                        onClick={() =>
                          setNewComment({
                            ...newComment,
                            images: newComment.images.filter(
                              (_, i) => i !== index
                            ),
                          })
                        }
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}

              <Button type="submit">Add Comment</Button>
            </form>

            <div className="space-y-4">
              {comments.map((comment, index) => (
                <Comment key={index} comment={comment} />
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => console.log("Generate PDF")}
          >
            <FileDown className="h-4 w-4" />
            Export as PDF
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TradingPlatform;
