/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import TemplateManagerAPI from "../../modules/templateManagerAPI";
import { IoMdCloseCircle } from "react-icons/io"; // Close circle icon

interface MonitorTemplateModalProps {
  onClose: () => void;
}

const MonitorTemplateModal: FC<MonitorTemplateModalProps> = ({ onClose }) => {
  const selectedTemplateId = useSelector(
    (state: RootState) => state.template.selectedTemplateId
  );

  const template = TemplateManagerAPI.getTemplate(selectedTemplateId);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 pointer-events-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-gray-700"
        >
          <IoMdCloseCircle className="text-4xl" />
        </button>
        <h2 className="text-xl font-semibold mb-4">Monitor Template</h2>
        {template ? (
          <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-96">
            {JSON.stringify(template, null, 2)}
          </pre>
        ) : (
          <p>Loading...</p>
        )}
        <div className="mt-4 flex justify-between gap-2">
          <p className="text-sm text-gray-500">
            Powered by{" "}
            <span className="font-bold text-yellow-500">FLEngine</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MonitorTemplateModal;
