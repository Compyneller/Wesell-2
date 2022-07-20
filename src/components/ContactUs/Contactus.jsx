import { Col, Container, Row } from "react-bootstrap";
import contactus from "../../assets/contactus.svg";
import "./ContactUs.css";

const Contactus = () => {
  return (
    <Container>
      <div className="w-100 p-3 contactusContainer">
        <Row className="g-3">
          <Col sm={12} lg={8}>
            <div className="row">
              <div className="col-3">
                <img
                  src="https://img.icons8.com/clouds/344/new-post.png"
                  className="w-100"
                  alt=""
                />
              </div>
              <div className="col-9 d-flex justify-content-center flex-column">
                <h5>Email</h5>
                <a
                  href="mailto:
wesellhelp.contact@gmail.com"
                >
                  wesellhelp.contact@gmail.com
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <img
                  src="https://img.icons8.com/clouds/344/address.png"
                  className="w-100"
                  alt=""
                />
              </div>
              <div className="col-9 d-flex justify-content-center flex-column">
                <h5>Address</h5>
                <p>
                  2-A/3, KUNDAN MANSION, ASAF ALI RD, TURKMAN GATE, NEW DELHI,
                  DELHI, 110002 (Near RAJIV CHOWK METRO STATION)
                </p>
              </div>
            </div>
          </Col>
          <Col sm={12} lg={4} className="d-flex align-items-center">
            <img src={contactus} alt="" className="w-100" />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Contactus;
