import React from "react";

interface NavbarProps {
  links: { name: string; url: string }[];
  settings: {
    colors?: {
      backgroundColor?: string;
      linkColor?: string;
      linkHoverColor?: string;
    };
    typography?: {
      fontSize?: string;
      fontFamily?: {
        link?: string;
      };
    };
  };
}

const V22Nav: React.FC<NavbarProps> = ({ links, settings }) => {
  const backgroundColor = settings?.colors?.backgroundColor || "#ffffff";
  const linkColor = settings?.colors?.linkColor || "#333333";
  const linkHoverColor = settings?.colors?.linkHoverColor || "#333333";

  const fontSize = settings?.typography?.fontSize || "20px";
  const fontFamily = settings?.typography?.fontFamily || {};
  const linkFont = fontFamily.link || "Roboto";

  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <nav>
        <ul className="flex space-x-4 p-4 text-bold">
          {links.map((link, index) => (
            <li
              key={index}
              style={{
                fontSize,
                color: linkColor,
                fontFamily: linkFont,
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = linkHoverColor;
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = linkColor;
              }}
            >
              <a href={link.url} className="hover:underline">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default V22Nav;
