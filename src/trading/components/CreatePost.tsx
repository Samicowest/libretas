import React, { useState } from "react";
import { X } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImageUpload } from "./ImageUpload";
import type { TradePost } from "../types";

interface CreatePostProps {
  onSubmit: (post: Omit<TradePost, "author" | "timestamp">) => void;
}

export const CreatePost: React.FC<CreatePostProps> = ({ onSubmit }) => {
  const [postText, setPostText] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [duration, setDuration] = useState("2");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      text: postText,
      images,
      duration: parseInt(duration),
    });
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Create Trade Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            placeholder="Share your trade analysis..."
            className="min-h-[120px]"
          />

          <div className="grid grid-cols-2 gap-4">
            {images.map((img, index) => (
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
                    setImages(images.filter((_, i) => i !== index))
                  }
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          {images.length < 3 && (
            <ImageUpload onImageSelect={(url) => setImages([...images, url])} />
          )}

          <div className="flex items-center gap-4">
            <span className="text-sm">Voting Duration (hours):</span>
            <Select value={duration} onValueChange={setDuration}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 4, 8, 12, 24].map((hours) => (
                  <SelectItem key={hours} value={hours.toString()}>
                    {hours} hours
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button type="submit">Post Analysis</Button>
        </form>
      </CardContent>
    </Card>
  );
};
