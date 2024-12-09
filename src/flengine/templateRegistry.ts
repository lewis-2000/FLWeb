/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
import TemplateManager from "./templateManager";

// Import all the components used in the templates
import SideMenu from "../components/headers/SideMenuMobile";
import HeroSection from "../components/HeroSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Testimonials from "../components/Testimonials";
import CenteredTextHero from "../components/hero/CenteredTextHero";
import ImageBackgroundHero from "../components/hero/ImageBackgroundHero";
import VideoBackgroundHero from "../components/hero/VideoBackgroundHero";
import ImageSliderForegroundCenterTextHero from "../components/hero/ImageSliderForegroundCenterTextHero";

// Define a type for the template component
type TemplateComponent = React.ComponentType<any>;

// Define a type for the data associated with each template
type TemplateData = Record<string, any>;

// Define a mapping of component names to actual React components
const componentMapping: Record<string, TemplateComponent> = {
    ImageSliderForegroundCenterTextHero,
    MainContent,
    SideMenu,
    HeroSection,
    Contact,
    Footer,
    Header,
    CenteredTextHero,
    ImageBackgroundHero,
    VideoBackgroundHero,
    Testimonials,
    // Add more components here as needed
};

// Define the structure of the JSON templates
interface TemplateJson {
    [groupId: string]: {
        [templateId: string]: {
            component: string;
            data: TemplateData;
        };
    };
}

// Function to load templates and register them with the TemplateManager
export const loadTemplates = async (): Promise<void> => {
    try {
        // Fetch template JSON from the server
        const response = await axios.get<TemplateJson>("/templates.json");
        const jsonTemplates = response.data;

        // Process and register each template group
        for (const groupId in jsonTemplates) {
            const group = jsonTemplates[groupId];

            const parsedGroup = Object.fromEntries(
                Object.entries(group).map(([templateId, { component, data }]) => {
                    const resolvedComponent = componentMapping[component] || (() => null);
                    return [templateId, { component: resolvedComponent, data }];
                })
            );

            // Register group with TemplateManager
            TemplateManager.registerTemplateGroup(groupId, parsedGroup);
        }

        console.log("TemplateRegistry: Templates successfully loaded and registered.");
    } catch (error) {
        console.error("Error loading templates:", error);
    }
};

// Load templates on startup
loadTemplates();

export default {};
