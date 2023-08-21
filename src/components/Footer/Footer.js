import React from "react";

const Footer = () => (
  <footer className="d-flex flex-column bg-dark text-white px-3">
    <div className="row align-items-center px-0 py-2 border-bottom">
      <h4 className="col-md-4 col-sm-12 p-0">XYZ</h4>
      <div className="col-md-8 col-sm-12 d-flex justify-content-end align-items-center footer-links p-0">
        <p>About</p>
        <p>Careers</p>
        <p>Support</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions </p>
      </div>
    </div>
    <div className="row mt-2">
      <p className="col-12 p-0">Copyright © 2022 XYZ. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
