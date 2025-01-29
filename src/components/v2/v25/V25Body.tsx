import React from "react";
import ProjectShowcase from "./elements/ProjectShowcase";

import ConversationBubble from "./elements/ConversationBubble";

const V25Body: React.FC = () => {
  return (
    <div className="min-h-screen ml-[25%] bg-white overflow-x-hidden">
      <h1 className="text-center text-xl font-bold">V25Body</h1>

      {/* Conversation Bubbles */}
      <div className="px-[10%] py-8 space-y-6">
        <ConversationBubble
          text="Welcome to our new website!"
          imageUrl="/FLWeb/fieldVector.png"
          orientation="left"
          bgColorEnd="#8d1f1f"
          bgColorStart="#000000"
          textColor="white"
        />

        <ConversationBubble
          text="Excited to have you here!"
          imageUrl="/FLWeb/mosaic.png"
          orientation="right"
          bgColorEnd="#8d1f1f"
          bgColorStart="#000000"
          textColor="white"
        />
      </div>

      {/* Project Showcase */}
      <ProjectShowcase />
    </div>
  );
};

export default V25Body;
