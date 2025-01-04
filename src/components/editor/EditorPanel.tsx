import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { toggleEditorPanel } from "../../store/slices/interactionsSlice";
import TemplateManagerAPI from "../../modules/templateManagerAPI";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const EditorPanel: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const isCollapsed = useSelector(
    (state: RootState) => state.interactions.isEditorPanelCollapsed
  );

  const selectedTemplateId = useSelector(
    (state: RootState) => state.template.selectedTemplateId
  );

  const selectedTemplate = selectedTemplateId
    ? TemplateManagerAPI.getTemplate(selectedTemplateId)
    : undefined;

  const components = selectedTemplate?.components || [];

  // Log component data for debugging purposes
  const componentData = components.map((components) => components.data);
  console.log("EditorPanel - component data: ", componentData);

  //Log component settings for debug purposes
  const componentSettings = components.map((components) => components.settings);
  console.log("EditorPanel - component settings: ", componentSettings);

  return (
    <div className="flex flex-col h-full bg-[#ededed]">
      {/* Status Section */}
      <div className="w-full h-[7%] border-b-2 p-3 flex items-center text-gray-700 text-lg font-semibold">
        {!isCollapsed && "Status"}
      </div>

      {/* Content Editing Section Placeholder */}
      {!isCollapsed && (
        <div className="flex-grow w-full p-3 text-gray-700 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-3">Edit Template</h2>
          <p className="text-sm text-gray-600 mb-3">
            {selectedTemplate ? selectedTemplate.name : "No template selected"}
          </p>
          <div className="space-y-3">
            {components.map((component, index) => (
              <div
                key={index}
                className="text-sm text-gray-700 flex flex-col space-y-2"
              >
                <p>
                  Component {index + 1}: {component.component.name}
                </p>

                {/* Data */}
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    value={component.data.title || ""}
                    onChange={(e) => {
                      // Handle updates here
                      console.log("New Title: ", e.target.value);
                    }}
                    className="border rounded p-1"
                  />
                </div>

                {/* Settings */}
                <div className="flex flex-col gap-2">
                  <label htmlFor={`settings-${index}-color`}>
                    Color:
                    <input
                      type="color"
                      className="rouded-full"
                      id={`settings-${index}-color`}
                      value={
                        component.settings?.colors?.backgroundColor || "#000000"
                      }
                      onChange={(e) => {
                        // Handle updates here
                        console.log("New Color: ", e.target.value);
                      }}
                    />
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer Section */}
      <div className="w-full h-[9%] border-t-2 p-3 flex justify-between items-center bg-gray-100">
        {/* Collapse/Expand Section */}
        <div
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
          onClick={() => dispatch(toggleEditorPanel())}
        >
          {isCollapsed ? (
            <IoIosArrowDropright className="text-xl" />
          ) : (
            <IoIosArrowDropleft className="text-xl" />
          )}
          {!isCollapsed && <p className="text-sm font-medium">Collapse</p>}
        </div>
      </div>
    </div>
  );
};

export default EditorPanel;
