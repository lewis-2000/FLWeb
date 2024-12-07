import React from "react";

type ImageBackgroundHeroProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  backgroundImageUrl: string; // Background image URL for the hero
};

const ImageBackgroundHero: React.FC<ImageBackgroundHeroProps> = ({
  title,
  subtitle,
  buttonText,
  backgroundImageUrl,
}) => {
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
      <div className="relative text-center text-white z-10 p-5 max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-2xl mb-8">{subtitle}</p>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ImageBackgroundHero;
