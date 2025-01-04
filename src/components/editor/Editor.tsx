import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setEditDone } from "../../store/slices/interactionsSlice";
import EditorPanel from "./EditorPanel";
import Preview from "./Preview";

const Editor: React.FC = () => {
  const dispatch = useDispatch();
  const isCollapsed = useSelector(
    (state: RootState) => state.interactions.isEditorPanelCollapsed
  );
  const editDone = useSelector(
    (state: RootState) => state.interactions.editDone
  );

  // Reset the editDone flag after it triggers a re-render
  useEffect(() => {
    if (editDone) {
      dispatch(setEditDone(false));
    }
  }, [editDone, dispatch]);

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
        className={`${isCollapsed ? "flex-grow" : "w-3/4"} h-full bg-gray-100`}
      >
        <Preview key={editDone ? Date.now() : undefined} />
      </div>
    </div>
  );
};

export default Editor;
