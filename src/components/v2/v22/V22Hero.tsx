import React from "react";

interface HeroProps {
  bgUrl?: string;
}

const V22Hero: React.FC<HeroProps> = ({ bgUrl }) => {
  return (
    <div
      className={`h-[40vh] w-full bg-cover bg-center ${
        bgUrl ? "" : "bg-gray-200"
      }`}
      style={bgUrl ? { backgroundImage: `url(${bgUrl})` } : {}}
      aria-label="Hero Section"
    ></div>
  );
};

export default V22Hero;
