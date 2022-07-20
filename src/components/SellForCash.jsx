import { Card, Col, Container, Row } from "react-bootstrap";
import AdditionalServices from "./AdditionalServices";
import phone from "../assets/iphone.png";
import laptop from "../assets/laptop.png";
import tv from "../assets/tv.png";
import tablet from "../assets/tablet.png";
import earbud from "../assets/earbud.png";
import watch from "../assets/watch.png";
import speaker from "../assets/speaker.png";
import imac from "../assets/imac.png";
import camera from "../assets/camera.png";
import Form from "../Modal/Form";
import { useState } from "react";
import ThankYou from "../Modal/ThankYou";

const SellForCash = () => {
  const [openModel, setOpenModel] = useState(false);
  return (
    <>
      <div
        className="w-100 bg-dark"
        style={{
          backgroundColor: "#85FFBD",
          backgroundImage: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
        }}
      >
        <Container>
          <Row className="g-3 text-center">
            <Col xs={4} sm={3} md={3} lg={2}>
              <Card
                className="shadow-sm glassCard"
                style={{ width: "100%," }}
                onClick={() => setOpenModel(true)}
              >
                <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                  <img src={phone} alt="" className="customIcons" />
                  <p>Sell Phone</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4} sm={3} md={3} lg={2}>
              <Card
                className="shadow-sm glassCard"
                style={{ width: "100%," }}
                onClick={() => setOpenModel(true)}
              >
                <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                  <img src={laptop} className="customIcons" alt="" />
                  <p>Sell Laptop</p>
                </Card.Body>
              </Card>
            </Col>{" "}
            <Col xs={4} sm={3} md={3} lg={2}>
              <Card
                className="shadow-sm glassCard"
                style={{ width: "100%," }}
                onClick={() => setOpenModel(true)}
              >
                <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                  <img src={tablet} alt="" className="customIcons" />
                  <p>Sell Tablet</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4} sm={3} md={3} lg={2}>
              <Card
                className="shadow-sm glassCard"
                style={{ width: "100%," }}
                onClick={() => setOpenModel(true)}
              >
                <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                  <img src={tv} alt="" className="customIcons" />
                  <p>Sell TV</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4} sm={3} md={3} lg={2}>
              <Card
                className="shadow-sm glassCard"
                style={{ width: "100%," }}
                onClick={() => setOpenModel(true)}
              >
                <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                  <img src={earbud} className="customIcons" alt="" />
                  <p>Sell Earbuds</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4} sm={3} md={3} lg={2}>
              <Card
                className="shadow-sm glassCard"
                style={{ width: "100%," }}
                onClick={() => setOpenModel(true)}
              >
                <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                  <img src={watch} className="customIcons" alt="" />
                  <p>Sell Smart Watch</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4} sm={3} md={3} lg={2} onClick={() => setOpenModel(true)}>
              <Card
                className="shadow-sm glassCard"
                style={{ width: "100%," }}
                onClick={() => setOpenModel(true)}
              >
                <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                  <img src={speaker} alt="" className="customIcons" />
                  <p>Sell Smart Speaker</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4} sm={3} md={3} lg={2} onClick={() => setOpenModel(true)}>
              <Card
                className="shadow-sm glassCard"
                style={{ width: "100%," }}
                onClick={() => setOpenModel(true)}
              >
                <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                  <img src={imac} alt="" className="customIcons" />
                  <p>Sell iMac</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4} sm={3} md={3} lg={2} onClick={() => setOpenModel(true)}>
              <Card
                className="shadow-sm glassCard"
                style={{ width: "100%," }}
                onClick={() => setOpenModel(true)}
              >
                <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                  <img src={camera} className="customIcons" alt="" />
                  <p>Sell DSLR Camera</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <br />
          <br />
          <AdditionalServices
            openModel={openModel}
            setOpenModel={setOpenModel}
          />
        </Container>
      </div>
      {openModel && <Form closeModel={setOpenModel} />}
    </>
  );
};

export default SellForCash;
