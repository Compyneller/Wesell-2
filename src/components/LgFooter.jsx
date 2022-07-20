import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LgFooter = () => {
  return (
    <Row
      className="text-center text-light g-3 d-flex justify-content-center"
      style={{ listStyle: "none" }}
    >
      <Col sm={12} md={6} lg={2}>
        <h5 style={{ fontWeight: "bold" }}>Services</h5>
        <li>Sell Phone</li>
        <li>Buy Phone</li>
        <li>Recycle Phone</li>
        <li>Find Phone</li>
        <li>Collab With Us</li>
      </Col>
      <Col sm={12} md={6} lg={2}>
        <h5 style={{ fontWeight: "bold" }}>Company</h5>

        <li>
          <Link
            className="text-light"
            to="/aboutUs"
            onClick={() => window.scroll(0, 0)}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            className="text-light"
            to="/career"
            onClick={() => window.scroll(0, 0)}
          >
            Career
          </Link>
        </li>
      </Col>
      <Col sm={12} md={6} lg={2}>
        <h5 style={{ fontWeight: "bold" }}>Sell Devices</h5>

        <li>Mobile Phone</li>
      </Col>
      <Col sm={12} md={6} lg={2}>
        <h5 style={{ fontWeight: "bold" }}>Help Support</h5>

        <li>
          <Link
            className="text-light"
            to="/warranty"
            onClick={() => window.scroll(0, 0)}
          >
            Warranty Policy
          </Link>
        </li>
        <li>
          <Link
            className="text-light"
            to="/refund"
            onClick={() => window.scroll(0, 0)}
          >
            Refund Policy
          </Link>
        </li>
      </Col>
      <Col sm={12} md={6} lg={2}>
        <h5 style={{ fontWeight: "bold" }}>More about us</h5>

        <li>
          <Link
            className="text-light"
            to="/privacy"
            onClick={() => window.scroll(0, 0)}
          >
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link
            className="text-light"
            to="/tc"
            onClick={() => window.scroll(0, 0)}
          >
            Terms & Condition
          </Link>
        </li>
      </Col>
    </Row>
  );
};

export default LgFooter;
