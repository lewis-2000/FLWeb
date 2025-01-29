import TemplateManagerAPI from "./templateManagerAPI";
import Hero from "../components/samples/Hero";
import BasicHero from "../components/samples/BasicHero";
import Footer from "../components/samples/Footer";
import ImageBackgroundHero from "../components/hero/ImageBackgroundHero";
import ImageSliderForegroundCenterTextHero from "../components/hero/ImageSliderForegroundCenterTextHero";
import NavbarLeft from "../components/headers/NavbarLeft";
import VideoBackgroundHero from "../components/hero/VideoBackgroundHero";

//v2
import HeroActionrightPictureLeft from "../components/v2/v21/HeroActionrightPictureLeft";
import Gallery from "../components/v2/v21/Gallery";
import GalleryFooter from "../components/v2/v21/Footer";
import V22Hero from "../components/v2/v22/V22Hero";
import V22Nav from "../components/v2/v22/V22Nav";
import V22About from "../components/v2/v22/V22About";
import V22Work from "../components/v2/v22/V22Work";
import V22Experience from "../components/v2/v22/V22Experience";
import V22Background from "../components/v2/v22/V22Background";
import V22Quote from "../components/v2/v22/V22Quote";
import V22Footer from "../components/v2/v22/V22Footer";
import V23Hero from "../components/v2/v23/V23Hero";
import V23Nav from "../components/v2/v23/V23Nav";
import V25Nav from "../components/v2/v25/V25Nav";
import V25Hero from "../components/v2/v25/V25Hero";
import V25Body from "../components/v2/v25/V25Body";

