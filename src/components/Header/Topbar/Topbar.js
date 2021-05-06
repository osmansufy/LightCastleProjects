import React from "react";
import { Container } from "react-bootstrap";

const Topbar = () => {
  return (
    <Container>
      <div className="topbarWrapper row justify-content-between mb-2 align-items-center">
        <div className="info d-flex align-items-center">
          <div className="phoneNumber mr-4">
            <i className="fa fa-phone mr-2 text-primary"></i>
            <span className="text-light ">+8801951567322</span>
          </div>
          <div className="email">
            <i className="fa fa-envelope mr-2 text-primary"></i>
            <span className="text-light">osmansufy20@gmail.com</span>
          </div>
        </div>
        <div className="touchBtn">
          <button type="button" class="btn btn-outline-secondary">
            Secondary
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Topbar;
