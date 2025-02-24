import React from "react";
import type { Comment as CommentType } from "../types";

interface CommentProps {
  comment: CommentType;
}

export const Comment: React.FC<CommentProps> = ({ comment }) => (
  <div className="p-4 bg-accent rounded-lg space-y-3">
    <p>{comment.text}</p>
    {comment.images.length > 0 && (
      <div className="grid grid-cols-2 gap-2">
        {comment.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Comment ${index + 1}`}
            className="rounded-lg w-full"
          />
        ))}
      </div>
    )}
    <div className="flex items-center justify-between text-sm text-muted-foreground">
      <span>{comment.author}</span>
      <span>{new Date(comment.timestamp).toLocaleString()}</span>
    </div>
  </div>
);
