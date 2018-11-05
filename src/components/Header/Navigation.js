import React from "react";
import { Route, Router, IndexRedirect, IndexRoute, Link } from "react-router";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const audio = document.getElementById("audio");
    audio.play();
  }

  render() {
    return (
      <nav className="navbar navbar-default z7">
        <audio
          id="audio"
          src="http://front-end-noobs.com/jecko/assets/sound4.mp3"
        />

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <div className="navbar-header">
            {/* <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button> */}

            <div className="logoText">
              <a className="navbar-brand" href="#">
                <img
                  src={require("../../../public/img/homeAssets/wireFlow/icons/Logowireflow.png")}
                  alt="Automatio.co"
                />
              </a>
            </div>

            <div className="socialIcons">
              <div className="sIconsP faBack">
                <a href="https://www.facebook.com/wireflow/" target="_blank">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </div>

              <div className="sIconsP gitBack">
                <a href="https://github.com/vanila-io/wireflow" target="_blank">
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
              </div>

              <div className="sIconsP twBack">
                <a href="https://twitter.com/wireflow_co" target="_blank">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <ul className="nav navbar-nav display">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Faq</a>
            </li>
          </ul>

          <ul className="nav navbar-nav">
            {/* <li><a href="#">About</a></li> */}
            <li>
              <a href="https://moon.ly" target="_blank">
                Open Source
              </a>
            </li>
            <li>
              <a href="https://uxstore.com" target="_blank">
                UX Tools
              </a>
            </li>
            <li>
              <a href="https://vanila.io" target="_blank">
                Crafted by Vanila
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
