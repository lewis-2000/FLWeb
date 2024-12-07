/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import TemplateManager from "../../flengine/templateManager";
import Page from "../Page";
import './adminStyles.css'

const TemplateConfig = () => {
    const [selectedGroup, setSelectedGroup] = useState<string>("base-02");
    const [editData, setEditData] = useState<Record<string, any>>({});
    const templateGroup = TemplateManager.getTemplateGroup(selectedGroup);

    const handleEdit = (templateId: string, field: string, value: string) => {
        setEditData({
            ...editData,
            [templateId]: { ...editData[templateId], [field]: value },
        });
    };

    const handleSave = (templateId: string) => {
        if (editData[templateId]) {
            TemplateManager.modifyTemplate(selectedGroup, templateId, editData[templateId]);
            setEditData((prev) => ({ ...prev, [templateId]: undefined }));
        }
    };

    return (
        <div className="h-screen w-screen flex flex-col p-4 bg-gray-900 text-white">
            {/* Header Section */}
            <div className="flex justify-between mb-4 h-fit">
                <h1 className="text-xl font-bold text-yellow-500">FLWeb Engine </h1>
                <select
                    className="p-2 bg-gray-800 text-yellow-500 border border-yellow-500 rounded-md"
                    value={selectedGroup}
                    onChange={(e) => setSelectedGroup(e.target.value)}
                >
                    {Object.keys(TemplateManager.getAllTemplates()).map((groupId) => (
                        <option key={groupId} value={groupId}>
                            {groupId}
                        </option>
                    ))}
                </select>
            </div>

            {/* Main Content Section */}
            <div className="flex flex-col md:flex-row gap-4 overflow-hidden h-full">
                {/* Template Details */}
                <div className="overflow-auto w-full md:w-1/3 bg-gray-800 p-4 rounded-md shadow-lg scrollbar scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-gray-900">
                    <h2 className="text-lg font-semibold mb-4">Template Details</h2>
                    {templateGroup ? (
                        Object.entries(templateGroup).map(([templateId, { data }]) => (
                            <div key={templateId} className="mb-4 p-2 bg-gray-700 rounded-md">
                                <h3 className="text-yellow-400 font-bold">{templateId}</h3>
                                <ul className="text-sm">
                                    {Object.entries(data).map(([key, value]) => (
                                        <li key={key} className="flex justify-between items-center mt-1">
                                            <span className="text-gray-300">{key}:</span>
                                            <input
                                                type="text"
                                                className="ml-2 p-1 bg-gray-600 text-yellow-300 rounded-md"
                                                value={editData[templateId]?.[key] || value}
                                                onChange={(e) => handleEdit(templateId, key, e.target.value)}
                                            />
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className="mt-2 px-4 py-1 bg-yellow-500 text-gray-900 font-semibold rounded-md"
                                    onClick={() => handleSave(templateId)}
                                >
                                    Save
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No templates found in this group.</p>
                    )}
                </div>

                {/* Template Preview */}
                <div className="overflow-auto flex-1 bg-gray-800 py-4 rounded-md shadow-lg scrollbar scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-gray-900">
                    <h2 className="text-lg font-semibold mb-4 px-4">Template Preview</h2>
                    <Page groupId={selectedGroup} />
                </div>
            </div>
        </div>
    );
};

export default TemplateConfig;
