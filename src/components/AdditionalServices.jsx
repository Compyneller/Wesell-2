import { Card, Col, Row } from "react-bootstrap";
import recycle from "../assets/recycle.png";
import refur from "../assets/refur.png";
import repair from "../assets/repair.png";
import donate from "../assets/donate.png";
import visit from "../assets/visit.png";
import earphone from "../assets/earphone.png";
import find from "../assets/find.png";
import compare from "../assets/compare.png";
import Form from "../Modal/Form";
import ThankYou from "../Modal/ThankYou";

const AdditionalServices = ({ openModel, setOpenModel }) => {
  return (
    <>
      <h3>Additional Services</h3>
      <Row className="g-3 text-center">
        <Col xs={4} sm={3} md={3} lg={2}>
          <Card
            className="shadow-sm glassCard"
            style={{ width: "100%" }}
            onClick={() => setOpenModel(true)}
          >
            <Card.Body>
              <img src={refur} alt="" className="customIcons" />
              <p>Refurbished Phone</p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4} sm={3} md={3} lg={2}>
          <Card
            className="shadow-sm glassCard"
            style={{ width: "100%" }}
            onClick={() => setOpenModel(true)}
          >
            <Card.Body>
              <img src={repair} alt="" className="customIcons" />
              <p>Repair Phone</p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4} sm={3} md={3} lg={2}>
          <Card
            className="shadow-sm glassCard"
            style={{ width: "100%" }}
            onClick={() => setOpenModel(true)}
          >
            <Card.Body>
              <img src={find} alt="" className="customIcons" />
              <p>Find New Phone</p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4} sm={3} md={3} lg={2}>
          <Card
            className="shadow-sm glassCard"
            style={{ width: "100%" }}
            onClick={() => setOpenModel(false)}
          >
            <Card.Body>
              <img src={recycle} alt="" className="customIcons" />
              <p>Recycle Phone</p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={4} sm={3} md={3} lg={2}>
          <Card
            className="shadow-sm glassCard"
            style={{ width: "100%" }}
            onClick={() => setOpenModel(false)}
          >
            <Card.Body>
              <img src={compare} alt="" className="customIcons" />
              <p>Compare Phone</p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4} sm={3} md={3} lg={2}>
          <Card
            className="shadow-sm glassCard"
            style={{ width: "100%" }}
            onClick={() => setOpenModel(false)}
          >
            <Card.Body>
              <img src={earphone} alt="" className="customIcons" />
              <p>Buy Accessories</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {openModel && <ThankYou closeModel={setOpenModel} />}
    </>
  );
};

export default AdditionalServices;
