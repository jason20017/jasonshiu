import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navi: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const showNavbar = () => {
    navRef.current?.classList.toggle("responsive_nav");
  };
  return (
    <div className="nav-container">
      <div className="nav-left">
        <a href="/" className="nav-button">
          Home
        </a>
      </div>
      <div className="nav-right" ref={navRef}>
        <div>
          <a href="/about" className="nav-button">
            About
          </a>
        </div>
        <div>
          <a href="/exp" className="nav-button">
            Experience
          </a>
        </div>
        <div>
          <a href="/port" className="nav-button">
            Portfolio
          </a>
        </div>
        <div>
          <a href="/blog" className="nav-button">
            Blog
          </a>
        </div>
        <button className="rwd-btn rwd-close-btn" onClick={showNavbar}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <button className="rwd-btn " onClick={showNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default Navi;
