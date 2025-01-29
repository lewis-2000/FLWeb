import React from "react";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import { FaCircleArrowDown } from "react-icons/fa6";

const ProjectShowcase: React.FC = () => {
  return (
    <div>
      {/* Projects Section */}
      <div className="flex flex-col items-center mt-24">
        <h2 className="text-sm text-black font-light">Projects!</h2>
        <FaCircleArrowDown
          size={24}
          className="text-orange-500 hover:text-orange-300 transition-all duration-200"
        />
      </div>

      {/* Project Previews with Alternating Layout */}
      <div className="flex flex-col items-center gap-12 mt-12 p-3">
        {/* iPhone 8 (Left-Aligned Description) */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full">
          <div className="md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold">iPhone 8</h3>
            <p className="text-sm text-gray-600">
              A mobile preview of our SuperEats project.
            </p>
          </div>
          {/* Desktop: Device Frame | Mobile: Scaled Image */}
          <div className="w-full md:w-auto">
            <div className="hidden md:block">
              <DeviceFrameset device="iPhone 8" color="gold">
                <img
                  src="/FLWeb/v25/SuperEats.jpg"
                  alt="Project Screenshot"
                  className="w-full h-full object-cover"
                />
              </DeviceFrameset>
            </div>
            <div className="block md:hidden">
              <img
                src="/FLWeb/v25/SuperEats.jpg"
                alt="Project Screenshot"
                className="w-full max-w-xs mx-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* MacBook Pro (Right-Aligned Description) */}
        <div className="flex flex-col md:flex-row-reverse md:justify-between items-center md:items-start gap-2 w-full">
          <div className="md:w-1/3 text-center ">
            <h3 className="text-lg font-semibold">MacBook Pro</h3>
            <p className="text-sm text-gray-600">
              A desktop view showcasing our project in a larger format.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <div className="hidden md:block relative -left-24">
              <DeviceFrameset device="MacBook Pro" color="silver">
                <img
                  src="/FLWeb/v25/SuperEats.jpg"
                  alt="Project Screenshot"
                  className="w-full h-full object-cover"
                />
              </DeviceFrameset>
            </div>
            <div className="block md:hidden">
              <img
                src="/FLWeb/v25/SuperEats.jpg"
                alt="Project Screenshot"
                className="w-full max-w-md mx-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Samsung Galaxy S5 (Left-Aligned Description) */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full">
          <div className="md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold">Samsung Galaxy S5</h3>
            <p className="text-sm text-gray-600">
              An alternative mobile preview for different screen dimensions.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <div className="hidden md:block">
              <DeviceFrameset device="Samsung Galaxy S5" color="black">
                <img
                  src="/FLWeb/v25/SuperEats.jpg"
                  alt="Project Screenshot"
                  className="w-full h-full object-cover"
                />
              </DeviceFrameset>
            </div>
            <div className="block md:hidden">
              <img
                src="/FLWeb/v25/SuperEats.jpg"
                alt="Project Screenshot"
                className="w-full max-w-xs mx-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
