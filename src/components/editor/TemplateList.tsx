import React from "react";
import { useDispatch } from "react-redux";
import { selectTemplate } from "../../store/slices/templateSlice";
import TemplateManagerAPI from "../../modules/templateManagerAPI";

const TemplateList = () => {
  const templates = TemplateManagerAPI.getAllTemplates();
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto h-full p-3">
      {templates.map((template) => (
        <div
          key={template.id}
          className="p-6 h-80 bg-gray-100 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden"
          onClick={() => dispatch(selectTemplate(template.id))}
        >
          <div>
            <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {template.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2">Template description</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TemplateList;
