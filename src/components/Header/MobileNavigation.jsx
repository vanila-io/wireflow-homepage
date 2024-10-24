import React, { useState } from 'react';
import smallLogo from "../../img/homeAssets/wireFlow/logo.png";
import './mobileNavigation.css';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scrolling when menu is open
    document.body.style.overflow = isOpen ? 'unset' : 'hidden';
  };

  return (
    <div className="mobile-nav">
      <button 
        className={`hamburger ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul>
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
    </div>
  );
};

export default MobileNavigation;