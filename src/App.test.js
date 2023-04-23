import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders as expected", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
