import TemplateManagerAPI from "./templateManagerAPI";
import Hero from "../components/samples/Hero";
import BasicHero from "../components/samples/BasicHero";
import Footer from "../components/samples/Footer";
import ImageBackgroundHero from "../components/hero/ImageBackgroundHero";
import ImageSliderForegroundCenterTextHero from "../components/hero/ImageSliderForegroundCenterTextHero";
import NavbarLeft from "../components/headers/NavbarLeft";
import VideoBackgroundHero from "../components/hero/VideoBackgroundHero";

const homepageTemplate = {
  id: "homepage",
  name: "Homepage Template",
  author: "Your Company",
  authorUrl: "https://github.com/your-company",
  preview: "/previews/homepage.jpeg", // Image URL for preview
  components: [
    {
      component: BasicHero,
      data: {
        title: "Welcome to the Homepage",
        subtitle: "Your one-stop solution.",
      },
      settings: {
        colors: {
          backgroundColor: "#ffffff",
          textColor: "#333333",
        },
        typography: {
          fontSize: "16px",
          fontFamily: "Arial, sans-serif",
        },
        spacing: {
          padding: "20px",
        },
      },
    },
    {
      component: Footer,
      data: {
        text: "© 2024 Company",
        links: [
          { name: "Home", url: "https://example.com/home" },
          { name: "About", url: "https://example.com/about" },
          { name: "Contact", url: "https://example.com/contact" },
        ],
      },
      settings: {
        colors: {
          backgroundColor: "#f8f8f8",
          textColor: "#666666",
        },
        spacing: {
          padding: "10px",
        },
      },
    },
  ],
  metadata: {
    description: "A versatile homepage template for modern websites.",
    version: "1.0.0",
    createdAt: "2025-01-04",
    updatedAt: "2025-01-04",
  },
  theme: {
    name: "Default Light Theme",
    variant: "light",
  },
  globalSettings: {
    containerMaxWidth: "1200px",
    gridGap: "20px",
  },
  customData: {
    tags: ["homepage", "modern", "responsive"],
  },
};

const aboutTemplate = {
  id: "about",
  name: "About Us Template",
  author: "Your Company",
  authorUrl: "https://github.com/your-company",
  preview: "/previews/about.jpeg", // Image URL for preview
  components: [
    {
      component: Hero,
      data: {
        title: "About Us",
        subtitle: "Learn more about our story.",
      },
      settings: {
        colors: {
          backgroundColor: "#ffffff",
          textColor: "#000000",
        },
      },
    },
  ],
  metadata: {
    description: "A clean template for About Us pages.",
    version: "1.0.0",
    createdAt: "2025-01-04",
    updatedAt: "2025-01-04",
  },
  theme: {
    name: "Default Light Theme",
    variant: "light",
  },
  globalSettings: {
    containerMaxWidth: "800px",
  },
  customData: {
    tags: ["about", "info", "team"],
  },
};

const base01Template = {
  id: "base01",
  name: "Base Template 01",
  author: "Your Company",
  authorUrl: "https://github.com/your-company",
  preview: "/previews/base01.jpeg", // Image URL for preview
  components: [
    {
      component: ImageBackgroundHero,
      data: {
        title: "Centered Hero Title Text",
        subtitle: "Centered Hero Subtitle",
        buttonText: "Hero Button",
        backgroundImageUrl: "/img2.jpg",
      },
      settings: {
        layout: {
          textAlignment: "center",
        },
      },
    },
  ],
  metadata: {
    description: "A hero-centric template with an image background.",
    version: "1.0.0",
    createdAt: "2025-01-04",
    updatedAt: "2025-01-04",
  },
  theme: {
    name: "Image Background Theme",
    variant: "custom",
  },
  globalSettings: {
    transitionEffect: "fade",
  },
  customData: {
    tags: ["hero", "image", "background"],
  },
};

const base02Template = {
  id: "base02",
  name: "Base Template 02",
  author: "Your Company",
  authorUrl: "https://github.com/your-company",
  preview: "/previews/base02.jpeg", // Image URL for preview
  components: [
    {
      component: NavbarLeft,
      data: {
        logo: "/logo.png",
        links: [
          { name: "Home", url: "#" },
          { name: "About", url: "#" },
          { name: "Contact", url: "#" },
        ],
      },
      settings: {
        layout: {
          alignment: "left",
        },
      },
    },
    {
      component: ImageSliderForegroundCenterTextHero,
      data: {
        title: "Welcome to My Hero Section Title",
        subtitle: "Subtitle static text",
        backgroundImages: [
          "/img1.jpg",
          "/img2.jpg",
          "/img3.jpg",
          "/img4.jpg",
          "/img5.webp",
        ],
      },
    },
  ],
  metadata: {
    description: "A template featuring a slider hero with foreground text.",
    version: "1.0.0",
    createdAt: "2025-01-04",
    updatedAt: "2025-01-04",
  },
  theme: {
    name: "Slider Theme",
    variant: "custom",
  },
  globalSettings: {
    autoSlideInterval: 5000,
  },
  customData: {
    tags: ["hero", "slider", "images"],
  },
};

const base03Template = {
  id: "base03",
  name: "Base Template 03",
  author: "Your Company",
  authorUrl: "https://github.com/your-company",
  preview: "/previews/base03.jpeg", // Image URL for preview
  components: [
    {
      component: VideoBackgroundHero,
      data: {
        title: "Centered Hero Title Text",
        subtitle: "Centered Hero subtitle",
        buttonText: "Hero Button",
        videoUrl: "/vid1.mp4",
      },
      settings: {
        layout: {
          textAlignment: "center",
        },
      },
    },
  ],
  metadata: {
    description: "A hero-centric template with an Video background.",
    version: "1.0.0",
    createdAt: "2025-01-06",
    updatedAt: "2025-01-06",
  },
  theme: {
    name: "Video Background Theme",
    variant: "custom",
  },
  globalSettings: {
    transitionEffect: "fade",
  },
  customData: {
    tags: ["hero", "Video", "background"],
  },
};

// Register Templates
TemplateManagerAPI.registerTemplate(homepageTemplate);
TemplateManagerAPI.registerTemplate(aboutTemplate);
TemplateManagerAPI.registerTemplate(base01Template);
TemplateManagerAPI.registerTemplate(base02Template);
TemplateManagerAPI.registerTemplate(base03Template);

console.log("Templates with previews registered successfully!");
