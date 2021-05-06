import React from "react";
import bannerImg from "../../../assets/images/bocks.png";
const Banner = () => {
  return (
    <section className="banner">
      <div className="bannerWrapper row">
        <div className=" col-md-6 ">
          <div className="bannerInfo d-flex  flex-column">
            <h3 className="text-white mb-4">
              Bangladesh's Stimulus Packages Can it stand against Covid-19?
            </h3>
            <div className="buttonGroup d-flex">
              <button type="button" className="btn mr-3 btn-primary">
                Read article
              </button>
              <button type="button" className="btn btn-outline-secondary">
                Covid-19 Series
              </button>
            </div>
          </div>
        </div>
        <div className="bannerImg col-md-6">
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
