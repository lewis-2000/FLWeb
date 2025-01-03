import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import EditorPanel from "./EditorPanel";
import Preview from "./Preview";

const Editor = () => {
  const isCollapsed = useSelector(
    (state: RootState) => state.interactions.isEditorPanelCollapsed
  );

  return (
    <div className="h-screen w-screen bg-gray-300 overflow-hidden flex">
      {/* Editor Panel */}
      <div
        className={`${
          isCollapsed ? "w-fit" : "w-1/4"
        } h-full bg-gray-200 border-r border-gray-400 transition-all duration-100 overflow-hidden`}
      >
        <EditorPanel />
      </div>

      {/* Live Preview */}
      <div
        className={`${isCollapsed ? "flex-grow" : "w-3/4"} h-full bg-gray-100 `}
      >
        <Preview />
      </div>
    </div>
  );
};

export default Editor;