const homepageTemplate = {
  id: "homepage",
  name: "Homepage Template",
  author: "Your Company",
  authorUrl: "https://github.com/your-company",
  preview: "/FLWeb/previews/homepage.jpeg", // Image URL for preview
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
  preview: "/FLWeb/previews/about.jpeg", // Image URL for preview
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
  preview: "/FLWeb/previews/base01.jpeg", // Image URL for preview
  components: [
    {
      component: ImageBackgroundHero,
      data: {
        title: "Centered Hero Title Text",
        subtitle: "Centered Hero Subtitle",
        buttonText: "Hero Button",
        backgroundImageUrl: "/FLWeb/img2.jpg", // Image URL
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
  preview: "/FLWeb/previews/base02.jpeg", // Image URL for preview
  components: [
    {
      component: NavbarLeft,
      data: {
        logo: "/FLWeb/logo.png", // Image URL for logo
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
          "/FLWeb/img1.jpg",
          "/FLWeb/img2.jpg",
          "/FLWeb/img3.jpg",
          "/FLWeb/img4.jpg",
          "/FLWeb/img5.webp",
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
  preview: "/FLWeb/previews/base03.jpeg", // Image URL for preview
  components: [
    {
      component: VideoBackgroundHero,
      data: {
        title: "Centered Hero Title Text",
        subtitle: "Centered Hero subtitle",
        buttonText: "Hero Button",
        videoUrl: "/FLWeb/vid1.mp4", // Video URL
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
// v2
TemplateManagerAPI.registerTemplate({
  id: "ArtsyGalleryTemplate",
  name: "Artsy Gallery",
  author: "FL",
  authorUrl: "https://github.com/lewis-2000",
  preview: "/FLWeb/previews/base03.jpeg", // Image URL for preview
  components: [
    {
      component: HeroActionrightPictureLeft,
      data: {
        title: "Centered Hero Title Text",
        subtitle: "Centered Hero subtitle",
        buttonText: "Hero Button",
        bgUrl: "/FLWeb/fairyGroup.png", // Image URL
      },
      settings: {
        layout: {
          textAlignment: "center",
        },
        colors: {
          backgroundColor: "#222222",
          imageBackgroundColor: "#222222",
          titleColor: "#eaa150",
          subtitleColor: "#666666",
        },
        typography: {
          fontSize: "40px",
          fontFamily: {
            title: "Pacifico",
            subtitle: "Jersey 15",
            body: "Lato",
          },
        },
        spacing: {
          padding: "1px",
        },
      },
    },
    {
      component: Gallery,
      data: {
        images: [
          "/FLWeb/defaults/defaultImage.jpg",
          "/FLWeb/defaults/defaultImage.jpg",
          "/FLWeb/defaults/defaultImage.jpg",
          "/FLWeb/defaults/defaultImage.jpg",
          "/FLWeb/defaults/defaultImage.jpg",
          "/FLWeb/defaults/defaultImage.jpg",
          "/FLWeb/defaults/defaultImage.jpg",
          "/FLWeb/defaults/defaultImage.jpg",
          "/FLWeb/defaults/defaultImage.jpg",
        ],
      },
      settings: {
        layout: {
          padding: "10px",
          columns: 3, // Number of columns
          gap: "0.2rem", // Gap between images
        },
        colors: {
          backgroundColor: "#ffffff",
        },
      },
    },
    {
      component: GalleryFooter,
      data: {
        text: "Follow us for more updates.",
        links: [
          { label: "Instagram", url: "https://instagram.com" },
          { label: "Twitter", url: "https://twitter.com" },
          { label: "LinkedIn", url: "https://linkedin.com" },
        ],
      },
      settings: {
        colors: {
          backgroundColor: "#222222",
          textColor: "#ffffff",
          linkColor: "#f4c542",
          linkHoverColor: "#d1a82d",
        },
      },
    },
  ],
  metadata: {
    description: "Showcase your portfolio in a beautifully designed gallery.",
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
    tags: ["hero", "Video", "background", "gallery", "footer"],
  },
});

TemplateManagerAPI.registerTemplate({
  id: "V22",
  name: "V22",
  author: "Your Company",
  authorUrl: "https://github.com/your-company",
  preview: "/FLWeb/defaults/defaultImage.png", // Image URL for preview
  components: [
    {
      component: V22Nav,
      data: {
        logo: "/FLWeb/logo.png", // Image URL for logo
        links: [
          { name: "Bio", url: "#" },
          { name: "Work", url: "#" },
          { name: "Background", url: "#" },
        ],
      },
      settings: {
        layout: {
          textAlignment: "center",
        },
        colors: {
          backgroundColor: "#ffffff",
          linkColor: "#000000",
          linkHoverColor: "#d1a82d",
        },
        typography: {
          fontSize: "15px",
          fontFamily: {
            link: "Pacifico",
          },
        },
        spacing: {
          padding: "1px",
        },
      },
    },
    {
      component: V22Hero,
      data: {
        title: "Welcome to My Hero Section Title",
        subtitle: "Subtitle static text",
        bgUrl: "/FLWeb/flowerField.jpg", // Image URL
      },
    },

    {
      component: V22About,
      data: {
        name: "John Doe",
        title: "Welcome to My Hero Section Title",
        subtitle: "Subtitle static text",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.", //About description
        image: "/FLWeb/defaults/defaultImage.png", // Image URL
      },
      settings: {
        layout: {
          textAlignment: "center",
        },
        colors: {
          backgroundColor: "#ffffff",
          nameColor: "#ac4726",
          titleColor: "#7c8034",
          bodyColor: "#333333",
        },
        typography: {
          fontSize: "15px",

          fontFamily: {
            name: "Pacifico",
            title: "Oswald",
            body: "Lato",
          },
        },
        spacing: {
          height: "auto",
          padding: "10px",
        },
      },
    },
    {
      component: V22Work,
      data: {
        heading: "Current Work",
        title: "John Doe and CO.",

        image: "/FLWeb/defaults/defaultImage.png", // Image URL
      },
      settings: {
        layout: {
          textAlignment: "center",
        },
        colors: {
          backgroundColor: "#ffffff",
          headingColor: "#ac4726",
          titleColor: "#7c8034",
        },
        typography: {
          fontSize: "75px",

          fontFamily: {
            heading: "Pacifico",
            title: "Oswald",
          },
        },
        spacing: {
          height: "auto",
          padding: "10px",
          margin: "0px",
        },
      },
    },
    {
      component: V22Experience,
      data: {
        heading: "Operating Experience",
        image: "/FLWeb/fieldVector.png", // Image URL
        experience1:
          "Designed and implemented scalable backend systems, ensuring high availability and low latency across distributed architectures.",
        experience2:
          "Collaborated with cross-functional teams to enhance UI/UX, improving user engagement by 25%.",
        experience3:
          "Optimized database queries, reducing query execution time by 40% for critical workflows.",
        experience4:
          "Led a team of developers in adopting CI/CD practices, accelerating deployment cycles by 50%.",
        experience5:
          "Conducted code reviews and provided mentorship, fostering a culture of continuous learning and improvement.",
      },
      settings: {
        layout: {
          textAlignment: "center",
        },
        colors: {
          backgroundColor: "#efc042",
          headingColor: "#ac4726",
          subTitleColor: "#797d2f",
          cardColor: "#ffffff",
        },
        typography: {
          fontSize: "15px",
          fontFamily: {
            heading: "Oswald",
            subTitle: "Oswald",
            body: "Lato",
          },
        },
        spacing: {
          height: "auto",
          padding: "10px",
          margin: "0px",
        },
      },
    },
    {
      component: V22Background,
      data: {
        heading: "Explore Your Path", // Background-specific heading
        image: "/FLWeb/", // Optional background image URL
        description:
          "Set the tone for your journey with a visually captivating background that aligns with your vision.", // Relevant description
        gridItems: [
          "Discover new opportunities",
          "Embrace creativity",
          "Pursue innovation",
          "Collaborate with teams",
          "Learn and grow",
          "Achieve your goals",
          "Stay inspired",
          "Empower yourself",
          "Define your success",
        ], // Items to display in the grid
      },
      settings: {
        layout: {
          textAlignment: "center",
        },
        colors: {
          backgroundColor: "#ffffff", // white theme background
          headingColor: "#ac4726", // Deep brown heading color
          subTitleColor: "#797d2f", // Olive subtitle color
          cardColor: "#501b1b", // White card background
        },
        typography: {
          fontSize: "18px", // Slightly larger font for emphasis
          fontFamily: {
            heading: "Pacifico", // Artistic font for heading
            body: "Lato", // Clean font for the grid items
          },
        },
        spacing: {
          height: "auto", // Adaptable height
          padding: "20px", // Comfortable padding
          margin: "0px", // No external margin
        },
      },
    },
    {
      component: V22Quote,
      data: {
        quote: "The journey of a thousand miles begins with a single step.", // Inspirational quote
        author: "Lao Tzu", // Author of the quote
        image: "/FLWeb/quoteBackground.png", // Optional background image
      },
      settings: {
        layout: {
          textAlignment: "center", // Align text in the center
        },
        colors: {
          backgroundColor: "#7c8034", // background color
          textColor: "#eeeeee", // Light text color for contrast
          authorColor: "#ffd369", // Highlighted author color
        },
        typography: {
          fontSize: "1.5rem", // Font size for the quote
          fontFamily: {
            quote: "Pacifico", // Artistic font for the quote
            author: "Lato", // Clean font for the author
          },
        },
        spacing: {
          padding: "20px", // Padding around the quote
          margin: "0 auto", // Center alignment
        },
      },
    },
    {
      component: V22Footer,
      data: {
        links: [
          { label: "LinkedIn", url: "https://www.linkedin.com" },
          { label: "Twitter", url: "https://www.twitter.com" },
        ],
        contactMe: {
          email: "contact@yourdomain.com",
          phone: "+123 456 7890",
        },
      },
      settings: {
        layout: {
          textAlignment: "left", // Align content to the left by default
        },
        colors: {
          backgroundColor: "#333333", // Dark background
          textColor: "#ffffff", // White text
          linkColor: "#ffd369", // Highlighted link color
        },
        typography: {
          fontSize: "0.9rem", // Small font
          fontFamily: {
            body: "Lato", // Clean font for the footer
          },
        },
        spacing: {
          padding: "15px 20px", // Padding for the footer
          gap: "1rem", // Gap between items
        },
      },
    },
  ],
  metadata: {
    description: "V22 Desc.",
    version: "1.0.0",
    createdAt: "2025-01-13",
    updatedAt: "2025-01-13",
  },
  theme: {
    name: "Light",
    variant: "custom",
  },
  globalSettings: {},
  customData: {
    tags: ["hero", "slider", "images"],
  },
});

TemplateManagerAPI.registerTemplate({
  id: "V23",
  name: "V23",
  components: [
    {
      component: V23Nav,
      data: {
        logo: "/FLWeb/logo.png", // Image URL for logo
        links: [
          { name: "Home", url: "#" },
          { name: "About", url: "#" },
          { name: "Services", url: "#" },
          { name: "Contact", url: "#" },
        ],
      },
    },
    {
      component: V23Hero,
      data: {
        heading: "Welcome to the V23 Hero Section",
        title: "Hero Title",
        subtitle: "Hero Subtitle",
        bgUrl: "/FLWeb/bubbles.mp4", // Image URL
      },
      settings: {
        colors: {
          backgroundColor: "#000000",
          headingColor: "#ffffff",
          titleColor: "#ffffff",
          subtitleColor: "#ffffff",
        },
        layout: {
          textAlignment: "center",
        },
        spacing: {
          padding: "20px",
          gap: "10px",
        },
        typography: {
          fontSize: "18px", // Slightly larger font for emphasis
          fontFamily: {
            heading: "Tangerine", // Artistic font for heading
            title: "Bebas Neue", // Clean font for the title
            subtitle: "Lato", // Clean font for the subtitle
          },
        },
      },
    },
  ],
  metadata: {
    description: "V23 Desc.",
    version: "1.0.0",
    createdAt: "2025-01-18",
    updatedAt: "2025-01-18",
  },
  theme: {
    name: "Light",
    variant: "custom",
  },
  globalSettings: {},
  customData: {},
});

TemplateManagerAPI.registerTemplate({
  id: "V25",
  name: "V25",
  components: [
    {
      component: V25Nav,
      data: {
        logo: "/FLWeb/logo.png", // Image URL for logo
        links: [
          { name: "Home", url: "#" },
          { name: "About", url: "#" },
          { name: "Services", url: "#" },
          { name: "Contact", url: "#" },
        ],
      },
      settings: {},
    },
    {
      component: V25Hero,
      data: {
        heading: "Welcome to the V25 Hero Section",
        title: "Hero Title",
        subtitle: "Hero Subtitle",
        bgUrl: "/FLWeb/bubbles.mp4", // Image URL
      },
      settings: {},
    },
    {
      component: V25Body,
      data: {},
      settings: {},
    },
  ],
});

TemplateManagerAPI.registerTemplate(base01Template);
TemplateManagerAPI.registerTemplate(base02Template);
TemplateManagerAPI.registerTemplate(base03Template);
TemplateManagerAPI.registerTemplate(homepageTemplate);
TemplateManagerAPI.registerTemplate(aboutTemplate);

console.log("Templates with previews registered successfully!");
