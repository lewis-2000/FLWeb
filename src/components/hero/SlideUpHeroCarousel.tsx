import { useState, useEffect } from 'react';

interface HeroContent {
  text: string;
  backgroundImage: string;
}

interface HeroProps {
  content: HeroContent[];
  intervalTime?: number; // Optional, default value will be provided
}

const SlideUpHeroCarousel: React.FC<HeroProps> = ({ content, intervalTime = 5000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [content, intervalTime]);

  return (
    <div className="relative w-full h-screen overflow-hidden z-10">
      {content.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ${
            index === activeIndex ? 'translate-y-0' : 'translate-y-full'
          }`}
          style={{ backgroundImage: `url(${item.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Overlay */}
          <div className="absolute bottom-8 left-8 text-white z-10">
            <h1 className="text-4xl md:text-6xl font-bold">{item.text}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlideUpHeroCarousel;
