/* eslint-disable @typescript-eslint/no-explicit-any */

import TemplateManager from "./templateManager";

// Import the template data from the public folder (using fetch)
const loadTemplateData = async () => {
  try {
    const response = await fetch('/templates.json');
    const templateData = await response.json();

    // Loop through the groups and register them dynamically
    Object.keys(templateData).forEach(groupId => {
      const templates = templateData[groupId];
      
      const templateGroup: any = {};

      // Loop through each template in the group and register
      Object.keys(templates).forEach(templateId => {
        const template = templates[templateId];
        templateGroup[templateId] = {
          component: template.component,
          data: template.data,
        };
      });

      // Register the group
      TemplateManager.registerTemplateGroup(groupId, templateGroup);
    });

    console.log("Template data loaded and templates registered.");
  } catch (error) {
    console.error("Error loading templates.json:", error);
  }
};

// Run the function to load template data
loadTemplateData();
