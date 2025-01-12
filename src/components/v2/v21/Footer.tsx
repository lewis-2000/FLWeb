import React from "react";

interface FooterProps {
  text?: string;
  links?: { label: string; url: string }[];
  settings?: {
    colors?: {
      backgroundColor?: string;
      textColor?: string;
      linkColor?: string;
      linkHoverColor?: string;
    };
  };
}

const GalleryFooter: React.FC<FooterProps> = ({ text, links, settings }) => {
  const backgroundColor = settings?.colors?.backgroundColor || "#222222";
  const textColor = settings?.colors?.textColor || "#ffffff";
  const linkColor = settings?.colors?.linkColor || "#f4c542"; // Gold to match gallery theme
  const linkHoverColor = settings?.colors?.linkHoverColor || "#d1a82d"; // Darker gold

  return (
    <footer
      className="w-full p-4 text-center"
      style={{ backgroundColor, color: textColor }}
    >
      {text && <p className="mb-2">{text}</p>}
      {links && links.length > 0 && (
        <div className="flex justify-center space-x-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{
                color: linkColor,
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = linkHoverColor;
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = linkColor;
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
      <p className="mt-4 text-sm">
        © {new Date().getFullYear()} Your Company. All Rights Reserved.
      </p>
    </footer>
  );
};

export default GalleryFooter;
