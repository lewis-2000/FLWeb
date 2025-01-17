import React from "react";

interface V22QuoteProps {
  quote: string;
  author: string;
  image?: string;
  settings: {
    layout: {
      textAlignment: string;
    };
    colors: {
      backgroundColor: string;
      textColor: string;
      authorColor: string;
    };
    typography: {
      fontSize: string;
      fontFamily: {
        quote: string;
        author: string;
      };
    };
    spacing: {
      padding: string;
      margin: string;
    };
  };
}

const V22Quote: React.FC<V22QuoteProps> = ({
  quote,
  author,
  image,
  settings,
}) => {
  return (
    <div
      style={{
        backgroundColor: settings.colors.backgroundColor,
        backgroundImage: image ? `url(${image})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: settings.colors.textColor,
        textAlign: settings.layout
          .textAlignment as React.CSSProperties["textAlign"],
        padding: settings.spacing.padding,
        margin: settings.spacing.margin,
      }}
    >
      <p
        style={{
          fontSize: settings.typography.fontSize,
          fontFamily: settings.typography.fontFamily.quote,
          marginBottom: "0.5rem",
        }}
      >
        {quote}
      </p>
      <p
        style={{
          color: settings.colors.authorColor,
          fontFamily: settings.typography.fontFamily.author,
          fontSize: "1rem",
        }}
      >
        - {author}
      </p>
    </div>
  );
};

export default V22Quote;
