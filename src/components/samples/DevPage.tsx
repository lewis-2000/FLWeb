// import React from "react";
import TemplateManagerAPI from "../../modules/templateManagerAPI";

const DevPage = () => {
  // Fetch all templates from the TemplateManager
  const templates = TemplateManagerAPI.getAllTemplates();

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Registered Templates</h1>
      {templates.length === 0 ? (
        <p className="text-gray-600">No templates have been registered yet.</p>
      ) : (
        templates.map((template) => (
          <div
            key={template.id}
            className="mb-6 border border-gray-300 rounded-lg p-4 shadow-md bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">{template.name}</h2>
            <div>
              {template.components.map((componentData, index) => {
                const Component = componentData.component;
                return (
                  <div
                    key={`${template.id}-component-${index}`}
                    className="mb-4"
                  >
                    <Component {...componentData.data} />
                  </div>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DevPage;
