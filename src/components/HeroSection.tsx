// components/HeroSection.tsx
import React from "react";

interface HeroSectionProps {
    title: string;
    subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
    return (
        <section>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </section>
    );
};

export default HeroSection;
