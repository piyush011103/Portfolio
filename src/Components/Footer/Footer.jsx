import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Piyush Kumar</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer_link">
              Portfolio
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://www.linkedin.com/in/piyush-kumar-b9a933249/"
            className="footer_social-link"
            target="_blank"
            title="LinkedIn"
          >
            <i class="fab fa-linkedin fa-m linkedin"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=9627807248&text=Hello, more information!"
            className="footer_social-link"
            target="_blank"
            title="Whatsapp"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a
            href="https://x.com/PiyushK_0111"
            className="footer_social-link"
            target="_blank"
            title="X (Twitter)"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
