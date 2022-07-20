import React from "react";
import { Card, Container } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div className="AboutUsContainer">
      <div className="mx-auto firstCircle"></div>
      <div className="my-auto secondCircle"></div>
      <div className="my-auto thirdCircle"></div>
      <Container className="d-flex flex-column justify-content-center aboutUsInnerContainer">
        <div className="aboutUsCardImage">
          <img
            src="https://images.unsplash.com/photo-1563906267088-b029e7101114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <Card className="shadow rounded aboutUsCard ">
          <Card.Body>
            <h3 className="aboutFont">About Us</h3>
            <br />
            <div className="row g-3">
              <div className="col-12 col-lg-8 d-flex flex-column justify-content-center">
                <h5>The Idea:</h5>
                <p>
                  Buying a new smartphone is always easier than selling your old
                  and damaged phone, right? As we are in the 21st century, there
                  is a solution for almost everything at your doorstep so why
                  not find an idea to sell your mobile phone at a true &
                  suitable cost.
                </p>
              </div>
              <div className="col-12 col-lg-4">
                <img
                  src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                  alt=""
                  className="w-100"
                />
              </div>
            </div>

            <br />
            <div className="row g-3">
              <div className="col-12 col-lg-4">
                <img
                  src="https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                  alt=""
                  className="w-100"
                />
              </div>
              <div className="col-12 col-lg-8 d-flex flex-column justify-content-center">
                <h5>The Vision:</h5>
                <p>
                  Imagination attracts creativity. After getting the objective,
                  we have launched a platform where you can BUY, SELL, RECYCLE &
                  REPAIR. With WeSell, you will get the best & reasonable prices
                  on every product and your satisfaction is our guarantee.
                </p>
              </div>
            </div>
            <br />
            <div className="row g-3">
              <div className="col-12 col-lg-8 d-flex flex-column justify-content-center">
                <h5>The Team:</h5>
                <p>
                  We have a team of professionals who are highly qualified &
                  trained in their respective job roles. The smart & advanced AI
                  tech, experienced customer support, finance managers &
                  innovative directors are running ‘WeSell’. We have promised to
                  grow, cope & work every second!
                </p>
              </div>
              <div className="col-12 col-lg-4">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                  className="w-100"
                />
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default AboutUs;
