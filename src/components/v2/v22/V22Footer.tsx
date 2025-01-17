import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa"; // Importing React Icons

interface SocialLink {
  label: string;
  url: string;
}

interface ContactMe {
  email: string;
  phone: string;
}

interface V22FooterProps {
  links: SocialLink[];
  contactMe: ContactMe;
  settings: {
    layout: {
      textAlignment: string;
    };
    colors: {
      backgroundColor: string;
      textColor: string;
      linkColor: string;
    };
    typography: {
      fontSize: string;
      fontFamily: {
        body: string;
      };
    };
    spacing: {
      padding: string;
      gap: string;
    };
  };
}

const V22Footer: React.FC<V22FooterProps> = ({
  links,
  contactMe,
  settings,
}) => {
  const iconComponents: Record<string, JSX.Element> = {
    LinkedIn: <FaLinkedin size={20} />,
    Twitter: <FaTwitter size={20} />,
  };

  return (
    <footer
      style={{
        backgroundColor: settings.colors.backgroundColor,
        color: settings.colors.textColor,
        padding: settings.spacing.padding,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: settings.spacing.gap,
          flexWrap: "wrap", // Allow wrapping on smaller screens
        }}
      >
        {/* Social Links */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: settings.spacing.gap,
            flex: "1 1 100%", // Full width on small screens
          }}
        >
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                color: settings.colors.linkColor,
                textDecoration: "none",
                gap: "0.5rem",
                flex: "1", // Distribute space evenly
              }}
            >
              {iconComponents[link.label]} {link.label}
            </a>
          ))}
        </div>

        {/* Contact Me */}
        <div
          style={{
            textAlign: "right",
            flex: "1 1 100%", // Full width on small screens
            marginTop: "10px", // Add spacing for mobile
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: settings.typography.fontFamily.body,
              fontSize: settings.typography.fontSize,
            }}
          >
            <strong>Email:</strong> {contactMe.email}
          </p>
          <p
            style={{
              margin: 0,
              fontFamily: settings.typography.fontFamily.body,
              fontSize: settings.typography.fontSize,
            }}
          >
            <strong>Phone:</strong> {contactMe.phone}
          </p>
        </div>
      </div>

      {/* Inline Media Queries */}
      <style>
        {`
          @media (max-width: 768px) {
            footer div {
              flex-direction: column;
              text-align: center;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default V22Footer;
