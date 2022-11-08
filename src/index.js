import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Components/LayoutArea/Layout/Layout";
import "./index.css";
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
  // </React.StrictMode>
);
