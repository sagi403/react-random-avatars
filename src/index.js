import React from "react";
import ReactDOM from "react-dom/client";
import RandomAvatar from "./RandomAvatar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RandomAvatar size={40} />
  </React.StrictMode>
);
