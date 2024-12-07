import React from 'react';

type heroContentProps = {
    title: string,
    subtitle: string,
    text: string,
    imageUrl: string,
    bgColor: string,
};

const ImageLeftTextRight: React.FC<heroContentProps> = ({
    title,
    subtitle,
    imageUrl,
    text,
    bgColor,
}) => {

    return (
        <div className={`bg-${bgColor} bg-cream w-full min-h-screen flex justify-center items-center overflow-hidden`}>
            <div className="flex flex-col w-full md:flex-row p-2">
                {/* Image container - Image on the left for desktop */}
                <div className="md:w-1/2 w-full">
                    <img src={imageUrl} alt="Hero" className="w-full h-auto" />
                </div>

                {/* Text container - Text on the right for desktop, but behind on mobile */}
                <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:z-0 z-10 order-1 md:order-2">
                    <h1 className="text-6xl md:text-9xl text-center font-bold text-gray-800 mb-4 animate-slide-in">
                        {title}
                    </h1>
                    <h2 className="text-2xl font-semibold text-gray-600 mb-2 text-center animate-fade-in-up">
                        {subtitle}
                    </h2>
                    <p className="text-lg text-gray-400 text-center p-4 animate-fade-in-up">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ImageLeftTextRight;
