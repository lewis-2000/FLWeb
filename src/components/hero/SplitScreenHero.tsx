import React from "react";

type SplitScreenHeroProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  mediaUrl: string; // Image or video URL
  isVideo?: boolean; // Boolean to indicate if media is a video
  onButtonClick: () => void; // Function to handle button clicks
};

const SplitScreenHero: React.FC<SplitScreenHeroProps> = ({
  title,
  subtitle,
  buttonText,
  mediaUrl,
  isVideo = false,
  onButtonClick,
}) => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex-1 flex items-center justify-center bg-gray-100 p-8 md:p-16">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl mb-8">{subtitle}</p>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
      <div className="flex-1 h-full">
        {isVideo ? (
          <video
            className="w-full h-full object-cover"
            src={mediaUrl}
            autoPlay
            loop
            muted
          />
        ) : (
          <img src={mediaUrl} alt="Hero" className="w-full h-full object-cover" />
        )}
      </div>
    </div>
  );
};

export default SplitScreenHero;
