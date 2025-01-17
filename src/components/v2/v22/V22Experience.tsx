import React from "react";

interface ExperienceProps {
  heading: string;
  image?: string;
  experience1: string;
  experience2: string;
  experience3: string;
  experience4: string;
  experience5: string;
  settings: {
    colors?: {
      backgroundColor?: string;
      headingColor?: string;
      subTitleColor?: string;
      cardColor?: string;
    };
    layout?: {
      textAlignment?: string;
    };
    typography?: {
      fontSize?: string;
      fontFamily?: {
        heading?: string;
        subTitle?: string;
        body?: string;
      };
    };
    spacing?: {
      height?: string;
      padding?: string;
      margin?: string;
    };
  };
}

const V22Experience: React.FC<ExperienceProps> = ({
  heading,
  image,
  experience1,
  experience2,
  experience3,
  experience4,
  experience5,
  settings,
}) => {
  const backgroundColor = settings?.colors?.backgroundColor || "#ffffff";
  const headingColor = settings?.colors?.headingColor || "#ac4726";
  const subTitleColor = settings?.colors?.subTitleColor || "#333333";
  const cardColor = settings?.colors?.cardColor || "#ffffff";
  const textAlignment: React.CSSProperties["textAlign"] =
    (settings?.layout?.textAlignment as React.CSSProperties["textAlign"]) ||
    "left";
  const fontSize = settings?.typography?.fontSize || "1rem";
  const fontFamilyHeading =
    settings?.typography?.fontFamily?.heading || "Arial, sans-serif";
  // const fontFamilySubTitle =
  //   settings?.typography?.fontFamily?.subTitle || "Arial, sans-serif";
  const fontFamilyBody =
    settings?.typography?.fontFamily?.body || "Arial, sans-serif";
  const containerHeight = settings?.spacing?.height || "auto";
  const containerPadding = settings?.spacing?.padding || "1rem";
  const containerMargin = settings?.spacing?.margin || "1rem 0";

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        backgroundImage: image ? `url(${image})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: containerHeight,
        padding: containerPadding,
        margin: containerMargin,
        textAlign: textAlignment,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          color: headingColor,
          fontFamily: fontFamilyHeading,
          fontSize: "2rem",
        }}
      >
        {heading}
      </h1>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          width: "80%",
          maxWidth: "600px",
        }}
      >
        {[experience1, experience2, experience3, experience4, experience5].map(
          (experience, index) => (
            <div
              key={index}
              style={{
                backgroundColor: cardColor,
                color: subTitleColor,
                padding: "2rem",
                borderRadius: "12px",
                fontFamily: fontFamilyBody,
                fontSize: fontSize,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              {experience}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default V22Experience;
