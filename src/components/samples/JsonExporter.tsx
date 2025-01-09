// components/JsonExporter.tsx
import React from "react";
import { generateJsonFile } from "../../modules/jsonGenerator";

const JsonExporter: React.FC = () => {
  const homepage = {
    id: "homepage",
    name: "Homepage Template",
    components: [
      {
        component: "BasicHero",
        data: {
          title: "Welcome to the Homepage",
          subtitle: "Your one-stop solution changed.",
        },
      },
      {
        component: "Footer",
        data: {
          text: "© 2024 Company",
          links: ["Home", "About", "Contact"],
        },
      },
    ],
  };

  const about = {
    id: "about",
    name: "About Us Template",
    components: [
      {
        component: "Hero",
        data: {
          title: "About Us",
          subtitle: "Learn more about our story.",
        },
      },
    ],
  };

  const handleExport = () => {
    const data = [homepage, about];
    generateJsonFile(data, "pages.json");
  };

  return (
    <button
      onClick={handleExport}
      className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Export JSON
    </button>
  );
};

export default JsonExporter;
