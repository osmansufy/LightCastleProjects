import React from "react";
import { Container } from "react-bootstrap";
import insight1 from "../../assets/images/insight1.png";
import insight2 from "../../assets/images/insight2.png";
import insight3 from "../../assets/images/insight3.png";
import HeaderSection from "../Common/HeaderSection";
const Insight = () => {
  return (
    <Container>
      <section className="section">
        <HeaderSection title="Featured Insights" btnTitle="View All Insights" />
        <div className="row">
          <div className="col-md-6">
            <div className="insightBannerWrapper h-100"></div>
          </div>
          <div className="col-md-6">
            <div className="insightItemWrapper d-flex flex-column">
              <div className="mb-3 shadow  row">
                <div className="updateImgWrapper col-md-4">
                  <img src={insight1} alt="" />
                </div>
                <div className="updateInfoWrapper col-md-8 p-1 d-flex flex-column">
                  <p className="marketInsight">Market Insight</p>
                  <h6>
                    LightCastle Partners signs Agreement with BRAC to analyze
                    the impact of BRAC’s IDP Projects
                  </h6>
                </div>
              </div>
              <div className="mb-3 shadow  row">
                <div className="updateImgWrapper col-md-4">
                  <img src={insight2} alt="" />
                </div>
                <div className="updateInfoWrapper col-md-8 p-1 d-flex flex-column">
                  <p className="marketInsight">Market Insight</p>
                  <h6>
                    LightCastle Partners signs Agreement with BRAC to analyze
                    the impact of BRAC’s IDP Projects
                  </h6>
                </div>
              </div>
              <div className="mb-3 shadow  row">
                <div className="updateImgWrapper col-md-4">
                  <img src={insight3} alt="" />
                </div>
                <div className="updateInfoWrapper col-md-8 p-1 d-flex flex-column">
                  <p className="marketInsight">Market Insight</p>
                  <h6>
                    LightCastle Partners signs Agreement with BRAC to analyze
                    the impact of BRAC’s IDP Projects
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Insight;
