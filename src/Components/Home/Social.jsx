import React from "react";

const Social = () => {
  return (
    <div className="home_social">
      <a
        href="https://www.linkedin.com/in/piyush-kumar-b9a933249/"
        className="home_social-icon"
        target="_blank"
        title="LinkedIn"
      >
        <i class="fab fa-linkedin fa-lg"></i>
      </a>
      <a
        href="https://github.com/piyush011103"
        className="home_social-icon"
        target="_blank"
        title="GitHub"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://leetcode.com/u/piyush_0111/"
        className="home_social-icon"
        target="_blank"
        title="Leetcode"
      >
        <i class="si si-leetcode"></i>
      </a>
    </div>
  );
};

export default Social;
