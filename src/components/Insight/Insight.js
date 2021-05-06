import React from "react";
import { Container } from "react-bootstrap";
import insight1 from "../../assets/images/insight1.png";
import insight2 from "../../assets/images/insight2.png";
import insight3 from "../../assets/images/insight3.png";
import HeaderSection from "../Common/HeaderSection";
const Insight = () => {
  return (
    <Container>
      <section id="featured" className="section">
        <HeaderSection title="Featured Insights" btnTitle="View All Insights" />
        <div className="row">
          <div className="col-md-6">
            <div className="insightBannerWrapper d-flex align-items-end h-100">
              <div className="d-flex m-3">
                <div className="insightBannerContent">
                  <h6 style={{ color: "#E68449" }}>ENTREPRENEURSHIP</h6>
                  <h4>
                    Bangladesh Startup Ecosystem- The Untapped Digital Goldmine
                    of Asia
                  </h4>
                  <p className="text-muted">
                    Bangladesh’s Startup Ecosystem has experienced incredible
                    growth since its journey began in the early 2010s. With over
                    USD 200 million in investments, 1000+ startups have..
                  </p>
                  <a className="d-flex  align-items-center" href="">
                    Read more <i className="fa  ml-2 fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="insightItemWrapper d-flex flex-column">
              <div className="mb-3 shadow  row">
                <div className="updateImgWrapper col-md-4">
                  <img src={insight1} alt="" />
                </div>
                <div className="updateInfoWrapper col-md-8 p-1 align-items-sm-start align-items-center  d-flex flex-column">
                  <p className="marketInsight">Market Insight</p>
                  <h6 className="p-2 p-sm-0 ">
                    LightCastle Partners signs Agreement with BRAC to analyze
                    the impact of BRAC’s IDP Projects
                  </h6>
                </div>
              </div>
              <div className="mb-3 shadow  row">
                <div className="updateImgWrapper col-md-4">
                  <img src={insight2} alt="" />
                </div>
                <div className="updateInfoWrapper align-items-sm-start align-items-center col-md-8 p-1 d-flex flex-column">
                  <p className="marketInsight">Market Insight</p>
                  <h6 className="p-2 p-sm-0 ">
                    LightCastle Partners signs Agreement with BRAC to analyze
                    the impact of BRAC’s IDP Projects
                  </h6>
                </div>
              </div>
              <div className="mb-3 shadow  row">
                <div className="updateImgWrapper col-md-4">
                  <img src={insight3} alt="" />
                </div>
                <div className="updateInfoWrapper align-items-sm-start align-items-center col-md-8 p-1 d-flex flex-column">
                  <p className="marketInsight">Market Insight</p>
                  <h6 className="p-2 p-sm-0 ">
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
