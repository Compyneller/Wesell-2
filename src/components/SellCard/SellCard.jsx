import { Card, Col, Container, Row } from "react-bootstrap";
import { SellCards } from "../../config/SellCardData";
const SellCard = () => {
  console.log(SellCards);
  return (
    <div
      style={{
        backgroundColor: "#85FFBD",
        backgroundImage: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
      }}
    >
      <Container>
        <Row className="g-3">
          {SellCards?.map((items, index) => {
            return (
              <Col sm={4} lg={2} key={index}>
                <a href="mailto:wesellhelp.contact@gmail.com">
                  <Card
                    className=" standCard d-flex flex-column align-items-center justify-content-center"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Card.Body>
                      <img
                        src={items.img}
                        style={{ height: "5vw", objectFit: "contain" }}
                      />
                      <br />
                      <br />
                      <p className="text-center" style={{ fontWeight: "bold" }}>
                        {items.text}
                      </p>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default SellCard;
