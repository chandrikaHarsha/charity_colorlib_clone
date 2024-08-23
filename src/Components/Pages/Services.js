import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Service1 from "../Assets/services1.svg";
import Service2 from "../Assets/services2.svg";
import Service3 from "../Assets/services3.svg";
const Services = () => {
  return (
    <>
      <div className="container-fluid Services">
        <Container className="p-4 mt-2">
          <Row className="d-flex flex-column text-light text-center p-3  heading">
            <span>Helping Today</span>
            <h2>How we help people</h2>
          </Row>
          <Row className="ServiceContent d-flex justify-content-between p-4">
            <Col className="Col Col-1 col-3">
              <div className="img">
                <img src={Service1} alt="Food & water Service" />
              </div>
              <a href="#">
                <span>Pure Food & Water</span>
              </a>
              <p>
                Odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet
                pulvinar ante employees and organizations to support.
              </p>
            </Col>
            <Col className="Col Col-2 col-3">
              <div className="img">
                <img src={Service2} alt="Health Service" />
              </div>
              <a href="#">
                <span className="mb-3">Health & Medicine</span>
              </a>
              <p>
                Odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet
                pulvinar ante employees and organizations to support.
              </p>
            </Col>
            <Col className="Col Col-3 col-3">
              <div className="img">
                <img src={Service3} alt="Education Service" />
              </div>
              <a href="#">
                <span className="mb-3">Education</span>
              </a>
              <p>
                Odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet
                pulvinar ante employees and organizations to support.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Services;
