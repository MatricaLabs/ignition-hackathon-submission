import { useEffect, useState, useRef } from "react";
import "./Header.css";

const Header = (props) => {
  useEffect(() => {}, []);

  return (
    <header className={`header ${props.dark && "header-dark"}`}>
      <div className="header-container">
        <div className="header-title">
          <a href="/">
            <img src={`/matrica-logo${props.dark ? "-dark" : ""}.png`} />
          </a>
        </div>
        <nav className="header-nav">
          <div className="nav-item">
            <a href="/pixels">Pixels</a>
          </div>
          <div className="nav-item">
            <a
              href="https://twitter.com/MatricaLabs"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="social-icon"
                src={`twitter${props.dark ? "-dark" : ""}.png`}
              />
            </a>
          </div>
          <div className="nav-item">
            <a
              href="https://discord.gg/MatricaLabs"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="social-icon"
                src={`discord${props.dark ? "-dark" : ""}.png`}
              />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
