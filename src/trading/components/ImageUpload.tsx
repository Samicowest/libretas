import React from "react";
import { ImageIcon } from "lucide-react";

interface ImageUploadProps {
  onImageSelect: (url: string) => void;
  className?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageSelect,
  className,
}) => {
  return (
    <div
      className={`relative border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-accent ${className}`}
    >
      <input
        type="file"
        accept="image/*"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            const imageUrl = URL.createObjectURL(file);
            onImageSelect(imageUrl);
          }
        }}
      />
      <ImageIcon className="mx-auto h-8 w-8 text-muted-foreground" />
      <span className="mt-2 block text-sm text-muted-foreground">
        Upload Image
      </span>
    </div>
  );
};
