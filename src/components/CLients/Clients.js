import React from "react";
import { Container } from "react-bootstrap";
import HeaderSection from "../Common/HeaderSection";
import Slider from "react-slick";
import client1 from "../../assets/images/client1.png";
import client2 from "../../assets/images/client2.png";
import client3 from "../../assets/images/client3.png";
import client4 from "../../assets/images/client4.png";
const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoPlay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container id="clients">
      <section className="section">
        <HeaderSection title="Clients" btnTitle="See all CLients" />

        <div>
          <Slider {...settings}>
            <div>
              <img style={{ maxWidth: "150px" }} src={client1} alt="" />
            </div>
            <div>
              <img style={{ maxWidth: "150px" }} src={client2} alt="" />
            </div>
            <div>
              <img style={{ maxWidth: "150px" }} src={client3} alt="" />
            </div>
            <div>
              <img style={{ maxWidth: "150px" }} src={client4} alt="" />
            </div>
            <div>
              <img style={{ maxWidth: "150px" }} src={client1} alt="" />
            </div>
            <div>
              <img style={{ maxWidth: "150px" }} src={client2} alt="" />
            </div>
            <div>
              <img style={{ maxWidth: "150px" }} src={client3} alt="" />
            </div>
            <div>
              <img style={{ maxWidth: "150px" }} src={client4} alt="" />
            </div>
          </Slider>
        </div>
      </section>
    </Container>
  );
};

export default Clients;
