/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { IoMdCodeDownload, IoMdSave, IoMdListBox } from "react-icons/io";
import TemplateManagerAPI from "../../modules/templateManagerAPI";
import Base from "../../Base";

const ContentEditor: React.FC = () => {
  const templates = TemplateManagerAPI.getAllTemplates();

  console.log(templates);

  const handleSave = (templateId: string, updatedData: Partial<any>) => {
    TemplateManagerAPI.updateTemplate(templateId, updatedData);
  };

  const handleSaveAll = () => {
    Object.keys(templates).forEach((templateId) => {
      TemplateManagerAPI.updateTemplate(templateId, templates[templateId]);
    });
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
          >
            <option value="base-01">base-01</option>
            <option value="base-02">base-02</option>
            <option value="base-03">base-03</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2">
            <IoMdCodeDownload size={20} />
            Config File
          </button>
        </div>
      </header>

      {/* Input Fields Section */}
      <section className="bg-white p-6 rounded-lg shadow-md h-[81vh] overflow-hidden">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Templates</h2>
        <div className="h-full overflow-y-auto pr-4 pb-10">
          {Object.entries(templates).map(([templateId, data]) => (
            <div
              key={templateId}
              className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-md"
            >
              <h3 className="text-blue-600 font-semibold">{templateId}</h3>
              <div className="ml-4 mt-2">
                <h4 className="text-gray-700 font-semibold">Field 1</h4>
                <input
                  type="text"
                  className="ml-2 w-full p-1 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                  value={data.field1 || ""}
                  onChange={(e) =>
                    handleSave(templateId, { ...data, field1: e.target.value })
                  }
                />
              </div>
              <div className="ml-4 mt-2">
                <h4 className="text-gray-700 font-semibold">Field 2</h4>
                <input
                  type="text"
                  className="ml-2 w-full p-1 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                  value={data.field2 || ""}
                  onChange={(e) =>
                    handleSave(templateId, { ...data, field2: e.target.value })
                  }
                />
              </div>
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2"
                onClick={() => handleSave(templateId, data)}
              >
                <IoMdSave size={20} /> Save
              </button>
            </div>
          ))}
          {Object.keys(templates).length > 0 && (
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2"
              onClick={handleSaveAll}
            >
              <IoMdSave size={20} /> Save All
            </button>
          )}
        </div>
      </section>

      {/* Live Preview Section */}
      <section className="col-span-1 lg:col-span-2 bg-white rounded-tr-lg rounded-tl-lg shadow-md h-[81vh] flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 px-3 py-1 flex items-center gap-2">
          <IoMdListBox /> Live Preview
        </h2>
        <div className="flex-1 overflow-auto">
          <Base id="homepage" />
        </div>
      </section>
    </div>
  );
};

export default ContentEditor;
