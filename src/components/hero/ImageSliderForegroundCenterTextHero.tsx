import { useEffect, useState } from "react";

type ComponentProps = {
    title: string;
    subtitle: string;
    backgroundImageUrl1: string;
    backgroundImageUrl2: string;
    backgroundImageUrl3: string;
    backgroundImageUrl4: string;
    backgroundImageUrl5: string;

};

const ImageSliderForegroundCenterTextHero: React.FC<ComponentProps> = ({ title, subtitle, backgroundImageUrl1, backgroundImageUrl2, backgroundImageUrl3, backgroundImageUrl4, backgroundImageUrl5 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { image: backgroundImageUrl1, text: "Slide 1" },
        { image: backgroundImageUrl2, text: "Slide 2" },
        { image: backgroundImageUrl3, text: "Slide 3" },
        { image: backgroundImageUrl4, text: "Slide 4" },
        { image: backgroundImageUrl5, text: "Slide 5" },
    ];

    // console.log("Slides Array:", slides.map((slide) => slide.image));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="relative h-screen overflow-hidden">
            {/* Background Slider */}
            <div className="absolute top-0 left-0 w-full h-full flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="relative h-full w-full flex-shrink-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                        }}
                    >
                        {/* Debugging Image */}
                        <img
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            className="hidden"
                            onError={() => console.error(`Failed to load image: ${slide.image}`)}
                        />
                        {/* Dimming Layer */}
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    </div>
                ))}
            </div>

            {/* Foreground Static Text */}
            <div className="absolute inset-0 flex items-center justify-center text-white z- p-2">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-4">{title}</h1>
                    <p className="text-xl">{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default ImageSliderForegroundCenterTextHero;
