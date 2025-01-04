/* eslint-disable @typescript-eslint/no-explicit-any */
import TemplateManagerAPI from "./templateManagerAPI";
import { templateTypes } from "../types/templateTypes";
import BasicHero from "../components/samples/BasicHero";
import Footer from "../components/samples/Footer";
import Hero from "../components/samples/Hero";
import axios from "axios";

// Component Map
const componentMap: Record<string, React.ComponentType<any>> = {
  BasicHero,
  Footer,
  Hero,
};

// Function to load templates and register them with the TemplateManagerAPI
export const loadTemplates = async (): Promise<void> => {
  try {
    // Fetch template JSON from the server
    const response = await axios.get<templateTypes[]>("/templates.json");
    const jsonTemplates = response.data;

    // Register each template
    jsonTemplates.forEach((template) => {
      const templateComponents = template.components.map(
        ({ component, data }) => {
          const resolvedComponent =
            componentMap[component.name] || (() => null);
          return { component: resolvedComponent, data };
        }
      );

      // Register the template with the API
      TemplateManagerAPI.registerTemplate({
        ...template,
        components: templateComponents,
      });
    });

    // console.log(      "JsonTemplateRegistry: Templates successfully loaded and registered."    );
  } catch (error) {
    console.error("Error loading templates:", error);
  }
};

// Load templates on startup
loadTemplates();

export default {};
