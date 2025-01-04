// HeaderWithToggleSearch.tsx
import React, { useState } from "react";
import { IoSearchCircleSharp } from "react-icons/io5";

interface HeaderWithToggleSearchProps {
  color: string;
  links: { name: string; href: string }[];
}

const HeaderWithToggleSearch: React.FC<HeaderWithToggleSearchProps> = ({
  color,
  links,
}) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  // console.log("IsSearchVisible", isSearchVisible);

  return (
    <header className={`bg-${color} text-white p-4`}>
      <div className="flex justify-between items-center">
        {/* Links */}
        <nav>
          <ul className="flex space-x-4">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Toggle Search Bar */}
        <div className="relative">
          <button
            onClick={() => setIsSearchVisible((prev) => !prev)}
            onMouseEnter={() => setIsSearchVisible(true)}
            onMouseLeave={() => setIsSearchVisible(false)}
            className="p-2 bg-gray-300 text-black rounded"
          >
            <IoSearchCircleSharp size={30} />
          </button>
          {isSearchVisible && (
            <input
              type="text"
              placeholder="Search..."
              className="absolute top-full left-0 mt-2 p-2 rounded border border-gray-300"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderWithToggleSearch;
