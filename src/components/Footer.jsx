import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import LgFooter from "./LgFooter";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#1b5e20",
        backgroundImage: "linear-gradient(132deg, #1b5e20 0%, #16A085 100%)",
      }}
    >
      <Container>
        {window.innerWidth <= 750 ? <MobileFooter /> : <LgFooter />}
      </Container>
    </div>
  );
};

export default Footer;
