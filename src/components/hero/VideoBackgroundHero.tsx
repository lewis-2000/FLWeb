import React from "react";

type VideoBackgroundHeroProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  videoUrl: string; // Video URL for the background
  onButtonClick: () => void; // Function to handle button clicks
};

const VideoBackgroundHero: React.FC<VideoBackgroundHeroProps> = ({
  title,
  subtitle,
  buttonText,
  videoUrl,
  onButtonClick,
}) => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="relative z-10 text-center text-white p-5 max-w-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-2xl mb-8">{subtitle}</p>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default VideoBackgroundHero;
