import React from "react";

const Footer: React.FC<{
  text: string;
  links: { name: string; url: string }[];
}> = ({ text, links }) => (
  <div className="p-4 bg-gray-800 text-white rounded-lg m-2">
    <p>{text}</p>
    <ul className="list-disc pl-5">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url}>{link.name}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
