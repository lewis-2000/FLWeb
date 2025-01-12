import React from "react";

interface GalleryProps {
  images: string[];
  settings?: {
    layout?: {
      columns?: number;
      gap?: string;
      padding?: string;
    };
    colors?: {
      backgroundColor?: string;
    };
  };
}

const Gallery: React.FC<GalleryProps> = ({ images, settings }) => {
  const backgroundColor = settings?.colors?.backgroundColor || "white"; // Default background color to white

  const defaultImage = "/FLWeb/defaults/defaultImage.png"; // Default image

  // Custom settings
  const columns = settings?.layout?.columns || 3; // Default to 3 columns
  const gap = settings?.layout?.gap || "0.2rem"; // Default gap between images
  const padding = settings?.layout?.padding || "0.1rem"; // Default padding

  return (
    <div
      className={`grid w-full overflow-hidden`}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: gap,
        padding: padding,
        backgroundColor: backgroundColor,
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="relative overflow-hidden bg-transparent"
          style={{
            aspectRatio: "1", // Ensure all grid items are square
          }}
        >
          <img
            src={image}
            alt={`Gallery item ${index + 1}`}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = defaultImage; // Fallback if the image fails to load
            }}
            className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105 bg-transparent"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
