// SideMenu.tsx
import React, { useState } from 'react';

interface SideMenuProps {
    links: { name: string; href: string }[];
}

const SideMenu: React.FC<SideMenuProps> = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false);

    // console.log("Links", links);

    return (
        <div className="relative">
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setIsOpen(!isOpen)}
            >
                Menu
            </button>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
                    <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-md p-4 z-20">
                        <button className="text-gray-500 mb-4" onClick={() => setIsOpen(false)}>
                            Close
                        </button>
                        <ul>
                            {links.map((link, index) => (
                                <li key={index} className="mb-2">
                                    <a href={link.href} className="text-gray-700 hover:underline">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SideMenu;
