import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image from "../Assets/logo.png.webp";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div
        className="container-fluid pt-5"
        style={{ background: "#263b5c", width: "100%", height: "400px" }}
      >
        <Container
          className="d-flex justify-content-around"
          style={{ width: "fit-content" }}
        >
          <Row className="Footer">
            <Col className="footerCol-1">
              <div>
                <img src={image} alt="Brand" />
                <p>
                  When a child gets access to good food, it can change just
                  about everything. Sed do eiusmod tempor incididunt dolore
                  magna aliqua.
                </p>
                <ul>
                  <li>
                    <FaFacebook className="socialIcon" />
                  </li>
                  <li>
                    <FaLinkedin className="socialIcon" />
                  </li>
                  <li>
                    <FaInstagram className="socialIcon" />
                  </li>
                  <li>
                    <FaYoutube className="socialIcon" />
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="footerCol-2">
                <span>Navigation</span>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="footerCol-3">
                <span>Contact Us</span>
                <address>4486 Richards Avenue, Modesto CA - 95354</address>
                <a href="#209-818-6041">209-818-6041</a>
                <a href="charity90@gmail.com">charity90@gmail.com</a>
              </div>
            </Col>
            <Col>
              <div className="footerCol-4">
                <span>Support</span>
                <p>When a child gets access to good food, it can change.</p>
                <button>Join Us Today</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Footer;
