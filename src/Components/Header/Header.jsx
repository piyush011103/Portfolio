import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  //change background header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });
  const [toggle, setToggle] = useState(false);//toggle menu
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav_logo">
          Piyush Portfolio
        </a>

        <div className={toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_links active-link">
                <i className="uil uil-home nav_icon"></i>Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className="nav_links">
                <i className="uil uil-user nav_icon"></i> About
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills" className="nav_links">
                <i className="uil uil-file-alt nav_icon"></i>Skills
              </a>
            </li>
            <li className="nav_item">
              <a href="#services" className="nav_links">
                <i className="uil uil-briefcase-alt nav_icon"></i>Services
              </a>
            </li>
            <li className="nav_item">
              <a href="#qualification" className="nav_links">
                <i className="uil uil-brain nav_icon"></i>Qualification
              </a>
            </li>
            <li className="nav_item">
              <a href="#portfolio" className="nav_links">
                <i className="uil uil-image nav_icon"></i>Portfolio
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact" className="nav_links">
                <i className="uil uil-message nav_icon"></i>Contact
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav_close" onClick={() => setToggle(!toggle)}></i>

        </div>
        <div className="nav_toggle" onClick={() => setToggle(!toggle)}>
            <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
