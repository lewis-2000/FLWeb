import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { backToList } from "../../store/slices/templateSlice";
import Base from "../../Base";
import { HiArrowLeft } from "react-icons/hi";
import { IoDesktopOutline } from "react-icons/io5";
import { MdTabletMac } from "react-icons/md";
import { FaMobileAlt, FaFileExport } from "react-icons/fa"; // Import export icon
import { BsFiletypeJson } from "react-icons/bs"; // View JSON icon

import ExportModal from "./ExportModal"; // Import the modal component
import MonitorTemplateModal from "./MonitorTemplateModal";

const LivePreview: React.FC = () => {
  const dispatch = useDispatch();
  const selectedTemplateId = useSelector(
    (state: RootState) => state.template.selectedTemplateId
  );

  const [deviceMode, setDeviceMode] = useState<"desktop" | "tablet" | "mobile">(
    "desktop"
  );
  const [isExportModalOpen, setExportModalOpen] = useState(false);
  const [isMonitorModalOpen, setMonitorModalOpen] = useState(false);

  const modeStyles = {
    desktop: "w-full h-full",
    tablet: "w-[768px] h-[1024px]",
    mobile: "w-[375px] h-[667px]",
  };

  const handleModalToggle = (modalType: "export" | "monitor") => {
    if (modalType === "export") {
      setExportModalOpen(!isExportModalOpen);
    } else {
      setMonitorModalOpen(!isMonitorModalOpen);
    }
  };

  return (
    <div
      className={`h-full flex flex-col ${
        isExportModalOpen || isMonitorModalOpen ? "pointer-events-none" : ""
      }`}
    >
      <div className="flex items-center bg-[#ededed] rounded-md gap-4 border-b border-gray-300 p-2">
        <button
          onClick={() => dispatch(backToList())}
          className="p-2 bg-[#d1d1d1] rounded-full hover:bg-[#c1c1c1] transition-colors"
        >
          <HiArrowLeft className="text-xl text-gray-700" />
        </button>
        <div className="flex items-center gap-4">
          {["desktop", "tablet", "mobile"].map((mode) => (
            <button
              key={mode}
              onClick={() =>
                setDeviceMode(mode as "desktop" | "tablet" | "mobile")
              }
              className={`p-2 rounded-full transition-colors ${
                deviceMode === mode
                  ? "bg-[#1f2937] text-white"
                  : "bg-[#d1d1d1] text-gray-700 hover:bg-[#c1c1c1]"
              }`}
            >
              {mode === "desktop" && <IoDesktopOutline className="text-xl" />}
              {mode === "tablet" && <MdTabletMac className="text-xl" />}
              {mode === "mobile" && <FaMobileAlt className="text-xl" />}
            </button>
          ))}
          <button
            onClick={() => handleModalToggle("export")}
            className="p-2 bg-[#d1d1d1] rounded-full hover:bg-[#c1c1c1] transition-colors"
          >
            <FaFileExport className="text-xl text-gray-700" />
          </button>
          <button
            onClick={() => handleModalToggle("monitor")}
            className="p-2 bg-[#d1d1d1] rounded-full hover:bg-[#c1c1c1] transition-colors"
          >
            <BsFiletypeJson className="text-xl text-gray-700" />
          </button>
        </div>
      </div>
      <div
        className={`flex justify-center items-center bg-gray-100 mt-3 mx-auto overflow-hidden ${
          modeStyles[deviceMode]
        } ${
          isExportModalOpen || isMonitorModalOpen ? "pointer-events-none" : ""
        }`}
        style={{ overflow: "hidden", position: "relative" }}
      >
        {selectedTemplateId ? (
          <Base id={selectedTemplateId} />
        ) : (
          <p className="text-gray-500">No Template Selected</p>
        )}
      </div>
      {isExportModalOpen && (
        <ExportModal onClose={() => setExportModalOpen(false)} />
      )}
      {isMonitorModalOpen && (
        <MonitorTemplateModal onClose={() => setMonitorModalOpen(false)} />
      )}
    </div>
  );
};

export default LivePreview;
