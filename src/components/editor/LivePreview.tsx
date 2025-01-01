import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { backToList } from "../../store/slices/templateSlice";
import Base from "../../Base";

const LivePreview = () => {
  const dispatch = useDispatch();
  const selectedTemplateId = useSelector(
    (state: RootState) => state.template.selectedTemplateId
  );

  console.log("LivePreview.tsx: ", selectedTemplateId);

  return (
    <div className="h-full flex flex-col">
      <button
        onClick={() => dispatch(backToList())}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back to Template List
      </button>
      <div className="flex-1 bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {selectedTemplateId && <Base id={selectedTemplateId} />}
        </h2>
      </div>
    </div>
  );
};

export default LivePreview;
