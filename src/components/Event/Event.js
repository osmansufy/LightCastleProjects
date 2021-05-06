import React from "react";
import { Container } from "react-bootstrap";
import CountDown from "./CountDown";
const Event = () => {
  return (
    <Container>
      <div className="row no-gutters section">
        <div className="col-md-6">
          <div className="eventBanner">
            <div className="eventForm">
              <h5 className="text-white mb-3">Register for Early Access</h5>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control py-4 px-3"
                  placeholder="Your email"
                />
                <div className="input-group-append">
                  <span className="register input-group-text" id="basic-addon2">
                    Register
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <CountDown />
        </div>
      </div>
    </Container>
  );
};

export default Event;
