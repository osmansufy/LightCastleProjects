import React from "react";
import { Container } from "react-bootstrap";
import HeaderSection from "../Common/HeaderSection";
import l1 from "../../assets/images/latest1.png";
import l2 from "../../assets/images/latest2.png";
import l3 from "../../assets/images/latest3.png";
import l4 from "../../assets/images/latest4.png";
const Latest = () => {
  return (
    <Container>
      <section className="section">
        <HeaderSection
          title="Latest at LightCastle"
          btnTitle="See all updates"
        />
        <div className="row">
          <div className="col-md-6 mb-2">
            <div className="updateWrapper shadow no-gutters row">
              <div className="updateImgWrapper col-md-4">
                <img src={l1} alt="" />
              </div>
              <div className="updateInfoWrapper col-md-8 p-3 d-flex flex-column">
                <p className="date text-muted">Aug.6.2021</p>
                <h6>
                  LightCastle Partners signs Agreement with BRAC to analyze the
                  impact of BRAC’s IDP Projects
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="updateWrapper shadow no-gutters row">
              <div className="updateImgWrapper col-md-4">
                <img src={l2} alt="" />
              </div>
              <div className="updateInfoWrapper col-md-8 p-3 d-flex flex-column">
                <p className="date text-muted">Aug.6.2021</p>
                <h6>
                  LightCastle Partners signs Agreement with BRAC to analyze the
                  impact of BRAC’s IDP Projects
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="updateWrapper shadow no-gutters row">
              <div className="updateImgWrapper col-md-4">
                <img src={l3} alt="" />
              </div>
              <div className="updateInfoWrapper col-md-8 p-3 d-flex flex-column">
                <p className="date text-muted">Aug.6.2021</p>
                <h6>
                  LightCastle Partners signs Agreement with BRAC to analyze the
                  impact of BRAC’s IDP Projects
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="updateWrapper shadow no-gutters row">
              <div className="updateImgWrapper col-md-4">
                <img src={l4} alt="" />
              </div>
              <div className="updateInfoWrapper col-md-8 p-3 d-flex flex-column">
                <p className="date text-muted">Aug.6.2021</p>
                <h6>
                  LightCastle Partners signs Agreement with BRAC to analyze the
                  impact of BRAC’s IDP Projects
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Latest;
