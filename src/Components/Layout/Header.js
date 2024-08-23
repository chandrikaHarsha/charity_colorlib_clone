import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import brandLogo from "../Assets/logo.png.webp";
import { AiFillHeart } from "react-icons/ai";
import { useRef, useEffect } from "react";
const Header = () => {
  let navbar = useRef();
  useEffect(() => {
    console.log(navbar.current);
  }, []);
  const navigation = () => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        navbar.current.classList.add("scrolled");
      } else {
        navbar.current.classList.remove("scrolled");
      }
    });
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="w-100 position-fixed px-4 py-3 text-light Navbar"
        ref={navbar}
        onLoad={navigation}
      >
        <Navbar.Brand>
          <img
            src={brandLogo}
            alt="Brand Logo"
            width={"202px"}
            height={"48px"}
          />
        </Navbar.Brand>
        <Nav className="gap-3">
          <Nav.Link style={{ color: "white" }}>Home</Nav.Link>
          <Nav.Link style={{ color: "white" }}>Who We Are?</Nav.Link>
          <Nav.Link style={{ color: "white" }}>Programs</Nav.Link>
          <Nav.Link style={{ color: "white" }}>About</Nav.Link>
          <div className="dropDown mt-2" style={{ position: "relative" }}>
            <button
              className="dropDownBtn"
              style={{ background: "none", color: "white", border: "none" }}
            >
              Blog
              <div
                className="dropDownMenu"
                style={{
                  position: "absolute",
                  width: "120px",
                  background: "white",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              >
                <a href="#" style={{ textDecoration: "none", color: "black" }}>
                  Blog
                </a>
                <a href="#" style={{ textDecoration: "none", color: "black" }}>
                  Blog Details
                </a>
                <a href="#" style={{ textDecoration: "none", color: "black" }}>
                  Elements
                </a>
              </div>
            </button>
          </div>
          <Nav.Link style={{ color: "white" }}>Contact Us</Nav.Link>
        </Nav>
        <button className="navBtn">
          <AiFillHeart style={{ fontSize: "20px", marginRight: "5px" }} />
          Make a Donation
        </button>
      </Navbar>
    </>
  );
};
export default Header;
