import React from "react";

const EditorPanel = () => {
  return (
    <div className="flex flex-col w-full h-full bg-[#ededed]">
      <div className="w-full h-[7%] border-2 p-3">Status</div>
      <div className="flex-grow h-auto w-full p-3">Content Editing</div>
      <div className="w-full h-[7%] border-2 p-3">Menus</div>
    </div>
  );
};

export default EditorPanel;
