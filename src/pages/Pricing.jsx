import { Card, Col, Container, Row } from "react-bootstrap";
import iphone13 from "../assets/iphone13.png";
import phone from "../assets/iphone.png";
import refur from "../assets/refur.png";
import wifi from "../assets/wifi.png";
import speaker from "../assets/speaker.png";

const Pricing = () => {
  return (
    <Container>
      <Card className="shadow p-3 rounded">
        <Card.Body>
          <h3>Calculation of the Pricing of my device?</h3>
          <br />
          <div className="row g-3">
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <img src={iphone13} height={400} alt="" />
              <h5>Iphone 13 Pro 128GB</h5>
              <p className="text-success">Calculate Price Again</p>
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <h5>Your Device Price</h5>
              <h1 className="text-success">₹15000</h1>
            </div>
          </div>
          <br />
          <br />
          <p>
            Wesell produces a price quote for your device based on the
            information provided by you when placing your order. This activity
            is based on the following criteria:
          </p>
          <ul>
            <li> The age of your device</li>
            <li>
              {" "}
              The functionality of the device whether it turns on or not.
            </li>
            <li>
              The status of its important parts – screen, display, battery,
              speaker, camera, and more.
            </li>
            <li> The availability of a valid bill for your device.</li>
            <li> The availability of warranty period.</li>
          </ul>
          <br />
          <div className="row g-3">
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <img src={iphone13} height={400} alt="" />
              <h5>Iphone 13 Pro 128GB</h5>
              <p className="text-success">Calculate Price Again</p>
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <Row className="g-3 text-center">
                <div className="col-6">
                  <Card className="shadow-sm" style={{ width: "100%" }}>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                      <img src={phone} alt="" className="customIcons" />
                      <p>Display/Touchpad Issue/Discoloraion </p>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-6">
                  <Card className="shadow-sm" style={{ width: "100%" }}>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                      <img src={refur} alt="" className="customIcons" />
                      <p>Display/Touchpad Issue/Discoloraion </p>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-6">
                  <Card className="shadow-sm" style={{ width: "100%" }}>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                      <img src={wifi} alt="" className="customIcons" />
                      <p>Wifi/GPS Not Working</p>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-6">
                  <Card className="shadow-sm" style={{ width: "100%" }}>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                      <img src={speaker} alt="" className="customIcons" />
                      <p>Speaker Not Working</p>
                    </Card.Body>
                  </Card>
                </div>
              </Row>
            </div>
          </div>
          <br />
          <br />
          <h5>
            However, the price may be subject to change or vary, after the
            physical inspection and verification of your device by our agent
            during the time of pick up.
          </h5>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Pricing;
