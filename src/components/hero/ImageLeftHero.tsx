import React from "react";

type ImageLeftHeroProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  imageUrl: string; // Image displayed on the left side
};

const ImageLeftHero: React.FC<ImageLeftHeroProps> = ({
  title,
  subtitle,
  buttonText,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center h-screen bg-gray-100">
      <div className="flex-1 h-full">
        <img
          src={imageUrl}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex items-center justify-center p-8 md:p-16">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl mb-8">{subtitle}</p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLeftHero;
