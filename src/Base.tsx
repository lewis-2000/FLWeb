import React, { useEffect, useState } from "react";
import TemplateManagerAPI from "./modules/templateManagerAPI";
import { templateTypes } from "./types/templateTypes";
import LoadingScreen from "./components/loading/Loading";

interface BaseProps {
  id: string;
}

const Base: React.FC<BaseProps> = ({ id }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<
    templateTypes | undefined
  >(undefined);
  const [isTemplatesLoaded, setIsTemplatesLoaded] = useState(false);

  useEffect(() => {
    const loadTemplates = async () => {
      try {
        console.log("Loading all templates...");
        await TemplateManagerAPI.getAllTemplates();
        console.log("Templates loaded successfully.");
        setIsTemplatesLoaded(true);
      } catch (error) {
        console.error("Error loading templates:", error);
      }
    };

    loadTemplates();
  }, []);

  useEffect(() => {
    if (isTemplatesLoaded) {
      console.log("Fetching template with ID:", id);
      const template = TemplateManagerAPI.getTemplate(id);
      console.log("Selected template:", template);
      setSelectedTemplate(template);
    }
  }, [id, isTemplatesLoaded]);

  if (!isTemplatesLoaded) {
    console.log("Templates not loaded yet, showing loading screen...");
    return <LoadingScreen />;
  }

  if (!selectedTemplate) {
    console.log("No template selected, showing loading screen...");
    return <LoadingScreen />;
  }

  console.log("Rendering components:", selectedTemplate.components);

  return (
    <div className="flex flex-col h-full w-full bg-gray-100 shadow-md overflow-auto">
      <div>
        {selectedTemplate.components.map((item, index) => {
          const Component = item.component;
          console.log(
            `Rendering component: ${Component.name} with data:`,
            item.data
          );
          return (
            <div key={index} className="mb-6">
              <Component {...item.data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Base;
