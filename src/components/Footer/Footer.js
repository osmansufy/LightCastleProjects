import React from "react";
import { Container } from "react-bootstrap";

import logo from "../../assets/images/logo.svg";
const Footer = () => {
  return (
    <Container>
      <div className="row my-4">
        <div className="col-md-6">
          <div className="fLeft">
            <div className="fLogo">
              <img src={logo} alt="" />
            </div>
            <p className="my-3">
              A short introduction about lcp A short introduction about lcp A
              short introduction about lcp
            </p>
            <div className="socialIcon">
              <div className="sIconWrapper">
                <i className="fa fa-facebook-f"></i>
              </div>
              <div className="sIconWrapper">
                <i className="fa fa-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="footerMenu">
            <ul className="d-flex justify-content-between">
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
            </ul>
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control py-4 px-3"
              placeholder="Your email"
            />
            <div className="input-group-append">
              <span
                style={{ backgroundColor: "#0073BB", color: "white" }}
                className=" input-group-text"
                id="basic-addon2"
              >
                Subscribe
              </span>
            </div>
          </div>
          <a href="" style={{ fontSize: "14px", fontWeight: "bold" }}>
            Subscribe for Newsletters
          </a>
        </div>
      </div>

      <div className="copyRight" style={{ borderTop: "1px solid #0073BB" }}>
        <h6 className="text-muted text-center">
          2020 LightCastle Partners. All rights reserved.
        </h6>
      </div>
    </Container>
  );
};

export default Footer;
