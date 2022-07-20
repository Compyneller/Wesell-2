import { Card, Col, Container, Row } from "react-bootstrap";
import "./StandOut.css";
import { StandOutData } from "../../config/StandoutData";
import stand from "../../assets/stand.svg";

const StandOut = () => {
  return (
    <Container>
      <div className="standOutContainer w-100 p-3 text-center">
        <h1>What Makes Us Stand Out</h1>

        <br />
        <Row className="g-3">
          <Col sm={12} lg={6}>
            <Row className="g-3">
              {StandOutData.map((items, index) => {
                return (
                  <Col sm={6} lg={4} key={index}>
                    <Card className="standCard">
                      <Card.Body>
                        <img src={items.img} height={50} alt="" />
                        <br />
                        <h5>{items.heading}</h5>
                        <p>{items.text}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col sm={12} lg={6}>
            <img src={stand} className="w-100" alt="" />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default StandOut;
