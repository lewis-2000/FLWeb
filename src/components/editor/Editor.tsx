// import React from "react";
import EditorPanel from "./EditorPanel";
import Preview from "./Preview";
// import TemplateList from "./TemplateList";

const Editor = () => {
  return (
    <div className="h-screen w-screen bg-gray-300 overflow-hidden flex">
      {/* Editor Panel */}
      <div className="w-1/4 h-full bg-gray-200 border-r border-gray-400">
        <EditorPanel />
      </div>

      {/* Live Preview */}
      <div className="w-3/4 h-full bg-gray-100">
        <Preview />
      </div>
    </div>
  );
};

export default Editor;
