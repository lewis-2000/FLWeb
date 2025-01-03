// /* eslint-disable @typescript-eslint/no-explicit-any */

import TemplateManagerAPI from "./templateManagerAPI";
// import JsonExporter from "../components/samples/JsonExporter";

import Hero from "../components/samples/Hero";
import BasicHero from "../components/samples/BasicHero";
import Footer from "../components/samples/Footer";
import ImageBackgroundHero from "../components/hero/ImageBackgroundHero";

const homepageTemplate = {
  id: "homepage",
  name: "Homepage Template",
  components: [
    {
      component: BasicHero,
      data: {
        title: "Welcome to the Homepage",
        subtitle: "Your one-stop solution.",
      },
      settings: {
        styles: {
          backgroundColor: "#ffffff",
          textColor: "#333333",
          padding: "20px",
        },
        behavior: {
          animateOnScroll: true,
          animationType: "fade-in",
        },
      },
    },
    {
      component: Footer,
      data: {
        text: "© 2024 Company",
        links: ["Home", "About", "Contact"],
      },
      settings: {
        styles: {
          backgroundColor: "#f8f8f8",
          textColor: "#666666",
          padding: "0px",
        },
        behavior: {
          sticky: true,
        },
      },
    },
  ],
};

const aboutTemplate = {
  id: "about",
  name: "About Us Template",
  components: [
    {
      component: Hero,
      data: {
        title: "About Us",
        subtitle: "Learn more about our story.",
      },
    },
  ],
};

const base01Template = {
  id: "base01",
  name: "Base Template 01",
  components: [
    {
      component: ImageBackgroundHero,
      data: {
        title: "Centered Hero Title Text",
        subtitle: "Centered Hero subtitle",
        buttonText: "Hero Button",
        backgroundImageUrl: "/img2.jpg",
      },
    },
  ],
};

// Register Templates
TemplateManagerAPI.registerTemplate(homepageTemplate);
TemplateManagerAPI.registerTemplate(aboutTemplate);
TemplateManagerAPI.registerTemplate(base01Template);

console.log("Templates with multiple components registered successfully!");
