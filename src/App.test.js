/*
 * @Description: file content
 * @Author: Daniel
 * @LastEditors: Daniel
 * @Date: 2019-10-15 11:23:07
 * @LastEditTime: 2019-10-15 11:23:07
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
