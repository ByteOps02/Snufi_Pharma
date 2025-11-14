import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

// Root element
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

// Performance mark for app start
if (performance?.mark) {
  performance.mark("app-start");
}

// Create React root with concurrent features
const root = createRoot(rootElement);

root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Performance mark for app render
if (performance?.mark) {
  performance.mark("app-render");
  performance.measure("app-startup", "app-start", "app-render");
}
