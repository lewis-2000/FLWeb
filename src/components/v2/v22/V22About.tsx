import React from "react";

interface AboutProps {
  name?: string;
  about?: string;
  image?: string;
  settings?: {
    layout?: {
      textAlignment?: React.CSSProperties["textAlign"];
    };
    colors?: {
      backgroundColor?: string;
      nameColor?: string;
      titleColor?: string;
      bodyColor?: string;
    };
    typography?: {
      fontSize?: string;
      fontFamily?: {
        name?: string;
        title?: string;
        body?: string;
      };
    };
    spacing?: {
      height?: string;
      padding?: string;
    };
  };
}

const V22About: React.FC<AboutProps> = ({ name, about, image, settings }) => {
  const textAlignment = settings?.layout?.textAlignment || "center";
  const backgroundColor = settings?.colors?.backgroundColor || "#ffffff";
  const nameColor = settings?.colors?.nameColor || "#ac4726";
  const titleColor = settings?.colors?.titleColor || "#7c8034";
  const bodyColor = settings?.colors?.bodyColor || "#333333";
  const fontSize = settings?.typography?.fontSize || "16px";
  const nameFont = settings?.typography?.fontFamily?.name || "Pacifico";
  const titleFont = settings?.typography?.fontFamily?.title || "Jersey 15";
  const bodyFont = settings?.typography?.fontFamily?.body || "Lato";
  const height = settings?.spacing?.height || "auto";
  const padding = settings?.spacing?.padding || "1rem";

  name = name || "John Doe";
  about =
    about ||
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.";
  image = image || "/FLWeb/defaults/defaultImage.png";

  return (
    <div
      className={`w-full flex flex-col items-center`}
      style={{
        backgroundColor,
        textAlign: textAlignment,
        padding,
        height,
      }}
    >
      {/* Name + Bio Section */}
      <div
        className="text-center mb-4"
        style={{
          color: nameColor,
          fontSize,
          fontFamily: nameFont,
        }}
      >
        {name} Bio
      </div>

      {/* About + Name Section */}
      <div
        className="text-center mb-4"
        style={{
          color: titleColor,
          fontFamily: titleFont,
        }}
      >
        About {name}
      </div>

      {/* Image + Body Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-10/12 lg:w-8/12 gap-6">
        {/* Image Box */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div
            className="w-32 h-32 md:w-full md:h-auto md:aspect-square bg-cover bg-center rounded-lg outline-black outline-2 shadow-md"
            style={{
              background: `url(${image}), rgba(0, 0, 0, 0.1)`,
            }}
          ></div>
        </div>

        {/* Body Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p
            className="text-justify"
            style={{
              color: bodyColor,
              fontFamily: bodyFont,
            }}
          >
            {about}
          </p>
        </div>
      </div>
    </div>
  );
};

export default V22About;
