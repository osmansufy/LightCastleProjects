import React from "react";

import FeaturedVideos from "../FeaturedVideos/FeaturedVideos";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Latest from "../Latest/Latest";
import Partners from "../Partners/Partners";
import Clients from "../CLients/Clients";
import Testimonials from "../Testimonials/Testimonails";
import Event from "../Event/Event";
import Insight from "../Insight/Insight";
import ServiceTab from "../ServiceTab/ServiceTab";

const Home = () => {
  return (
    <>
      <Header />
      <ServiceTab />
      <Partners />
      <Clients />
      <FeaturedVideos />
      <Testimonials />
      <Insight />
      <Event />
      <Latest />
      <Footer />
    </>
  );
};

export default Home;
