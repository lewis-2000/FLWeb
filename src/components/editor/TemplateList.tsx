import { useDispatch } from "react-redux";
import { selectTemplate } from "../../store/slices/templateSlice";
import TemplateManagerAPI from "../../modules/templateManagerAPI";

const TemplateList = () => {
  const templates = TemplateManagerAPI.getAllTemplates();
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto h-full p-3">
      {templates.map((template) => (
        <div
          key={template.id}
          className="h-80 bg-gray-100 rounded-lg hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden"
          onClick={() => dispatch(selectTemplate(template.id))}
        >
          {/* Preview Image */}
          <div className="w-full h-48 bg-gray-200 mb-4 overflow-hidden">
            {template.preview ? (
              <img
                src={template.preview}
                alt={`${template.name} preview`}
                className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                No Preview Available
              </div>
            )}
          </div>

          {/* Template Info */}
          <div className="flex flex-col h-fit justify-between p-3 text-center">
            <h3 className="text-lg font-bold text-gray-800 truncate">
              {template.name}
            </h3>
            <p className="text-gray-600 text-sm mt-1 line-clamp-2 overflow-hidden">
              {template.metadata?.description || "No description available."}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TemplateList;
