/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect } from "react";
import TemplateManager from "../../flengine/templateManager";
import Page from "../Page";
import { IoMdCodeDownload } from "react-icons/io";
import { IoMdSave, IoMdListBox } from "react-icons/io";

const TemplateConfig: React.FC = () => {
    const [allGroups, setAllGroups] = useState<string[]>([]);
    const [selectedGroup, setSelectedGroup] = useState<string>("base-02");
    const [editData, setEditData] = useState<Record<string, any>>({});
    const [saveMessage, setSaveMessage] = useState<Record<string, boolean>>({});

    // Fetch available template groups on mount
    useEffect(() => {
        const groups = Object.keys(TemplateManager.getAllTemplates());
        setAllGroups(groups);
    }, []);

    // Load selected template group data
    useEffect(() => {
        const templateGroup = TemplateManager.getTemplateGroup(selectedGroup);
        if (templateGroup) {
            const initialData = Object.fromEntries(
                Object.entries(templateGroup).map(([templateId, template]) => [
                    templateId,
                    template.data,
                ])
            );
            setEditData(initialData);
        }
    }, [selectedGroup]);

    const handleEdit = (templateId: string, fieldPath: string[], value: string) => {
        setEditData((prevEditData) => {
            const updatedData = { ...prevEditData };
            let target = updatedData[templateId] || {};
            for (let i = 0; i < fieldPath.length - 1; i++) {
                target = target[fieldPath[i]] = target[fieldPath[i]] || {};
            }
            target[fieldPath[fieldPath.length - 1]] = value;
            return { ...prevEditData, [templateId]: updatedData[templateId] };
        });
    };

    const handleSave = (templateId: string) => {
        if (editData[templateId]) {
            TemplateManager.modifyTemplate(selectedGroup, templateId, editData[templateId]);
            setSaveMessage((prev) => ({ ...prev, [templateId]: true }));
            setTimeout(() => {
                setSaveMessage((prev) => ({ ...prev, [templateId]: false }));
            }, 2000);
        }
    };

    const handleSaveAll = () => {
        Object.keys(editData).forEach((templateId) => {
            if (editData[templateId]) {
                TemplateManager.modifyTemplate(selectedGroup, templateId, editData[templateId]);
            }
        });
        setSaveMessage({});
        setTimeout(() => {
            setSaveMessage({});
        }, 2000);
    };

    const handleDownload = () => {
        const allTemplates = TemplateManager.getAllTemplates();
        const fileData = new Blob([JSON.stringify(allTemplates, null, 2)], {
            type: "application/json",
        });
        const url = URL.createObjectURL(fileData);

        const link = document.createElement("a");
        link.href = url;
        link.download = "templates.json";
        link.click();

        URL.revokeObjectURL(url);
    };

    const renderFields = (data: any, templateId: string, parentPath: string[] = []) => {
        return Object.entries(data).map(([key, value]) => {
            const currentPath = [...parentPath, key];
            if (typeof value === "object" && value !== null) {
                return (
                    <div key={key} className="ml-4 mt-2">
                        <h4 className="text-gray-700 font-semibold">{key}</h4>
                        {renderFields(value, templateId, currentPath)}
                    </div>
                );
            } else {
                return (
                    <div key={key} className="flex items-center justify-between mt-2">
                        <span className="text-sm text-gray-500">{key}</span>
                        <input
                            type="text"
                            className="ml-2 w-full p-1 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                            value={editData[templateId]?.[currentPath.join(".")] || value}
                            onChange={(e) => handleEdit(templateId, currentPath, e.target.value)}
                        />
                    </div>
                );
            }
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Header Section */}
            <header className="col-span-full flex items-center justify-between">
                <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
                    <IoMdListBox /> Editor
                </h1>
                <div className="flex items-center gap-4">
                    {/* Group Selector */}
                    <select
                        className="p-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                        value={selectedGroup}
                        onChange={(e) => setSelectedGroup(e.target.value)}
                    >
                        {allGroups.map((groupId) => (
                            <option key={groupId} value={groupId}>
                                {groupId}
                            </option>
                        ))}
                    </select>
                    <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2"
                        onClick={handleDownload}
                    >
                        <IoMdCodeDownload size={20} />
                        Config File
                    </button>
                </div>
            </header>

            {/* Input Fields Section */}
            <section className="bg-white p-6 rounded-lg shadow-md h-[81vh] overflow-hidden">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Templates</h2>
                <div className="h-full overflow-y-auto pr-4 pb-10">
                    {Object.entries(editData).map(([templateId, data]) => (
                        <div key={templateId} className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-md">
                            <h3 className="text-blue-600 font-semibold">{templateId}</h3>
                            <div>{renderFields(data, templateId)}</div>
                            <button
                                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2"
                                onClick={() => handleSave(templateId)}
                            >
                                <IoMdSave size={20} />
                                {saveMessage[templateId] ? "Saved!" : "Save"}
                            </button>
                        </div>
                    ))}
                    {Object.keys(editData).length > 0 && (
                        <button
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2"
                            onClick={handleSaveAll}
                        >
                            <IoMdSave size={20} />
                            Save All
                        </button>
                    )}
                </div>
            </section>

            {/* Live Preview Section */}
            <section className="col-span-1 lg:col-span-2 bg-white rounded-tr-lg rounded-tl-lg shadow-md h-[81vh] overflow-auto">
                <h2 className="text-lg font-semibold text-gray-800 px-3 py-1 flex items-center gap-2">
                    <IoMdListBox />
                    Live Preview: {selectedGroup}
                </h2>
                <div>
                    <Page key={selectedGroup} groupId={selectedGroup} />
                </div>
            </section>
        </div>
    );
};

export default TemplateConfig;
