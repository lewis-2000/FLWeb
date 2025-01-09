// NavbarLeft.tsx
import React from "react";

interface NavbarProps {
  links: { name: string; url: string }[];
}

const NavbarLeft: React.FC<NavbarProps> = ({ links }) => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url} className="hover:underline">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavbarLeft;
