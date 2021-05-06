import React from "react";
import { Container } from "react-bootstrap";
import HeaderSection from "../Common/HeaderSection";

const FeaturedVideos = () => {
  return (
    <Container>
      <HeaderSection title="Featured Videos" btnTitle="See all videos" />
      <div className="row overflow-hidden">
        <div className="col-md-4">
          <div className="videoContainer">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/-oGMwOOHFyk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="fVideoInfoWrapper">
            <h3 className="my-3">Video Title</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
              reiciendis veniam officiis alias assumenda! Magni{" "}
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="videoContainer">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/-oGMwOOHFyk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="fVideoInfoWrapper">
            <h3 className="my-3">Video Title</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
              reiciendis veniam officiis alias assumenda! Magni{" "}
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="videoContainer">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/-oGMwOOHFyk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="fVideoInfoWrapper">
            <h3 className="my-3">Video Title</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
              reiciendis veniam officiis alias assumenda! Magni{" "}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FeaturedVideos;
