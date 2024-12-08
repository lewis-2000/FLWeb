import { useEffect, useState } from "react";

interface HeroProps {
    title: string;
    subtitle: string;
    backgroundImages: string[];
}

const ImageSliderForegroundCenterTextHero: React.FC<HeroProps> = ({ title, subtitle, backgroundImages }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    return (
        <div className="relative h-screen overflow-hidden">
            {/* Background Slider */}
            <div
                className="absolute top-0 left-0 w-full h-full flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {backgroundImages.map((image, index) => (
                    <div
                        key={index}
                        className="relative h-full w-full flex-shrink-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                    >
                        {/* Hidden Image for Debugging */}
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="hidden"
                            onError={() => console.error(`Failed to load image: ${image}`)}
                        />
                        {/* Dimming Layer */}
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    </div>
                ))}
            </div>

            {/* Foreground Static Text */}
            <div className="absolute inset-0 flex items-center justify-center text-white z-10 p-2">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-4">{title}</h1>
                    <p className="text-xl">{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default ImageSliderForegroundCenterTextHero;
