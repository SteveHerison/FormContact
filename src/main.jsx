import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="h-screen w-screen bg-greenConfig-200">
      <App />
    </main>
  </React.StrictMode>
);
