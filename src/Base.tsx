import React, { useEffect, useState } from "react";
import WebFont from "webfontloader";
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

  // Load all templates on mount
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

  // Fetch the selected template after templates are loaded or when the ID changes
  useEffect(() => {
    if (isTemplatesLoaded) {
      console.log("Fetching template with ID:", id);
      const template = TemplateManagerAPI.getTemplate(id);
      setSelectedTemplate(template);
    }
  }, [id, isTemplatesLoaded]);

  // Load fonts whenever the selected template changes
  useEffect(() => {
    if (selectedTemplate) {
      const fontsToLoad: string[] = [];

      // Extract fonts from the selected template's components
      selectedTemplate.components.forEach((component) => {
        const typography = component.settings?.typography;
        if (typography?.fontFamily) {
          const fontFamilies = Object.values(typography.fontFamily);
          fontFamilies.forEach((font) => {
            if (typeof font === "string" && !fontsToLoad.includes(font)) {
              fontsToLoad.push(font);
            }
          });
        }
      });

      if (fontsToLoad.length > 0) {
        console.log("Loading fonts:", fontsToLoad);

        WebFont.load({
          google: {
            families: fontsToLoad,
          },
          active: () => console.log("Fonts loaded successfully:", fontsToLoad),
          inactive: () =>
            console.error("Failed to load some fonts:", fontsToLoad),
        });
      }
    }
  }, [selectedTemplate]);

  // Periodically check for updates to the template
  useEffect(() => {
    const handleUpdate = () => {
      if (isTemplatesLoaded) {
        console.log("Checking for updates to the template with ID:", id);
        const updatedTemplate = TemplateManagerAPI.getTemplate(id);
        setSelectedTemplate(updatedTemplate);
      }
    };

    const interval = setInterval(handleUpdate, 1000); // Check for updates every second

    return () => {
      clearInterval(interval);
    };
  }, [id, isTemplatesLoaded]);

  // Show loading screen if templates aren't loaded yet
  if (!isTemplatesLoaded) {
    console.log("Templates not loaded yet, showing loading screen...");
    return <LoadingScreen />;
  }

  // Show loading screen if no template is selected
  if (!selectedTemplate) {
    console.log("No template selected, showing loading screen...");
    return <LoadingScreen />;
  }

  // Render the template components
  return (
    <div className="flex flex-col h-full w-full overflow-auto">
      <div>
        {selectedTemplate.components.map((item, index) => {
          const Component = item.component;
          const data = item.data || {}; // Ensure data is an object
          const settings = item.settings || {}; // Ensure settings is an object

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
