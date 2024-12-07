import React from "react";

type BasicHeroProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  backgroundImage?: string; // Optional background image for the hero
};

const BasicHero: React.FC<BasicHeroProps> = ({
  title,
  subtitle,
  buttonText,
  backgroundImage,
}) => {
  return (
    <div
      className={`relative flex items-center justify-center h-screen bg-cover bg-center`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundColor: backgroundImage ? "transparent" : "#f0f0f0",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="relative text-center text-white z-10 p-5 max-w-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-2xl mb-8">{subtitle}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default BasicHero;
