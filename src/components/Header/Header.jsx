import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Header.css";
import laptop from "../../assets/laptop2.png";
import mobile from "../../assets/smartphone.png";
import tablet from "../../assets/tablet2.png";
import ear from "../../assets/earphones.png";

const Header = () => {
  return (
    <Container>
      <div className="headerContainer">
        <Row className="g-4" style={{ height: "100%" }}>
          <Col sm={12} lg={6}>
            <Card
              className="headerCards "
              style={{
                backgroundColor: "#08AEEA",
                backgroundImage:
                  "linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)",
              }}
              data-aos="zoom-out-right"
            >
              <Card.Body className="d-flex flex-column align-items-center justify-content-center ">
                <img
                  className="w-100"
                  src={laptop}
                  alt=""
                  style={{ height: "20vw", objectFit: "contain" }}
                />
                <h3 className="text-center">Purana Phone Becho Aur Cash Pao</h3>
                <h5 className="text-center">Free Pickup | Instant Payment</h5>
                <br />
                <Button className="mx-auto" variant="dark">
                  Check Price
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={6}>
            <Row className="g-4">
              <Col sm={12} lg={12}>
                <Card
                  className="headerCards text-light"
                  style={{
                    backgroundColor: "#74EBD5",
                    backgroundImage:
                      "linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)",
                  }}
                  data-aos="zoom-out-down"
                >
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                    <img
                      className="w-100"
                      src={mobile}
                      alt=""
                      style={{ height: "7vw", objectFit: "contain" }}
                    />
                    <h3 className="text-center">
                      Sell your old Phone at Best Price
                    </h3>
                    <h5 className="text-center">
                      Free Pickup | Instant Payment
                    </h5>
                    <br />
                    <Button className="mx-auto" variant="dark">
                      Check Price
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} lg={6}>
                <Card
                  className="headerCards "
                  style={{
                    backgroundColor: "#FFDEE9",
                    backgroundImage:
                      "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
                  }}
                  data-aos="zoom-out-up"
                >
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                    <img
                      className="w-100"
                      src={tablet}
                      alt=""
                      style={{ height: "5vw", objectFit: "contain" }}
                    />
                    <h5 className="text-center">Looking for your next phone</h5>
                    <p className="text-center">Free Pickup | Instant Payment</p>

                    <Button className="mx-auto" variant="dark">
                      Check Price
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} lg={6}>
                <Card
                  className="headerCards "
                  style={{
                    backgroundColor: "#A9C9FF",
                    backgroundImage:
                      "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",
                  }}
                  data-aos="zoom-out-left"
                >
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                    <img
                      className="w-100"
                      src={ear}
                      alt=""
                      style={{ height: "5vw", objectFit: "contain" }}
                    />
                    <h5 className="text-center">
                      Purana Phone Becho Aur Cash Pao
                    </h5>
                    <p className="text-center">Free Pickup | Instant Payment</p>

                    <Button className="mx-auto" variant="dark">
                      Check Price
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Header;
