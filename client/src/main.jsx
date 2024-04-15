import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import Home from "./pages/customer/home.jsx";
import { MegaMenuWithHover } from "./components/navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider> 
      {/* <Home/> */}
    <MegaMenuWithHover />
    </ThemeProvider>
   
  </React.StrictMode>
);
