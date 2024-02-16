import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./comps/global/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Der RouterProvider stellt eine vorgefertigte Route-Component zur Verfügung, die die routes/children als props übergibt*/}
    <RouterProvider router={router} />
  </React.StrictMode>
);
