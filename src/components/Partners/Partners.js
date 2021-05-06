import React from "react";
import { Container } from "react-bootstrap";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
const Partners = () => {
  return (
    <Container className="my-5">
      <div className="row">
        <div className="col-md-6">
          <div className="partNerWrapper">
            <h4 className="my-4">
              About
              <br />
              LightCastle Partners
            </h4>
            <p>
              A short description about lcp A short description about lcp A
              short description about lcp A short description about lcp A short
              description about lcp A short description about lcp A short
              description about lcp.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-deck">
            <div className="card shadow p-2 border-0 rounded-0">
              <div className="imgWrapper d-flex px-4 py-2 justify-content-center">
                <img src={p3} alt="" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center"> 150+</h5>
                <p className="card-text">
                  <p className="partnersInfo">Corporations</p>
                </p>
              </div>
            </div>
            <div className="card shadow p-2 border-0">
              <div className="imgWrapper d-flex px-4 py-2 justify-content-center">
                <img src={p1} alt="" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center"> 150+</h5>
                <p className="card-text">
                  <p className="partnersInfo">Corporations & Development</p>
                </p>
              </div>
            </div>
            <div className="card shadow p-2 border-0">
              <div className="imgWrapper d-flex px-4 py-2 justify-content-center">
                <img src={p2} alt="" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center"> 150+</h5>
                <p className="card-text">
                  <p className="partnersInfo">
                    Corporations & Development Partners consulted
                  </p>
                </p>
              </div>
            </div>
          </div>

          {/* <div className="allPartner card-deck">
            <div className="col-md-4">
              <div className="pItemWrapper shadow align-items-center p-3 d-flex flex-column">
                <div className="imgWrapper d-flex justify-content-center">
                  <img src={p3} alt="" />
                </div>

                <h3 className="my-2">150+</h3>
                <p className="partnersInfo">
                  Corporations & Development Partners consulted
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pItemWrapper card border-0 shadow align-items-center p-3 d-flex flex-column">
                <div className="imgWrapper d-flex justify-content-center">
                  <img src={p1} alt="" />
                </div>

                <h3 className="my-2">150+</h3>
                <p className="partnersInfo">
                  Corporations & Development Partners consulted
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pItemWrapper card border-0 shadow align-items-center p-3 d-flex flex-column">
                <div className="imgWrapper d-flex justify-content-center">
                  <img src={p2} alt="" />
                </div>
                <h3 className="my-2">150+</h3>
                <p className="partnersInfo">Corporations</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </Container>
  );
};

export default Partners;
