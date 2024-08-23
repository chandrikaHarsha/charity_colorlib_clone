import Card from "react-bootstrap/Card";
const CardTemplate = (props) => {
  const action = () => {
    const CardBtn = document.querySelectorAll(".CardBtn");
    CardBtn.forEach((button) => {
      // console.log(button);
      button.addEventListener("mouseover", () => {
        const card = button.closest(".Card");
        const CardTitle = card.querySelector(".cardTitle");
        CardTitle.style.color = "#f15b43";
      });
      button.addEventListener("mouseout", () => {
        const card = button.closest(".Card");
        const CardTitle = card.querySelector(".cardTitle");
        CardTitle.style.color = "#263b5c";
      });
    });
  };

  return (
    <>
      <Card
        style={{
          width: "445px",
          height: "536.14px",
          backgroundColor: "#f4f2f1",
          position: "relative",
        }}
        className="Card"
      >
        <Card.Img
          variant="top"
          src={props.src}
          width={"445px"}
          height={"238.78px"}
          alt={props.title}
          className="p-0 img-fluid cardImg"
        />
        <Card.Body
          width={"428.33px"}
          style={{ color: "#f4f2f1", padding: "26px 18px 8px 22px" }}
          height={"167.97px"}
        >
          <Card.Title
            style={{
              color: "#263b5c",
              fontSize: "26px",
              fontFamily: "Rubik, sans serif",
            }}
            className="cardTitle"
          >
            {props.title}
          </Card.Title>
          <Card.Text
            style={{
              color: "#777777",
              fontSize: "16px",
              fontFamily: "Jost, sans serif",
              fontWeight: "400",
              lineHeight: "1.6",
            }}
          >
            {props.text}
          </Card.Text>
          <div>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{
                width: "410px",
                height: "99.39",
                padding: "19px 18px 20px 29px",
                position: "absolute",
                bottom: "0",
                fontWeight: "500",
              }}
            >
              <div>
                <span style={{ color: "#65c9bb" }}>{props.goal}</span>
                <p style={{ color: "#263b5c", fontWeight: "600" }}>Goal</p>
              </div>
              <div>
                <span style={{ color: "#65c9bb" }}>{props.raised}</span>
                <p style={{ color: "#263b5c", fontWeight: "600" }}>Raised</p>
              </div>
              <button className="CardBtn" btn={props.id} onMouseOver={action}>
                Donate
              </button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default CardTemplate;
