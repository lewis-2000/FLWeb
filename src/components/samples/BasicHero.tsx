// components/HeroSection.tsx
import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const BasicHero: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="h-screen flex flex-col justify-center align-middle bg-gray-800 text-white">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
};

export default BasicHero;
