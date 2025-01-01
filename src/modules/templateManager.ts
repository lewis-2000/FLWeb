import { templateTypes } from "../types/templateTypes";

export default class TemplateManager {
  private templates: Record<string, templateTypes> = {};

  // Register a new template
  registerTemplate(template: templateTypes): void {
    if (this.templates[template.id]) {
      throw new Error(`Template with ID ${template.id} already exists.`);
    }
    this.templates[template.id] = template;
  }

  // Update a template's properties by ID
  updateTemplate(id: string, updatedData: Partial<templateTypes>): boolean {
    if (this.templates[id]) {
      this.templates[id] = { ...this.templates[id], ...updatedData };
      return true;
    }
    return false;
  }

  // Get a single template by ID
  getTemplate(id: string): templateTypes | undefined {
    return this.templates[id];
  }

  // Get all templates
  getAllTemplates(): templateTypes[] {
    return Object.values(this.templates);
  }

  // Delete a template by ID
  deleteTemplate(id: string): boolean {
    if (this.templates[id]) {
      delete this.templates[id];
      return true;
    }
    return false;
  }

  // Export all templates to a JSON string
  exportToFile(): string {
    return JSON.stringify(this.templates, null, 2);
  }
}
