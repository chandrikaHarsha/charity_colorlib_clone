import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BlogInfo } from "./BlogInfo";
import BlogCard from "./BlogCard";
import { useState, useRef, useEffect } from "react";
const Blog = () => {
  const [blogInfo, setBlogInfo] = useState(BlogInfo);
  let sliderContainer = useRef();
  useEffect(() => {
    console.log(sliderContainer.current);
  }, []);
  const prevPress = () => {
    const width = sliderContainer.current.clientWidth;
    sliderContainer.current.scrollLeft =
      sliderContainer.current.scrollLeft - width;
    console.log("Prev Click", width);
  };
  const nextPress = () => {
    const width = sliderContainer.current.clientWidth;
    sliderContainer.current.scrollLeft =
      sliderContainer.current.scrollLeft + width;
    console.log("next Click", width);
  };
  const Hover = () => {
    const CtrBtn = document.querySelectorAll(".CtrBtn");
    // console.log(CtrBtn);
    CtrBtn.forEach((items) => {
      const colorChange = items.firstChild;
      colorChange.style.color = "#ffff";
    });
  };
  const HoverOut = () => {
    const CtrBtn = document.querySelectorAll(".CtrBtn");
    // console.log(CtrBtn);
    CtrBtn.forEach((items) => {
      const colorChange = items.firstChild;
      colorChange.style.color = "#000";
    });
  };

  return (
    <>
      <div className="container-fluid">
        <Container className="p-5 Blog">
          <Row>
            <Col className="col-3 d-flex flex-column gap-3 blog-left">
              <a href="#" className="text-decoration-none">
                <span
                  style={{
                    color: "#65c9bb",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  News
                </span>
              </a>
              <h2
                style={{
                  color: "#263b5c",
                  fontSize: "40px",
                  fontFamily: "'Jost' sans-serif",
                  fontWeight: "400",
                }}
              >
                Latest Blog
              </h2>
              <div
                className="d-flex gap-2 manualControls"
                style={{ height: "70px", width: "70px" }}
              >
                <button
                  className="prevBtn CtrBtn"
                  onMouseOver={Hover}
                  onMouseOut={HoverOut}
                  onClick={prevPress}
                >
                  <i class="fa-solid fa-chevron-left"></i>
                </button>
                <button
                  className="nextBtn CtrBtn"
                  onMouseOver={Hover}
                  onMouseOut={HoverOut}
                  onClick={nextPress}
                >
                  <i class="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </Col>
            <Col className="col-9 d-flex overflow-hidden p-2 blog-right">
              <>
                <div
                  className="d-flex overflow-hidden gap-3 Slider w-100"
                  ref={sliderContainer}
                >
                  {blogInfo.map((items, index) => (
                    <>
                      <BlogCard
                        key={index}
                        src={items.src}
                        title={`Card ${index} ${items.title}`}
                        text={items.text}
                        className="BlogCardSlide"
                      />
                    </>
                  ))}
                </div>
              </>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Blog;
