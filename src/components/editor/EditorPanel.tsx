/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { toggleEditorPanel } from "../../store/slices/interactionsSlice";
import TemplateManagerAPI from "../../modules/templateManagerAPI";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

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

  const [components, setComponents] = useState(
    selectedTemplate?.components || []
  );

  // const [settings, setSettings] = useState(selectedTemplate?.components || []  );

  useEffect(() => {
    if (selectedTemplate) {
      setComponents(selectedTemplate.components);
    }
  }, [selectedTemplate]);

  const [expandedComponent, setExpandedComponent] = useState<number | null>(
    null
  );

  const toggleAccordion = (index: number) => {
    setExpandedComponent((prev) => (prev === index ? null : index));
  };

  const handleInputChange = (
    componentIndex: number,
    key: string,
    nestedKey: string | null,
    value: string
  ) => {
    const updatedComponents = [...components];
    if (nestedKey) {
      updatedComponents[componentIndex].data[key][nestedKey] = value;
    } else {
      updatedComponents[componentIndex].data[key] = value;
    }
    setComponents(updatedComponents);

    if (selectedTemplateId) {
      TemplateManagerAPI.updateTemplate(selectedTemplateId, {
        components: updatedComponents,
      });
    }
  };

  const handleSettingChange = (
    componentIndex: number,
    settingsCategory: string,
    key: string,
    value: any
  ) => {
    const updatedComponents = [...components];
    const component = updatedComponents[componentIndex];

    // Ensure settings exists
    if (!component.settings) {
      component.settings = {};
    }

    // Navigate nested settings using the key path
    const keys = key.split(".");
    let target = component.settings[settingsCategory];

    // Traverse to the nested object
    for (let i = 0; i < keys.length - 1; i++) {
      const currentKey = keys[i];
      if (!target[currentKey]) {
        target[currentKey] = {}; // Create nested object if missing
      }
      target = target[currentKey];
    }

    // Set the value at the correct level
    target[keys[keys.length - 1]] = value;

    setComponents(updatedComponents);

    // Update the template with the updated components
    if (selectedTemplateId) {
      TemplateManagerAPI.updateTemplate(selectedTemplateId, {
        components: updatedComponents, // Use updatedComponents instead of components
      });
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#f8f8f8]">
      {/* Status Section */}
      <div className="w-full h-[7%] border-b p-3 flex items-center text-gray-700 text-lg font-semibold">
        {!isCollapsed && (
          <p className="text-sm text-gray-500">
            Powered by{" "}
            <span className="font-bold text-yellow-500">FLEngine</span>
          </p>
        )}
      </div>

      {/* Content Editing Section */}
      {!isCollapsed && (
        <div className="flex-grow w-full p-3 text-gray-700 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-3">Edit Template</h2>
          <p className="text-sm text-gray-600 mb-3">
            {selectedTemplate ? selectedTemplate.name : "No template selected"}
          </p>

          {/* Render Components */}
          {selectedTemplate ? (
            components.map((component, index) => (
              <div key={index} className="mb-4">
                {/* Accordion Header */}
                <div
                  className="flex justify-between items-center bg-gray-200 p-3 rounded cursor-pointer hover:bg-gray-300 transition break-words"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="font-semibold truncate">
                    Component {index + 1}: {component.component.name}
                  </h3>
                  {expandedComponent === index ? (
                    <IoIosArrowUp className="text-lg" />
                  ) : (
                    <IoIosArrowDown className="text-lg" />
                  )}
                </div>

                {/* Accordion Content */}
                {expandedComponent === index && (
                  <div className="mt-3 p-4 bg-gray-100 rounded">
                    {/* Data Inputs */}
                    {Object.entries(component.data).map(([key, value]) =>
                      Array.isArray(value) ? (
                        key === "links" ? (
                          // Special Case for Links Array
                          <div key={key} className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                              Links:
                            </label>
                            {value.map((link, linkIndex) => (
                              <div
                                key={`${key}-${linkIndex}`}
                                className="p-3 mb-3 bg-gray-50 border rounded"
                              >
                                <h4 className="text-sm font-medium mb-2">
                                  Link {linkIndex + 1}
                                </h4>
                                <div className="mb-2">
                                  <label className="block text-sm font-medium mb-1">
                                    Name:
                                  </label>
                                  <input
                                    type="text"
                                    value={link.name || ""}
                                    onChange={(e) =>
                                      handleInputChange(
                                        index,
                                        key,
                                        linkIndex.toString(),
                                        {
                                          ...link,
                                          name: e.target.value,
                                        }
                                      )
                                    }
                                    className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300 transition"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium mb-1">
                                    URL:
                                  </label>
                                  <input
                                    type="text"
                                    value={link.url || ""}
                                    onChange={(e) =>
                                      handleInputChange(
                                        index,
                                        key,
                                        linkIndex.toString(),
                                        {
                                          ...link,
                                          url: e.target.value,
                                        }
                                      )
                                    }
                                    className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300 transition"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          // Handle Arrays Other Than Links
                          <div key={key} className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                              {key.charAt(0).toUpperCase() + key.slice(1)}:
                            </label>
                            {value.map((item, itemIndex) => (
                              <div
                                key={`${key}-${itemIndex}`}
                                className="p-3 mb-3 bg-gray-50 border rounded"
                              >
                                <h4 className="text-sm font-medium mb-2">
                                  Entry {itemIndex + 1}
                                </h4>
                                <input
                                  type="text"
                                  value={String(item) || ""}
                                  onChange={(e) =>
                                    handleInputChange(
                                      index,
                                      key,
                                      itemIndex.toString(),
                                      e.target.value
                                    )
                                  }
                                  className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300 transition"
                                />
                              </div>
                            ))}
                          </div>
                        )
                      ) : typeof value === "object" && value !== null ? (
                        // Handle Other Nested Objects
                        Object.entries(value).map(
                          ([nestedKey, nestedValue]) => (
                            <div key={`${key}.${nestedKey}`} className="mb-4">
                              <label className="block text-sm font-medium mb-1">
                                {`${
                                  key.charAt(0).toUpperCase() + key.slice(1)
                                } - ${
                                  nestedKey.charAt(0).toUpperCase() +
                                  nestedKey.slice(1)
                                }:`}
                              </label>
                              <input
                                type="text"
                                value={String(nestedValue) || ""}
                                onChange={(e) =>
                                  handleInputChange(
                                    index,
                                    key,
                                    nestedKey,
                                    e.target.value
                                  )
                                }
                                className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300 transition"
                              />
                            </div>
                          )
                        )
                      ) : (
                        // Handle Primitive Values
                        <div key={key} className="mb-4">
                          <label className="block text-sm font-medium mb-1">
                            {key.charAt(0).toUpperCase() + key.slice(1)}:
                          </label>
                          <input
                            type="text"
                            value={String(value) || ""}
                            onChange={(e) =>
                              handleInputChange(
                                index,
                                key,
                                null,
                                e.target.value
                              )
                            }
                            className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300 transition"
                          />
                        </div>
                      )
                    )}

                    {/* Settings */}
                    {component.settings && (
                      <div className="mt-4 border border-gray-300 rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium mb-4 text-lg">
                          Component Settings
                        </h4>

                        {/* Render Nested Settings */}
                        {Object.entries(component.settings).map(
                          ([category, settings]) => (
                            <div
                              key={category}
                              className="mb-6 border-b border-gray-200 pb-4 last:border-none"
                            >
                              <h5 className="font-semibold mb-3 text-base capitalize">
                                {category}
                              </h5>

                              {/* Colors Settings */}
                              {category === "colors" &&
                              typeof settings === "object" ? (
                                <div className="space-y-4">
                                  {Object.entries(settings).map(
                                    ([key, value]) => (
                                      <div key={key} className="mb-2">
                                        <label className="block text-sm mb-1">
                                          {key.charAt(0).toUpperCase() +
                                            key.slice(1)}
                                          :
                                        </label>
                                        <input
                                          type="color"
                                          value={value}
                                          onChange={(e) =>
                                            handleSettingChange(
                                              index,
                                              category,
                                              key,
                                              e.target.value
                                            )
                                          }
                                          className="w-12 h-12 cursor-pointer border border-gray-300 rounded-md"
                                        />
                                      </div>
                                    )
                                  )}
                                </div>
                              ) : null}

                              {/* Typography Settings */}
                              {category === "typography" &&
                              typeof settings === "object" ? (
                                <div className="space-y-4">
                                  {/* Font Family */}
                                  {settings.fontFamily &&
                                    typeof settings.fontFamily === "object" && (
                                      <div>
                                        <h6 className="font-medium mb-2 text-sm">
                                          Font Family
                                        </h6>
                                        {Object.entries(
                                          settings.fontFamily
                                        ).map(([key, value]) => (
                                          <div key={key} className="mb-2">
                                            <label className="block text-sm mb-1">
                                              {key.charAt(0).toUpperCase() +
                                                key.slice(1)}
                                              :
                                            </label>
                                            <input
                                              type="text"
                                              value={value as string}
                                              onChange={(e) =>
                                                handleSettingChange(
                                                  index,
                                                  category,
                                                  `fontFamily.${key}`,
                                                  e.target.value
                                                )
                                              }
                                              className="border rounded p-2 w-full"
                                              placeholder={`Enter font for ${key}`}
                                            />
                                          </div>
                                        ))}
                                      </div>
                                    )}

                                  {/* Font Size */}
                                  {settings.fontSize && (
                                    <div>
                                      <label className="block text-sm mb-1">
                                        Font Size (px):
                                      </label>
                                      <input
                                        type="number"
                                        value={
                                          parseInt(
                                            settings.fontSize as string
                                          ) || ""
                                        }
                                        onChange={(e) =>
                                          handleSettingChange(
                                            index,
                                            category,
                                            "fontSize",
                                            `${e.target.value}px`
                                          )
                                        }
                                        className="border rounded p-2 w-full"
                                        min="8"
                                        max="100"
                                        step="1"
                                      />
                                    </div>
                                  )}
                                </div>
                              ) : null}

                              {/* Other Categories */}
                              {typeof settings === "object" &&
                                category !== "colors" &&
                                category !== "typography" &&
                                Object.entries(settings).map(([key, value]) => (
                                  <div key={key} className="mb-2">
                                    <label className="block text-sm mb-1">
                                      {key.charAt(0).toUpperCase() +
                                        key.slice(1)}
                                      :
                                    </label>
                                    <input
                                      type={key === "color" ? "color" : "text"}
                                      value={value.toString()}
                                      onChange={(e) =>
                                        handleSettingChange(
                                          index,
                                          category,
                                          key,
                                          e.target.value
                                        )
                                      }
                                      className="border rounded p-2 w-full"
                                      placeholder={`Enter value for ${key}`}
                                    />
                                  </div>
                                ))}
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="w-full  flex justify-center items-center">
              <img
                src="/editor/web.png"
                alt="Lion Crown"
                className="object-contain"
              />
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="w-full h-[9%] border-t p-3 flex justify-between items-center bg-gray-100">
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
