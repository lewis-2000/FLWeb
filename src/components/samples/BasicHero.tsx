// components/HeroSection.tsx
import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  settings: {
    colors?: { backgroundColor?: string; textColor?: string };
    typography?: { fontSize?: string };
  };
}

const BasicHero: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  settings,
}) => {
  const backgroundColor = settings?.colors?.backgroundColor || "#ffffff";
  const textColor = settings?.colors?.textColor || "#333333";
  const fontSize = settings?.typography?.fontSize;

  // console.log("BasicHero -> Props:", { title, subtitle, settings });
  // console.log("BasicHero -> Font size:", fontSize);

  return (
    <section
      className="h-screen flex flex-col justify-center items-center"
      style={{ backgroundColor, color: textColor }}
    >
      <h1 style={{ fontSize }}>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
};

export default BasicHero;
