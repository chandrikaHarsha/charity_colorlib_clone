import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import about3 from "../Assets/about3.jpg.webp";
const About3 = () => {
  return (
    <>
      <div className="container-fluid pt-5">
        <Container className="container">
          <Row>
            <Col className="p-4">
              <img src={about3} className="img-fluid" alt="About" />
            </Col>
            <Col className="AboutContent p-5 d-flex flex-column justify-content-center">
              <span className="AboutTitle">Helping Today</span>
              <h2>What we are doing</h2>
              <p>
                When a child gets access to good food, it can change just about
                everything. Sed do eiusmod tempor incididunt dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              </p>
              <div className="btnSection d-flex">
                <button className="AboutBtn2">Join Us Today</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default About3;
