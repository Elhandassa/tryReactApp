import React from "react";
// import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./components/App.js";

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
// ReactDom.render(<App />, document.getElementById("root"));
