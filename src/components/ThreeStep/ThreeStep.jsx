import React from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import "./Three.css";

const ThreeStep = () => {
  return (
    <Container>
      <div className="threeContainer p-3">
        <Row className="g-3">
          <Col sm={12} lg={6} className="d-flex">
            <div className=" m-auto text-center" style={{ width: "100%" }}>
              <h1 style={{ fontSize: "3vw" }}>3 Steps to Sell</h1>
              <h4 className="text-light">
                Sell your gadgets conveniently from your home or work place for
                free.
              </h4>
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <Carousel
              className="text-center"
              indicators={false}
              controls={false}
            >
              <Carousel.Item interval={1000}>
                <Card
                  className="threeCard"
                  style={{ width: "100%", height: "100%" }}
                >
                  <Card.Img
                    variant="top"
                    style={{ objectFit: "contain", height: "13vw" }}
                    src="https://img.icons8.com/external-wanicon-two-tone-wanicon/344/external-tag-shopping-and-store-wanicon-two-tone-wanicon.png"
                  />
                  <Card.Body>
                    <Card.Title as="h1">Get Suitable Price</Card.Title>
                    <Card.Text>
                      Tell us about your device name, specifications & its
                      condition and our AI tech will give you the best price.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <Card
                  className="threeCard"
                  style={{ width: "100%", height: "100%" }}
                >
                  <Card.Img
                    variant="top"
                    style={{ objectFit: "contain", height: "13vw" }}
                    src="https://img.icons8.com/officel/344/visit.png"
                  />
                  <Card.Body>
                    <Card.Title as="h1">Book free Pickup</Card.Title>
                    <Card.Text>
                      Schedule a free pickup from your home or work and select a
                      time slot at your convenience.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <Card
                  className="threeCard"
                  style={{ width: "100%", height: "100%" }}
                >
                  <Card.Img
                    variant="top"
                    style={{ objectFit: "contain", height: "13vw" }}
                    src="https://img.icons8.com/external-wanicon-flat-wanicon/344/external-rupee-diwali-wanicon-flat-wanicon.png"
                  />
                  <Card.Body>
                    <Card.Title as="h1">In Hand Instant Payment</Card.Title>
                    <Card.Text>
                      Get instant payment as soon as our executive picks up your
                      device.
                      <br />
                      <br />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ThreeStep;
