import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Use HashRouter here
import { Provider } from "react-redux";
import store from "./store/store.ts";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        {" "}
        {/* Remove the basename */}
        <App />
      </HashRouter>
    </Provider>
  </StrictMode>
);
