import styled from "styled-components";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { Fade } from "react-awesome-reveal";

const FlipCard = ({ title, description, flipDirection, fadeDirection }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const onHandleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Fade triggerOnce={true} direction={fadeDirection}>
      <Container>
        <ReactCardFlip isFlipped={isFlipped} flipDirection={flipDirection}>
          <div className="card__frontView">
            <p>{title}</p>
            <Button onClick={onHandleClick}>More Details</Button>
          </div>

          <div className="card__backView">
            <p>{description}</p>
            <Button onClick={onHandleClick}>Go Back</Button>
          </div>
        </ReactCardFlip>
      </Container>
    </Fade>
  );
};

export default FlipCard;

const Container = styled.div`
  margin: 15px 10px;
  .card__frontView,
  .card__backView {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f2ff;
    justify-content: space-evenly;
    padding: 10px;

    border: 2px #8267da solid;
    border-radius: 5px;

    height: 300px;
    width: 300px;

    > p {
      text-align: center;
    }
    > button {
      border: 1px #8267da solid;
      background-color: white;
      color: #8267da;
      padding: 5px;
      width: 150px;
    }
  }
  .card__frontView {
    > p {
      font-size: larger;
      font-weight: bold;
      color: #8267da;
    }
  }
  .card__backView {
    > p {
      color: #8267da;
    }
  }
  @media screen and (max-width: 1100px) {
    .card__frontView,
    .card__backView {
      width: 500px;
    }
  }
  @media screen and (max-width: 600px) {
    .card__frontView,
    .card__backView {
      width: 400px;
    }
  }
  @media screen and (max-width: 500px) {
    .card__frontView,
    .card__backView {
      width: 250px;
    }
  }
`;
