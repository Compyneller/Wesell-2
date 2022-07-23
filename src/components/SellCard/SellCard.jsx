import { Card, Col, Container, Row } from "react-bootstrap";
import { SellCards } from "../../config/SellCardData";
import Additional from "./Additional";
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
                    data-aos="zoom-in"
                    data-aos-delay={`${index}50`}
                  >
                    <Card.Body className="d-flex flex-column align-items-center justify-content-center ">
                      <img src={items.img} height={50} width={50} />

                      <p
                        className="text-center mt-2 m-auto"
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
      <Additional />
    </div>
  );
};

export default SellCard;
