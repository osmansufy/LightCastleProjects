import React from "react";
import { Container } from "react-bootstrap";

import Slider from "react-slick";

import review01 from "../../assets/images/review1.png";
import review02 from "../../assets/images/review2.png";
import review03 from "../../assets/images/review3.png";
import review04 from "../../assets/images/review4.png";
const Testimonials = () => {
  const settings = {
    customPaging: (i) => {
      return (
        <a>
          <img src={`../../assets/images/review${i + 2}.png`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };
  const allReviews = [
    {
      id: 1,
      img1: review01,
      name: "Client Name",
      designation: "CEO",
      content:
        "A short note about lcp and the projects done so far A short note about lcp and the projects done so far A short note about lcp and the projects done so far A short note about lcp and the projects done s far",
    },
    {
      id: 2,
      img1: review02,
      name: "Client Name",
      designation: "CEO",
      content:
        "A short note about lcp and the projects done so far A short note about lcp and the projects done so far A short note about lcp and the projects done so far A short note about lcp and the projects done s far",
    },
    {
      id: 3,
      img1: review03,
      name: "Client Name",
      designation: "CEO",
      content:
        "A short note about lcp and the projects done so far A short note about lcp and the projects done so far A short note about lcp and the projects done so far A short note about lcp and the projects done s far",
    },
    {
      id: 4,
      img1: review04,
      name: "Client Name",
      designation: "CEO",
      content:
        "A short note about lcp and the projects done so far A short note about lcp and the projects done so far A short note about lcp and the projects done so far A short note about lcp and the projects done s far",
    },
  ];
  return (
    <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
      <div className="reviewWrapper">
        <Slider {...settings}>
          {allReviews?.map((review) => (
            <div className="singleReview">
              <h4 className="name text-center">{review.name}</h4>
              <p className="text-muted text-center">{review.designation}</p>
              <div className="review text-center">{review.content}</div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Testimonials;
