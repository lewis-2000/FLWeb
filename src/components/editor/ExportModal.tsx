/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, FC } from "react";
import { FaFileDownload } from "react-icons/fa"; // Download icon
import TemplateManagerAPI from "../../modules/templateManagerAPI";
import { IoMdCloseCircle } from "react-icons/io"; // Close circle icon

interface ExportModalProps {
  onClose: () => void;
}

const ExportModal: FC<ExportModalProps> = ({ onClose }) => {
  const [templates, setTemplates] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const templates = await TemplateManagerAPI.getAllTemplates();
      setTemplates(templates);
    };
    fetchData();
  }, []);

  const downloadJson = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(templates, null, 2));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "templates.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 pointer-events-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-gray-700"
        >
          <IoMdCloseCircle className="text-4xl" />
        </button>
        <h2 className="text-xl font-semibold mb-4">Export Templates</h2>
        {templates ? (
          <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-96">
            {JSON.stringify(templates, null, 2)}
          </pre>
        ) : (
          <p>Loading...</p>
        )}
        <div className="mt-4 flex justify-between gap-2">
          <p className="text-sm text-gray-500">
            Powered by{" "}
            <span className="font-bold text-yellow-500">FLEngine</span>
          </p>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="p-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition-colors"
            >
              Close
            </button>
            <button
              onClick={downloadJson}
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <FaFileDownload />
              Download JSON
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportModal;
