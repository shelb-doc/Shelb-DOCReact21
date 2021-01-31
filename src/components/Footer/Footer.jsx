import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-nav">&copy; Shelb-DOC 2021</div>
      <a
        href="mailto: shelbycignetti@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-envelope-square"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/shelbycignetti/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/shelb-doc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github-square"></i>
      </a>
    </footer>
  );
}

export default Footer;
