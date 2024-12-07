// templateRegistry.ts
import TemplateManager from "./templateManager";

// Components for the first template group
import SideMenu from "../components/headers/SideMenuMobile";
import HeroSection from "../components/HeroSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Components for the second template group
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Testimonials from "../components/Testimonials";


// import NavbarLeft from "../components/headers/NavbarLeft";
// import HeaderWithToggleSearch from "../components/headers/HeaderWithToggleSearch";



import CenteredTextHero from "../components/hero/CenteredTextHero";
import ImageBackgroundHero from "../components/hero/ImageBackgroundHero";
import VideoBackgroundHero from "../components/hero/VideoBackgroundHero";
// import HeroWithActionButtonsAndRightImage from "../components/hero/heroWithActionButtonsAndRightImage";
import ImageSliderForegroundCenterTextHero from "../components/hero/ImageSliderForegroundCenterTextHero";

// Register the first template group
TemplateManager.registerTemplateGroup("group1", {
  sidemenumobile: { component: SideMenu, data: { name: "Side Menu", links: [
      { name: "Home", url: "https://example.com/home" },
      { name: "About", url: "https://example.com/about" },
      { name: "Contact", url: "https://example.com/contact" },
    ],
  }},
  hero: { component: HeroSection, data: { title: "Welcome to Our Site", subtitle: "Explore the world of React!" }},
  contact: { component: Contact, data: { email: "contact@company.com", phone: "+1234567890" }},
  footer: { component: Footer, data: { copyright: "© 2024 FLEngine" }},
});

// Register the second template group
TemplateManager.registerTemplateGroup("group2", {
  header: { component: Header, data: { title: "Our Amazing App", tagline: "The best experience awaits!" }},
  maincontent: { component: MainContent, data: { articles: ["Article 1", "Article 2", "Article 3"] }},
  testimonials: { component: Testimonials, data: { reviews: ["Great app!", "Loved it!", "Highly recommend!"] }},
});

TemplateManager.registerTemplateGroup("base-01",{
    hero: { component: CenteredTextHero, data: { title:"Centered Hero Title Text", subtitle:"Centered Hero subtitle", buttonText:"Hero Button"}},
    hero2: { component: ImageBackgroundHero, data: { title:"Centered Hero Title Text", subtitle:"Centered Hero subtitle", buttonText:"Hero Button", backgroundImageUrl:"/img2.jpg"}},
    hero3: { component: VideoBackgroundHero, data: { title:"Centered Hero Title Text", subtitle:"Centered Hero subtitle", buttonText:"Hero Button", videoUrl:"/vid1.mp4"}},



});

TemplateManager.registerTemplateGroup("base-02",{
    hero:{component: ImageSliderForegroundCenterTextHero, data:{
      title:"Welcome to My Hero Section Title", subtitle:"Subtitle static text",backgroundImageUrl1:"/img1.jpg", backgroundImageUrl2:"/img2.jpg", backgroundImageUrl3:"/img3.jpg", backgroundImageUrl4:"/img4.jpg", backgroundImageUrl5:"/img5.webp"
    }},
    maincontent: { component: MainContent, data: { articles: ["Article 1", "Article 2", "Article 3"] }},

})


// console.log("All Templates",TemplateManager.getAllTemplates());