import React from "react";
import { Card, Container } from "react-bootstrap";

const WarrantyPolicy = () => {
  return (
    <Container className="containerPrivacy">
      <Card className="contactUsCard shadow-sm">
        <Card.Header
          className="text-light"
          as="h3"
          style={{ background: "#135C13" }}
        >
          Warranty Policy
        </Card.Header>
        <Card.Body>
          <p>
            WeSell repair offers you a 6 month warranty on every mobile screen
            repaired/replaced by us from the date of invoice.{" "}
          </p>
          <h5>The 6 months warranty covers :</h5>
          <ol>
            <li>
              {" "}
              Screen/LCD that malfunctions, or does not work as intended or
              designed.
            </li>
            <li>
              {" "}
              Any display issues that may arise without any manual intervention
              and are related to the screen quality specifically touch issues.
            </li>
            <li>
              One time screen replacement in case of accidental damage, if
              claimed within 1 month from the date of invoice.
            </li>
          </ol>
          <p>
            If the screen replaced by us causes any above-mentioned issues, you
            can claim a brand new screen with the continued warranty of 6
            months!
          </p>
          <h5>Note</h5>
          <ol>
            <li>
              {" "}
              The warranty is valid only for the specific device repaired and
              the original customer. It is not transferable across devices or if
              the device is sold or handed over to another individual.
            </li>
            <li>
              {" "}
              Mobile phones must be switching on and functioning normally other
              than screen to process claim requests.
            </li>
            <li>
              {" "}
              In case the old screen of your device is not handed over to the
              technician, the warranty is applicable only for 3 months.
            </li>
          </ol>
          <h5>Want to claim warranty?</h5>
          <p>
            {" "}
            You can claim the warranty by writing to us at{" "}
            <a href="mailto:wesellcontact.help@gmail.com">
              wesellcontact.help@gmail.com
            </a>{" "}
            with the service details and the invoice delivered to you at the
            time of repair. If you need any further assistance, please connect
            via Chat or write to us at{" "}
            <a href="mailto:wesellcontact.help@gmail.com">
              wesellcontact.help@gmail.com
            </a>
            <br />
            The warranty is not applicable under the following scenarios :
          </p>
          <ol>
            <li>
              We do not cover any kind of accidental damage and our warranty
              stands null and void in all such related cases.
            </li>
            <li>
              Any display issues that may arise without any manual intervention
              and are related to the screen quality specifically visible lines
              and blank screen.
            </li>
            <li>
              {" "}
              Excessive Damage to the device wherein there is a possibility that
              internal components might have been affected due to excessive or
              critical damage to the device or screen.{" "}
            </li>
            <li>
              {" "}
              Subsequent mishandling which causes the frame to bend, twist, or
              crack will not be entertained
            </li>
            <li>
              {" "}
              Subsequent mishandling with the screen such as hard press that may
              initiate discoloration or lining on the display.
            </li>
            <li>Subsequent accidental or purposeful drops</li>
            <li> Water damage</li>
            <li> Tampering with internal hardware</li>
            <li>Damage resulting from attempted customer self-repairs</li>
            <li>Software issues unrelated to the repair</li>
            <li> Jail-broken devices</li>
            <li> New damages unrelated to the original repair</li>
            <li>
              {" "}
              Any loss of data occurring as a result of the repair – customers
              are advised to back up all data prior to the repair attempt
            </li>
          </ol>
          <h5>
            Note: Refund is not applicable to the spare part as on screen.
            Please refer to your order email for more information.
          </h5>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default WarrantyPolicy;
