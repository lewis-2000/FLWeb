import React, { useState, useEffect } from "react";
import TemplateManager from "../flengine/templateManager";

const Page: React.FC<{ groupId: string }> = ({ groupId }) => {
    const [templateGroup, setTemplateGroup] = useState(() => TemplateManager.getTemplateGroup(groupId));
    const [isLoading, setIsLoading] = useState(!templateGroup);

    useEffect(() => {
        if (!templateGroup) {
            const interval = setInterval(() => {
                const loadedGroup = TemplateManager.getTemplateGroup(groupId);
                if (loadedGroup) {
                    setTemplateGroup(loadedGroup);
                    setIsLoading(false);
                    clearInterval(interval);
                }
            }, 100); // Poll every 100ms
            return () => clearInterval(interval);
        }
    }, [groupId, templateGroup]);

    if (isLoading) {
        return <div className="text-yellow-500">Loading templates...</div>;
    }

    if (!templateGroup) {
        return (
            <div className="bg-gray-700 text-white w-fit rounded-md px-5 py-10 mx-5 shadow-md">
                Template group <span className="bg-yellow-500 text-gray-800 p-2 rounded-md">{groupId}</span> not found
            </div>
        );
    }

    return (
        <div>
            {Object.entries(templateGroup).map(([templateId, { component: Component, data }]) => (
                <Component key={templateId} {...data} />
            ))}
        </div>
    );
};

export default Page;
