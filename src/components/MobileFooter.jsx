import React from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

const MobileFooter = () => {
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5 style={{ fontWeight: "bold" }}>Services</h5>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Sell Phone</li>
              <li>Buy Phone</li>
              <li>Recycle Phone</li>
              <li>Find Phone</li>
              <li>Collab With Us</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5 style={{ fontWeight: "bold" }}>Company</h5>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <Link to="/aboutUs" onClick={() => window.scroll(0, 0)}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/career" onClick={() => window.scroll(0, 0)}>
                  Career
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h5 style={{ fontWeight: "bold" }}>Sell Device</h5>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Mobile Phone</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h5 style={{ fontWeight: "bold" }}>Help Support</h5>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
           
              <li>
                <Link to="/warranty" onClick={() => window.scroll(0, 0)}>
                  Warranty Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" onClick={() => window.scroll(0, 0)}>
                  Refund Policy
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h5 style={{ fontWeight: "bold" }}>More about us</h5>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <Link to="/privacy" onClick={() => window.scroll(0, 0)}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/tc" onClick={() => window.scroll(0, 0)}>
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default MobileFooter;
