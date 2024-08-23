import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import about1 from "../Assets/about1.jpg.webp";
const About = () => {
  return (
    <>
      <div
        className="container-fluid pt-5"
        style={{ backgroundColor: "#fcf2eb" }}
      >
        <Container>
          <Row>
            <Col className="p-4">
              <img src={about1} className="img-fluid" alt="About" />
            </Col>
            <Col className="AboutContent p-4">
              <span className="AboutTitle">Upcoming Program</span>
              <h2>Donate vitamin B12 supply program</h2>
              <p>
                When a child gets access to good food, it can change just about
                everything. Sed do eiusmod tempor incididunt dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              </p>
              <div className="btnSection d-flex">
                <button className="AboutBtn1 me-4">Donate Now</button>
                <button className="AboutBtn2">View Programs</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default About;
