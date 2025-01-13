import React, { useEffect, useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdCodeDownload,
  IoMdListBox,
} from "react-icons/io";
import TemplateManagerAPI from "../../modules/templateManagerAPI";
import Base from "../../Base";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { selectTemplate } from "../../store/slices/templateSlice";

const ContentEditor: React.FC = () => {
  const templates = TemplateManagerAPI.getAllTemplates();
  const dispatch = useDispatch();

  const selectedTemplateId = useSelector(
    (state: RootState) => state.template.selectedTemplateId
  );

  console.log(templates.map((template) => template.id));
  console.log(selectedTemplateId);

  // console.log(templates);

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
    value: string
  ) => {
    const updatedComponents = [...components];
    const component = updatedComponents[componentIndex];

    // Ensure settings exists
    if (!component.settings) {
      component.settings = {};
    }

    if (!component.settings[settingsCategory]) {
      component.settings[settingsCategory] = {};
    }
    component.settings[settingsCategory][key] = value;

    setComponents(updatedComponents);
    // console.log("Updated components: ", updatedComponents);
    // console.log("Nested key: ", settingsCategory);
    // console.log("Value: ", value);
    // console.log("Component index: ", componentIndex);
    // console.log("Key: ", key);

    // Update the template with the updated components
    if (selectedTemplateId) {
      TemplateManagerAPI.updateTemplate(selectedTemplateId, {
        components: updatedComponents, // Use updatedComponents instead of components
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Header Section */}
      <header className="col-span-full flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <IoMdListBox /> Editor
        </h1>
        <div className="flex items-center gap-4">
          {/* Group Selector */}
          <select
            className="p-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            defaultValue="base-02"
            onChange={(e) => dispatch(selectTemplate(e.target.value))}
          >
            {templates.map((template) => (
              <option key={template.id} value={template.id}>
                {template.id}
              </option>
            ))}
          </select>

          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2">
            <IoMdCodeDownload size={20} />
            Config File
          </button>
        </div>
      </header>

      {/* Input Fields Section */}
      <section className="bg-white p-6 rounded-lg shadow-md h-[81vh] overflow-auto">
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
                      <div className="mt-4">
                        <h4 className="font-medium mb-2">Settings</h4>

                        {/* Colors */}
                        {component.settings?.colors &&
                          Object.entries(component.settings.colors).map(
                            ([key, value]) => (
                              <div key={key} className="mb-2">
                                <label className="block text-sm mb-1">
                                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                                </label>
                                <input
                                  type="color"
                                  value={value}
                                  onChange={(e) =>
                                    handleSettingChange(
                                      index,
                                      "colors",
                                      key,
                                      e.target.value
                                    )
                                  }
                                  className="w-full"
                                />
                              </div>
                            )
                          )}

                        {/* Typography */}
                        {component.settings.typography &&
                          Object.entries(component.settings.typography).map(
                            ([key, value]) => (
                              <div key={key} className="mb-2">
                                <label className="block text-sm mb-1">
                                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                                </label>
                                <input
                                  type="text"
                                  value={value.toString()}
                                  onChange={(e) =>
                                    handleSettingChange(
                                      index,
                                      "typography",
                                      key,
                                      e.target.value
                                    )
                                  }
                                  className="border rounded p-2 w-full"
                                />
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
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="/editor/lioncrown.png"
                alt="Lion Crown"
                className="object-contain"
              />
            </div>
          )}
        </div>
      </section>

      {/* Live Preview Section */}
      <section className="col-span-1 lg:col-span-2 bg-white rounded-tr-lg rounded-tl-lg shadow-md h-[81vh] flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 px-3 py-1 flex items-center gap-2">
          <IoMdListBox /> Live Preview
        </h2>
        <div className="flex-1 overflow-auto">
          <Base id={selectedTemplateId || "homepage"} />
        </div>
      </section>
    </div>
  );
};

export default ContentEditor;
