/* eslint-disable @typescript-eslint/no-explicit-any */
interface TemplateGroup {
  [templateId: string]: { component: React.ComponentType<any>; data: any };
}

class TemplateManager {
  private templates: Record<string, TemplateGroup> = {};

  registerTemplateGroup(groupId: string, templates: TemplateGroup) {
    this.templates[groupId] = templates;
    console.log("TemplateManager: registered TemplateGroup", groupId);
  }

  getTemplateGroup(groupId: string) {
    return this.templates[groupId] || null;
  }

  getTemplate(groupId: string, templateId: string) {
    return this.templates[groupId]?.[templateId] || null;
  }

  modifyTemplate(groupId: string, templateId: string, newData: any) {
    if (this.templates[groupId]?.[templateId]) {
      this.templates[groupId][templateId].data = { ...this.templates[groupId][templateId].data, ...newData };
      console.log(`Modified template ${templateId} in group ${groupId}`);
      return true;
    }
    console.error(`Template ${templateId} in group ${groupId} not found`);
    return false;
  }

  getAllTemplates() {
    return this.templates;
  }
}

export default new TemplateManager();
