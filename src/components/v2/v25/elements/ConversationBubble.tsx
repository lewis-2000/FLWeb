import React from "react";

interface ConversationBubbleProps {
  text: string;
  imageUrl: string;
  orientation: "left" | "right";
  bgColorStart: string;
  bgColorEnd: string;
  textColor: string;
}

const ConversationBubble: React.FC<ConversationBubbleProps> = ({
  text,
  imageUrl,
  orientation,
  bgColorStart,
  bgColorEnd,
  textColor,
}) => {
  const isLeft = orientation === "left";
  return (
    <div
      className={`flex items-start ${isLeft ? "" : "flex-row-reverse"} mb-4`}
    >
      <img
        src={imageUrl}
        alt="Profile"
        className="w-10 h-10 rounded-full object-cover self-center"
      />
      <div
        className={`max-w-xs p-4 rounded-2xl text-${textColor} ${
          isLeft ? "ml-3" : "mr-3"
        }`}
        style={{
          background: `linear-gradient(to right, ${bgColorStart}, ${bgColorEnd})`,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default ConversationBubble;
