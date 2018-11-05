import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory } from "react-router";
import routes from "./config/routes";

// Css Files
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../public/styles/home.css";
import "../public/styles/newHome.css";
import "../public/styles/responsive.css";
// Js Files
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/jquery/dist/jquery.min.js";

class App extends React.Component {
  render() {
    return <Router history={browserHistory}>{routes}</Router>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
