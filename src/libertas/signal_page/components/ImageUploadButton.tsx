import React, { useState } from "react";

const ImageUploadButton: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the file input
    }
  };

  return (
    <div className="flex flex-col items-center justify-start space-y-4">
      <label className="relative cursor-pointer bg-gradient-to-r from-primary to-primary2 my-2 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <span>Upload Image</span>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          ref={fileInputRef}
        />
      </label>

      {imagePreview && (
        <div className="mt-4 relative">
          <img
            src={imagePreview}
            alt="Preview"
            className="rounded-lg shadow-md max-w-full h-auto"
          />
          <button
            onClick={handleRemoveImage}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors duration-200"
            aria-label="Remove image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploadButton;
