// Page.tsx
import React from "react";
import TemplateManager from "../flengine/templateManager";

const Page: React.FC<{ groupId: string }> = ({ groupId }) => {
    const templateGroup = TemplateManager.getTemplateGroup(groupId);

    if (!templateGroup) {
        return <div className="bg-gray-700 text-white w-fit rounded-md px-5 py-10 mx-5 shadow-md">Template group <span className="bg-yellow-500 text-gray-800 p-2 rounded-md">{groupId}</span> not found</div>;
    }

    return (
        <div className="">
            {Object.entries(templateGroup).map(([templateId, { component: Component, data }]) => (
                <Component key={templateId} {...data} />
            ))}
        </div>
    );
};

export default Page;
