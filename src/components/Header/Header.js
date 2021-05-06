import React from "react";
import { Container } from "react-bootstrap";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import NavBar from "./NavBar/NavBar";

import Topbar from "./Topbar/Topbar";

const Header = () => {
  return (
    <section className="headerSection mb-5">
      <Container>
        <Topbar />
        <NavBar />
        <Banner />
        <Featured />
      </Container>
    </section>
  );
};

export default Header;
