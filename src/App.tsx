import "./modules/templateRegistry"; // Register Templates in the Registry
// import "./modules/JsonTemplateRegistry"; // Register Templates from JSON file
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Base from "./Base";
import ContentEditor from "./components/admin/TemplateConfig";
import Editor from "./components/editor/Editor";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Base id="homepage" />} />
        <Route path="/builder" element={<ContentEditor />} />
        <Route path="/dev" element={<Editor />} />
      </Routes>
    </div>
  );
}

export default App;
