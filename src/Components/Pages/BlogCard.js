import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const BlogCard = (props) => {
  return (
    <>
      <div className="slideContainer">
        <Card style={{ width: "380px", height: "fit-content" }}>
          <Card.Img variant="top" src={props.src} />
          <Card.Body style={{background:"#f4f2f1"}}>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.text}</Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default BlogCard;
