import React from "react";

const hero: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => (
  <div className="p-4 bg-blue-100 rounded-lg">
    <h1 className="text-3xl font-bold">{title}</h1>
    <p className="text-lg">{subtitle}</p>
  </div>
);

export default hero;
