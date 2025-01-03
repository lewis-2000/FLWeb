import React from "react";

const Footer: React.FC<{ text: string; links: string[] }> = ({
  text,
  links,
}) => (
  <div className="p-4 bg-gray-800 text-white rounded-lg m-2">
    <p>{text}</p>
    <ul className="list-disc pl-5">
      {links.map((link, index) => (
        <li key={index}>{link}</li>
      ))}
    </ul>
  </div>
);

export default Footer;
