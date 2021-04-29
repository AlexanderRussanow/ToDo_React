import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TestApp from "./for_test/1";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<TestApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
