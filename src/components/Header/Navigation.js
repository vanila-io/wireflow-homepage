import React from "react";
import smallLogo from "../../img/homeAssets/wireFlow/logo.png";
import MobileNavigation from "./MobileNavigation";
import { Route, Router, IndexRedirect, IndexRoute, Link } from "react-router";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-default z7">
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <div className="navbar-header">
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
                <a href="/blog/" target="_blank">
                  <img
                    src={smallLogo}
                    alt="Wireflow blog"
                    style={{ width: "36px" }}
                  />
                  Blog
                </a>
              </li>
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
                    style={{ width: "auto" }}
                  />
                  Crafted by Automatio team
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <MobileNavigation />
      </>
    );
  }
}

export default Navigation;
