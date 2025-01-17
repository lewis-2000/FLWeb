import React from "react";

interface V22BackgroundProps {
  heading: string;
  image?: string;
  description: string;
  gridItems: string[];
  settings: {
    layout: {
      textAlignment: string;
    };
    colors: {
      backgroundColor: string;
      headingColor: string;
      subTitleColor: string;
      cardColor: string;
    };
    typography: {
      fontSize: string;
      fontFamily: {
        heading: string;
        body: string;
      };
    };
    spacing: {
      height: string;
      padding: string;
      margin: string;
    };
  };
}

const V22Background: React.FC<V22BackgroundProps> = ({
  heading,
  image,
  description,
  gridItems,
  settings,
}) => {
  return (
    <div
      style={{
        backgroundColor: settings.colors.backgroundColor,
        backgroundImage: image ? `url(${image})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: settings.spacing.height,
        padding: settings.spacing.padding,
        margin: settings.spacing.margin,
        textAlign: settings.layout
          .textAlignment as React.CSSProperties["textAlign"],
      }}
    >
      <h1
        style={{
          color: settings.colors.headingColor,
          fontFamily: settings.typography.fontFamily.heading,
          fontSize: settings.typography.fontSize,
          marginBottom: "1rem",
        }}
      >
        {heading}
      </h1>
      <p
        style={{
          color: settings.colors.subTitleColor,
          fontFamily: settings.typography.fontFamily.body,
          fontSize: "1rem",
          marginBottom: "2rem",
        }}
      >
        {description}
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // Responsive grid
          gap: "1rem",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {gridItems.map((item, index) => (
          <div
            key={index}
            className="h-48 flex items-center justify-center"
            style={{
              backgroundColor: settings.colors.cardColor,
              color: settings.colors.subTitleColor,
              padding: "1rem",
              borderRadius: "8px",
              textAlign: "center",
              fontFamily: settings.typography.fontFamily.body,
              fontSize: "1rem",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default V22Background;
