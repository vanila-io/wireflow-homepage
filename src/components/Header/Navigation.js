import React from "react";
import { Route, Router, IndexRedirect, IndexRoute, Link } from "react-router";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-default z7">
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <div className="navbar-header">
            {/*<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>*/}

            <div className="logoText">
              <a className="navbar-brand" href="#">
                <img
                  src={require("../../img/homeAssets/wireFlow/icons/Logowireflow.png")}
                  alt="Automatio.co"
                />
              </a>
            </div>
          </div>

          <ul className="nav navbar-nav">
            <li>
              <a href="https://github.com/vanila-io/wireflow" target="_blank">
                <img
                  src={require("../../img/homeAssets/wireFlow/icons/githubIcon.png")}
                  alt="wireflow.co github"
                />
                Open Source
              </a>
            </li>
            <li>
              <a href="https://automatio.ai" target="_blank">
                <img
                  src={require("../../img/homeAssets/wireFlow/icons/automatio-logo.png")}
                  alt="automatio.ai"
                  style={{"width": "auto"}}
                />
                Crafted by Automatio team
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
