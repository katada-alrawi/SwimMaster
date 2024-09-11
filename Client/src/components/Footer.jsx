import React from "react";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h4>About Us</h4>
          <a href="https://www.facebook.com/">
            <img src="/public/icons/lettering-.png" width="90px" alt="Facebook" />
          </a>
        </div>
        <div className="footer-section links">
          <h4>Quick Links</h4>

          <a href="#">
            <img
              src="/public/icons/icons8-home-64.png"
              width="50px"
              alt="Twitter"
            />{" "}
          </a>

          <a href="#">
            <img
              src="/public/icons/icons8-service-64.png"
              width="50px"
              alt="Twitter"
            />{" "}
          </a>

          <a href="#">
            <img
              src="/public/icons/icons8-contact-64.png"
              width="50px"
              alt="Twitter"
            />
          </a>
        </div>
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/">
              <img src="/public/icons/facebook.png" alt="Facebook" />
            </a>

            <a href="https://www.facebook.com/">
              <img src="/public/icons/twitter-.png" alt="Facebook" />
            </a>

            <a href="https://www.facebook.com/">
              <img src="/public/icons/instagram.png" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Designed by Katada</p>
      </div>
    </footer>
  );
};

export default Footer;
