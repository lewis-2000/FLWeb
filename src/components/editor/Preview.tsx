import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import TemplateList from "./TemplateList";
import LivePreview from "./LivePreview";

const Preview = () => {
  const currentView = useSelector(
    (state: RootState) => state.template.currentView
  );

  return (
    <div className="bg-[#181d23] w-full h-full px-3 pt-3 overflow-y-auto">
      {currentView === "templateList" ? <TemplateList /> : <LivePreview />}
    </div>
  );
};

export default Preview;
