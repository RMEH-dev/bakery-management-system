import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import Home from "./pages/customer/home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <div className="bg-brown-400">
        <Home />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
