import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  bgUrl: string;
  settings: {
    colors?: {
      backgroundColor?: string;
      titleColor?: string;
      subtitleColor?: string;
      imageBackgroundColor?: string;
    };
    typography?: {
      fontSize?: string;
      fontFamily?: {
        title?: string;
        subtitle?: string;
      };
    };
  };
}

const HeroActionrightPictureLeft: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  bgUrl,
  settings,
}) => {
  const backgroundColor = settings?.colors?.backgroundColor || "#ffffff";
  const titleColor = settings?.colors?.titleColor || "#333333";
  const subtitleColor = settings?.colors?.subtitleColor || "#333333";
  const imageBackgroundColor =
    settings?.colors?.imageBackgroundColor || "#ffffff";

  const fontSize = settings?.typography?.fontSize || "20px";
  const fontFamily = settings?.typography?.fontFamily || {};
  const titleFont = fontFamily.title || "Roboto";
  const subtitleFont = fontFamily.subtitle || "Roboto";

  return (
    <div
      className="relative flex w-full justify-between h-[50vh] shadow-[#333] shadow-2xl"
      style={{ backgroundColor }}
    >
      {/* Left Section for the Image */}
      <div
        className="h-full w-1/2 flex justify-center items-center overflow-hidden "
        style={{
          backgroundImage: `url(${bgUrl})`,
          backgroundSize: "contain", // Ensure the image fits within the container
          backgroundRepeat: "no-repeat", // Prevent tiling
          backgroundPosition: "center", // Center the image
          backgroundColor: `${imageBackgroundColor}`,
        }}
      ></div>

      {/* Right Section for Text */}
      <div className="h-full w-1/2 text-center flex flex-col justify-center items-center">
        <h1
          style={{
            fontSize,
            color: titleColor,
            fontFamily: titleFont,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            color: subtitleColor,
            fontFamily: subtitleFont,
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default HeroActionrightPictureLeft;
