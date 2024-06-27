import React from "react";
import { createRoot } from "react-dom/client";

const nextedElement = React.createElement("div", { className: "hello" }, [
  React.createElement("h1", null, "Hi"),
]);

const rootElement = document.getElementById("div");
const root = createRoot(rootElement);
root.render(nextedElement);
