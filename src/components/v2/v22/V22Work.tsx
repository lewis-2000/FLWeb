import React from "react";

interface WorkProps {
  title: string;
  heading: string;
  settings: {
    colors?: {
      backgroundColor?: string;
      headingColor?: string;
      titleColor?: string;
    };
    layout?: {
      textAlignment?: string;
    };
    typography?: {
      fontSize?: string;
      fontFamily?: {
        heading?: string;
        title?: string;
      };
    };
    spacing?: {
      height?: string;
      padding?: string;
      margin?: string;
    };
  };
}

const V22Work: React.FC<WorkProps> = ({ title, heading, settings }) => {
  const backgroundColor = settings?.colors?.backgroundColor || "#ffffff";
  const headingColor = settings?.colors?.headingColor || "#ac4726";
  const titleColor = settings?.colors?.titleColor || "#333333";
  const textAlignment: React.CSSProperties["textAlign"] =
    (settings?.layout?.textAlignment as React.CSSProperties["textAlign"]) ||
    "center";
  const fontSize = settings?.typography?.fontSize || "16px";
  const fontFamily = settings?.typography?.fontFamily || {};
  const headingFont = fontFamily.heading || "Pacifico";
  const titleFont = fontFamily.title || "Jersey 15";
  const height = settings?.spacing?.height || "auto";
  const padding = settings?.spacing?.padding || "1rem";
  const margin = settings?.spacing?.margin || "0";

  return (
    <div
      className={`w-full flex flex-col items-center`}
      style={{
        backgroundColor,
        // textAlignment: textAlignment,
        padding,
        height,
        margin,
      }}
    >
      <h3 style={{ color: headingColor, fontFamily: headingFont }}>
        {heading}
      </h3>

      <div className="flex flex-col items-center justify-center h-full w-full">
        <h1
          style={{
            color: titleColor,
            fontSize,
            fontFamily: titleFont,
            textAlign: textAlignment,
          }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default V22Work;
