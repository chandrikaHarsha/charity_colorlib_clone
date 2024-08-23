import { CardInfo } from "./CardInfo";
import CardTemplate from "./CardTemplate";
import { useState } from "react";
const CardSection = () => {
  const [CardContent, setCardContent] = useState(CardInfo);
  console.log(CardContent[0]);

  return (
    <>
      <div className="container-fluid d-flex gap-3 justify-content-between pt-5 m-0 p-0">
        {CardContent.length > 0 ? (
          <>
            {CardContent.map((items, index) => (
              <>
                <CardTemplate
                  key={index}
                  src={items.src}
                  title={items.title}
                  text={items.text}
                  goal={items.goal}
                  raised={items.raised}
                  btn={items.id}
                  className="cardData"
                />
              </>
            ))}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default CardSection;
