import React from "react";
import { Button, Card, Container } from "react-bootstrap";

const Career = () => {
  return (
    <div className="AboutUsContainer">
      <div className="mx-auto firstCircle"></div>
      <div className="my-auto secondCircle"></div>
      <div className="my-auto thirdCircle"></div>
      <Container className="d-flex flex-column justify-content-center aboutUsInnerContainer">
        <div className="aboutUsCardImage">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            alt=""
          />
        </div>
        <Card className="shadow rounded">
          <Card.Body>
            <h1>Find Your Dream Job With Us</h1>
            <br />
            <Button
              style={{
                background: "#135C13",
                color: "white",
                border: "none",
                width: "fit-content",
              }}
            >
              Join us
            </Button>
            <br />
            <br />
            <h3>Why Join WeSell?</h3>
            <p>
              If playing with gadgets, smartphones & electronic devices has
              always been your favorite hobby, and if you have the technical
              perspective or smart approach towards them, then join WeSell. You
              will fit perfectly with us if you know smartphones inside-out or
              have an interest in learning about them. Connect with us on a
              journey where we bring the best for the user, best for the
              environment & best for our upcoming future.{" "}
            </p>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Career;
