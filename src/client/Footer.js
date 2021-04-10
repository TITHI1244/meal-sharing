import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="left-footer">Created by Tithi for HYF</div>
      <div className="right-footer">Copyright {new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
