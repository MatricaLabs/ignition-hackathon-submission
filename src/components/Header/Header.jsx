import { useEffect, useState, useRef } from "react";
import "./Header.css";

const Header = (props) => {
  const canvasRef = useRef(null);
  const { context, setContext } = useState(null);

  useEffect(() => {
    // const canvas = canvasRef.current;
    // const ctx = canvas.getContext("2d");
    // ctx.canvas.width = 270;
    // ctx.canvas.height = 60;
    // new Pixels(canvas, 270, {
    //   //colorScheme: "ethereum",
    //   pixelSize: 5,
    //   pattern: "logo",
    // });
  }, []);

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
            <img
              className="social-icon"
              src={`twitter${props.dark ? "-dark" : ""}.png`}
            />
          </div>
          <div className="nav-item">
            <img
              className="social-icon"
              src={`discord${props.dark ? "-dark" : ""}.png`}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
