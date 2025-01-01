// /* eslint-disable @typescript-eslint/no-explicit-any */

import TemplateManagerAPI from "./templateManagerAPI";
import Hero from "../components/samples/Hero";
import BasicHero from "../components/samples/BasicHero";
import Footer from "../components/samples/Footer";
import JsonExporter from "../components/samples/JsonExporter";

const homepageTemplate = {
  id: "homepage",
  name: "Homepage Template",
  components: [
    {
      component: BasicHero,
      data: {
        title: "Welcome to the Homepage",
        subtitle: "Your one-stop solution changed.",
      },
    },
    {
      component: JsonExporter,
      data: {
        text: "© 2024 Company",
        links: ["Home", "About", "Contact"],
      },
    },
    {
      component: Footer,
      data: {
        text: "© 2024 Company",
        links: ["Home", "About", "Contact"],
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

// Register Templates
TemplateManagerAPI.registerTemplate(homepageTemplate);
TemplateManagerAPI.registerTemplate(aboutTemplate);

console.log("Templates with multiple components registered successfully!");
