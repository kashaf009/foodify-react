import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag"),
    React.createElement('p' , {}, "i am kashaf khan")
  ])
);

const heading = React.createElement("h1", {}, "hello world in react");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
