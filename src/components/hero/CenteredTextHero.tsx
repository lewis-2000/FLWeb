import React from "react";

type CenteredTextHeroProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void; // Function to handle button clicks
};

const CenteredTextHero: React.FC<CenteredTextHeroProps> = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-5 max-w-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{title}</h1>
        <p className="text-lg md:text-xl mb-6 text-gray-700">{subtitle}</p>
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CenteredTextHero;
