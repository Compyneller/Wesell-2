import { Card, Container } from "react-bootstrap";

const RefundPolicy = () => {
  return (
    <Container className="containerPrivacy">
      <Card className="contactUsCard shadow-sm">
        <Card.Header
          className="text-light"
          as="h3"
          style={{ background: "#135C13" }}
        >
          Refund Policy
        </Card.Header>
        <Card.Body>
          <h5>WeSell Repair offers a refund within 2 days of the service.</h5>
          <p>You can claim your refund for the Screen replaced with us:</p>
          <ol>
            <li>
              We provide a 6 months warranty with a refund on every screen
              replacement under the following conditions –
              <ul>
                <li>
                  Screen/LCD that malfunction, or does not work as designed or
                  intended.
                </li>
                <li>
                  {" "}
                  ANY display issues that may arise without any manual
                  intervention and are related to the screen quality
                  specifically dead pixels and touch issues.
                </li>
              </ul>
            </li>
            <li>
              If the screen replaced by us causes any above-mentioned issues,
              you can claim a brand new screen with the continued warranty of 6
              months! or get a refund of your screen within 2 days of service
              date by returning our screen back. All you need to do is:
              <ul>
                <li>
                  Share the video of the phone with the prevailing display issue
                  on the{" "}
                  <a href="mailto:wesellcontact.help@gmail.com">
                    wesellcontact.help@gmail.com
                  </a>
                </li>
                <li>
                  {" "}
                  Send us your phone number/order number/IMEI Number. Just about
                  any of it on the{" "}
                  <a href="mailto:wesellcontact.help@gmail.com">
                    wesellcontact.help@gmail.com
                  </a>
                </li>
                <li>
                  Our Customer Service Associate will respond to you within a
                  few hours and schedule our technician visit to replace your
                  screen!
                </li>
              </ul>
            </li>
          </ol>
          <p>
            Warranty & Refund is limited to the parts and/or service(s) that
            were paid for. If only parts were purchased, warranty & refund is
            limited to the replacement of the parts. If parts and repair service
            were purchased, warranty extends to cover the labor cost of part
            replacement and any other repairs specifically resulting from the
            initial repair.
          </p>
          <h5>
            Note: Refund is applicable only on Service prices and slot charges
            are applicable only if an order is completed.{" "}
          </h5>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RefundPolicy;
