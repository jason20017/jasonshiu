import React, { useRef } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/jasonshiu" className="nav-button">
          Home
        </Link>
      </div>
      <div className="nav-right" ref={navRef}>
        <div>
          <Link to="/about" className="nav-button" onClick={showNavbar}>
            About
          </Link>
        </div>
        <div>
          <Link to="/exp" className="nav-button" onClick={showNavbar}>
            Experience
          </Link>
        </div>
        <div>
          <Link to="/port" className="nav-button" onClick={showNavbar}>
            Portfolio
          </Link>
        </div>
        <div>
          <Link to="/blog" className="nav-button" onClick={showNavbar}>
            Blog
          </Link>
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
