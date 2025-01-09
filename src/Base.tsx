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
      setSelectedTemplate(template);
    }
  }, [id, isTemplatesLoaded]);

  useEffect(() => {
    const handleUpdate = () => {
      if (isTemplatesLoaded) {
        console.log("Fetching updated template with ID:", id);
        const updatedTemplate = TemplateManagerAPI.getTemplate(id);
        setSelectedTemplate(updatedTemplate);
      }
    };

    const interval = setInterval(handleUpdate, 1000); // Check for updates every second

    return () => {
      clearInterval(interval);
    };
  }, [id, isTemplatesLoaded]);

  if (!isTemplatesLoaded) {
    console.log("Templates not loaded yet, showing loading screen...");
    return <LoadingScreen />;
  }

  if (!selectedTemplate) {
    console.log("No template selected, showing loading screen...");
    return <LoadingScreen />;
  }

  return (
    <div className="flex flex-col h-full w-full bg-gray-100 shadow-md overflow-auto">
      <div>
        {selectedTemplate.components.map((item, index) => {
          const Component = item.component;
          const data = item.data || {}; // Ensure data is an object
          const settings = item.settings || {}; // Ensure settings is an object

          // console.log("Rendering component with data:", data);
          // console.log("Rendering component with settings:", settings);

          return (
            <div key={`${index}-${JSON.stringify(settings)}`}>
              <Component {...data} settings={settings} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Base;
