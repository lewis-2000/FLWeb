import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
const JSONHandler: React.FC = () => {
    // State to manage the JSON data
    const [data, setData] = useState<Record<string, any>>({});
    const [localStorageKey] = useState<string>("templateData");

    // Load fallback JSON or localStorage data on component mount
    useEffect(() => {
        const loadFallbackData = async () => {
            const localData = localStorage.getItem(localStorageKey);
            if (localData) {
                setData(JSON.parse(localData));
            } else {
                // Load the static JSON from public folder
                const response = await fetch("/fallback.json");
                const jsonData = await response.json();
                setData(jsonData);
            }
        };
        loadFallbackData();
    }, [localStorageKey]);

    // Save data to localStorage
    const saveToLocalStorage = () => {
        localStorage.setItem(localStorageKey, JSON.stringify(data));
        alert("Data saved to localStorage!");
    };

    // Download the JSON data as a file
    const downloadJSON = () => {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        saveAs(blob, "templates.json");
    };

    // Handle JSON file upload
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target?.result as string;
                try {
                    const jsonData = JSON.parse(content);
                    setData(jsonData);
                    alert("Data loaded successfully!");
                } catch (err) {
                    alert("Invalid JSON file.");
                }
            };
            reader.readAsText(file);
        }
    };

    return (
        <div className="p-4 bg-gray-900 text-white">
            <h1 className="text-xl mb-4">JSON Handler</h1>

            {/* Data display */}
            <pre className="bg-gray-800 p-4 rounded-md max-h-96 overflow-auto">
                {JSON.stringify(data, null, 2)}
            </pre>

            {/* Actions */}
            <div className="mt-4">
                <button
                    className="mr-2 px-4 py-2 bg-green-500 text-white rounded-md"
                    onClick={saveToLocalStorage}
                >
                    Save to LocalStorage
                </button>
                <button
                    className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                    onClick={downloadJSON}
                >
                    Download JSON
                </button>
                <label className="inline-block px-4 py-2 bg-yellow-500 text-black rounded-md cursor-pointer">
                    Upload JSON
                    <input
                        type="file"
                        accept=".json"
                        className="hidden"
                        onChange={handleFileUpload}
                    />
                </label>
            </div>
        </div>
    );
};

export default JSONHandler;
