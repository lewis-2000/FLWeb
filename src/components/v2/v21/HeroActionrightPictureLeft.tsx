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
      titleFont?: string;
      subtitleFont?: string;
      fontFamily?: {
        title?: string;
        subtitle?: string;
        body?: string;
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
  const titleFont = fontFamily.title || "Roboto"; // Default font for title
  const subtitleFont = fontFamily.subtitle || "Roboto"; // Default font for subtitle
  //   const bodyFont = fontFamily.body || "Roboto"; // Default font for body (if needed)

  // console.log(titleFont, subtitleFont);

  return (
    <div
      className="flex w-full justify-between h-[40vh]"
      style={{ backgroundColor }}
    >
      <div
        className="h-full w-1/2 flex justify-center items-center overflow-hidden"
        style={{
          backgroundImage: `url(${bgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: `${imageBackgroundColor}`,
        }}
      ></div>
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
