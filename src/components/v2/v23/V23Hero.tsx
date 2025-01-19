import React from "react";

interface HeroProps {
  heading: string;
  title: string;
  subtitle: string;
  bgUrl: string;
  settings: {
    colors: {
      backgroundColor: string;
      titleColor: string;
      subtitleColor: string;
    };
    layout: {
      textAlignment: string;
    };
    typography: {
      fontSize: string;
      fontFamily: {
        heading: string;
        title: string;
        subtitle: string;
      };
    };
    spacing: {
      padding: string;
      gap: string;
    };
  };
}

const V23Hero: React.FC<HeroProps> = ({
  heading,
  title,
  subtitle,
  bgUrl,
  settings,
}) => {
  const { colors, layout, typography, spacing } = settings;

  return (
    <div
      className="v23-hero relative h-screen w-full flex justify-center items-center"
      style={{
        backgroundColor: colors.backgroundColor, // Background color from props
      }}
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center"
        style={{
          textAlign: layout.textAlignment as React.CSSProperties["textAlign"], // Text alignment from props
          gap: spacing.gap, // Gap between elements
          padding: spacing.padding, // Padding around content
        }}
      >
        <h1
          className="font-bold"
          style={{
            fontSize: typography.fontSize, // Font size from props
            fontFamily: typography.fontFamily.heading, // Heading font family
            color: colors.titleColor, // Heading color
          }}
        >
          {heading}
        </h1>
        <h2
          style={{
            fontSize: typography.fontSize,
            fontFamily: typography.fontFamily.title, // Title font family
            color: colors.titleColor, // Title color
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: typography.fontSize,
            fontFamily: typography.fontFamily.subtitle, // Subtitle font family
            color: colors.subtitleColor, // Subtitle color
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default V23Hero;
