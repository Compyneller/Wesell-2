import { Card, Col, Container, Row } from "react-bootstrap";
import { AdditionalData } from "../../config/AdditionalCard";
const Additional = () => {
  return (
    <div
      style={{
        backgroundColor: "#FAACA8",
        backgroundImage: "linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)",
      }}
    >
      <Container>
        <h1>Addition Services</h1>
        <br />
        <Row className="g-3">
          {AdditionalData?.map((items, index) => {
            return (
              <Col sm={4} lg={2} key={index}>
                <a href="mailto:wesellhelp.contact@gmail.com">
                  <Card
                    className="standCard d-flex flex-column align-items-center justify-content-center"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Card.Body>
                      <img
                        src={items.img}
                        style={{ height: "5vw", objectFit: "contain" }}
                      />
                      <br />
                      <br />
                      <p
                        className="text-center"
                        as="p"
                        style={{ fontWeight: "bold" }}
                      >
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

export default Additional;
