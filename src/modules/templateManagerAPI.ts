import TemplateManager from "./templateManager";
import { templateTypes } from "../types/templateTypes";

const templateManagerInstance = new TemplateManager();

const TemplateManagerAPI = (() => {
  const registerTemplate = (template: templateTypes): void => {
    try {
      templateManagerInstance.registerTemplate(template);
    } catch (error) {
      console.error(`Error registering template: ${(error as Error).message}`);
    }
  };

  const updateTemplate = (
    id: string,
    updatedData: Partial<templateTypes>
  ): boolean => {
    return templateManagerInstance.updateTemplate(id, updatedData);
  };

  const getTemplate = (id: string): templateTypes | undefined => {
    return templateManagerInstance.getTemplate(id);
  };

  const getAllTemplates = (): templateTypes[] => {
    return templateManagerInstance.getAllTemplates();
  };

  const deleteTemplate = (id: string): boolean => {
    return templateManagerInstance.deleteTemplate(id);
  };

  const exportToFile = (): string => {
    return templateManagerInstance.exportToFile();
  };

  return {
    registerTemplate,
    updateTemplate,
    getTemplate,
    getAllTemplates,
    deleteTemplate,
    exportToFile,
  };
})();

export default TemplateManagerAPI;
