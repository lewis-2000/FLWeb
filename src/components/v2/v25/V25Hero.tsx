import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaGithub,
} from "react-icons/fa";

const V25Hero: React.FC = () => {
  return (
    <div className="flex h-screen ml-[calc(1/5*100%)]">
      {/* Hero Section */}
      <div className="flex-1 flex justify-center items-center bg-[#ffffff] text-black py-8 relative">
        <div className="w-full h-full flex justify-center items-center">
          {/* Icons placed randomly */}
          <FaReact
            className="text-gray-500 hover:text-orange-500 absolute"
            style={{
              fontSize: "8vw",
              top: "10%",
              left: "20%",
            }}
          />
          <FaNodeJs
            className="text-gray-500 hover:text-orange-500 absolute"
            style={{
              fontSize: "8vw",
              top: "20%",
              left: "70%",
            }}
          />
          <FaCss3Alt
            className="text-gray-500 hover:text-orange-500 absolute"
            style={{
              fontSize: "8vw",
              top: "75%",
              left: "40%",
            }}
          />
          <FaHtml5
            className="text-gray-500 hover:text-orange-500 absolute"
            style={{
              fontSize: "8vw",
              top: "80%",
              left: "10%",
            }}
          />
          <FaGithub
            className="text-gray-500 hover:text-orange-500 absolute"
            style={{
              fontSize: "8vw",
              top: "50%",
              left: "70%",
            }}
          />

          {/* Rectangle with small orange box */}
          <div className="relative sm:w-[40%] w-[80%] p-6 bg-gray-100 rounded-lg shadow-md">
            {/* Small Orange Box */}
            <div
              className="absolute h-8 w-8 bg-[#ff5600] rounded-full"
              style={{
                top: "-50%", // Align vertically
                left: "-50%", // Align horizontally
              }}
            ></div>

            {/* Text Content */}
            <div className="text-left font-mono text-lg leading-relaxed">
              <div>
                &lt;<span className="text-[#ff5600]">Hi, I'm Brice</span>! /&gt;
              </div>
              <div>
                &lt;I <span className="text-[#ff5600]">design ✍️</span> and{" "}
                <span className="text-[#ff5600]">develop 💻</span>&gt;
              </div>
              <div>
                &lt;web <span className="text-[#ff5600]">sites</span>. /&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default V25Hero;
