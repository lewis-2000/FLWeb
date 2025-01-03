/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState, useEffect } from "react";
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

  const templateName = selectedTemplate
    ? selectedTemplate.name
    : "No template selected";

  const components = selectedTemplate?.components || [];

  // Local state to manage editable data
  const [editData, setEditData] = useState<Record<string, any>>({});

  // Initialize editData with component data
  useEffect(() => {
    if (selectedTemplate) {
      const initialData = selectedTemplate.components.reduce(
        (acc, component, index) => ({
          ...acc,
          [index]: component.data || {},
        }),
        {}
      );
      setEditData(initialData);
    }
  }, [selectedTemplate]);

  const updateComponentData = async (
    componentIndex: number,
    key: string,
    value: any
  ) => {
    // Update local editData state
    setEditData((prev) => ({
      ...prev,
      [componentIndex]: {
        ...prev[componentIndex],
        [key]: value,
      },
    }));

    // Update API or Redux state
    if (selectedTemplate) {
      const updatedComponents = selectedTemplate.components.map(
        (component, index) =>
          index === componentIndex
            ? { ...component, data: { ...component.data, [key]: value } }
            : component
      );
      await TemplateManagerAPI.updateTemplate(selectedTemplate.id, {
        components: updatedComponents,
      });
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#ededed]">
      {/* Status Section */}
      <div className="w-full h-[7%] border-b-2 p-3 flex items-center text-gray-700 text-lg font-semibold">
        {!isCollapsed && "Status"}
      </div>

      {/* Content Editing Section */}
      {!isCollapsed && (
        <div className="flex-grow w-full p-3 text-gray-700 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-3">Edit Template</h2>
          <p className="text-sm text-gray-600 mb-3">{templateName}</p>

          {/* Accordion for Component Settings */}
          <div className="space-y-3">
            {components.map((component, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-sm bg-white"
              >
                {/* Accordion Header */}
                <div
                  className="p-3 flex justify-between items-center cursor-pointer bg-gray-200 hover:bg-gray-300"
                  onClick={(e) => {
                    const target = e.currentTarget.nextElementSibling;
                    if (target) {
                      target.classList.toggle("hidden");
                    }
                  }}
                >
                  <h3 className="text-sm font-medium text-gray-800">
                    Component {index + 1}: {component.component.name}
                  </h3>
                  <span className="text-sm text-gray-500">▼</span>
                </div>

                {/* Accordion Content */}
                <div className="hidden p-3 space-y-2">
                  {/* Editable Data Settings */}
                  {Object.entries(editData[index] || {}).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <label
                        className="text-xs text-gray-600 mb-1"
                        htmlFor={`data-${index}-${key}`}
                      >
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </label>
                      <input
                        id={`data-${index}-${key}`}
                        type="text"
                        className="border border-gray-300 rounded p-2 text-sm"
                        value={
                          value as
                            | string
                            | number
                            | readonly string[]
                            | undefined
                        }
                        onChange={(e) =>
                          updateComponentData(index, key, e.target.value)
                        }
                      />
                    </div>
                  ))}

                  {/* Editable Settings */}
                  {component.settings &&
                    Object.entries(component.settings).length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">
                          Component Settings
                        </h4>
                        {Object.entries(component.settings).map(
                          ([key, value]) => (
                            <div key={key} className="flex flex-col">
                              <label
                                className="text-xs text-gray-600 mb-1"
                                htmlFor={`settings-${index}-${key}`}
                              >
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                              </label>
                              <input
                                id={`settings-${index}-${key}`}
                                type="text"
                                className="border border-gray-300 rounded p-2 text-sm"
                                value={value}
                                onChange={(e) =>
                                  updateComponentData(
                                    index,
                                    key,
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          )
                        )}
                      </div>
                    )}
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
