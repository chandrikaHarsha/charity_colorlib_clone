import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import about1 from "../Assets/about2.png.webp";
const About2 = () => {
  return (
    <>
      <div
        className="container-fluid pt-5"
        style={{ backgroundColor: "white" }}
      >
        <Container>
          <Row>
            <Col className="AboutContent p-4">
              <span className="AboutTitle">About Us</span>
              <h2>We are tender heart charity foundation.</h2>
              <p>
                When a child gets access to good food, it can change just about
                everything. Sed do eiusmod tempor incididunt dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              </p>
              <div className="btnSection d-flex">
                <button className="AboutBtn1 me-4"> Discover More</button>
              </div>
            </Col>
            <Col className="p-0">
              <img src={about1} className="img-fluid" alt="About" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default About2;
