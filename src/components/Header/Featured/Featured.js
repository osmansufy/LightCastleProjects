import React from "react";

const Featured = () => {
  return (
    <section>
      <div className="row no-gutters">
        <div className="col-md-4">
          <div className="featuredWrapper d-flex flex-column">
            <h5>Our Services</h5>
            <i className="fa w-100 d-flex justify-content-end fa-long-arrow-right"></i>
          </div>
        </div>
        <div className="col-md-4">
          <div className="featuredWrapper d-flex flex-column">
            <a href="#featured">
              <h5>Featured Insight</h5>
              <i className="fa fa w-100 d-flex justify-content-end fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="featuredWrapper d-flex flex-column">
            <a href="#clients">
              <h5>Featured Services</h5>
              <i className="fa w-100 d-flex justify-content-end fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
