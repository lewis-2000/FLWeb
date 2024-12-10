import React from "react";
import { ClipLoader } from "react-spinners";

interface LoadingScreenProps {
    message?: string;
    size?: number; // Spinner size
    color?: string; // Spinner color
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
    message = "Loading...",
    size = 50,
    color = "#F59E0B", // Tailwind Yellow-500
}) => {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-900 text-white">
            <div className="flex flex-col items-center">
                <ClipLoader size={size} color={color} />
                <p className="text-xl mt-6 font-semibold text-yellow-500">{message}</p>
            </div>
            <footer className="absolute bottom-4">
                <p className="text-sm text-gray-500">
                    Powered by{" "}
                    <span className="font-bold text-yellow-500">
                        FLEngine
                    </span>
                </p>
            </footer>
        </div>
    );
};

export default LoadingScreen;
