import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button } from "@material-ui/core";
import { Fade } from "react-awesome-reveal";
import Typist from "react-typist";

const Header = () => {
  return (
    <Fade triggerOnce={true} direction="down">
      <Container>
        <section>
          <LazyLoadImage src="/images/logo3.png" alt="" />
          <h2>
            <Typist>GUERDON FOUNDATION</Typist>
          </h2>
        </section>
        <section>
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.open("https://forms.gle/zz9BQAmZCKb1uWUUA", "_blank");
            }}>
            Join as a volunteer
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.open("https://forms.gle/kPwLPkxUP5Qpxuqx7", "_blank");
            }}>
            Donate
          </Button>
        </section>
      </Container>
    </Fade>
  );
};

export default Header;

const Container = styled.div`
  background-color: #8267da;
  padding: 1pc;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > img {
      height: 55px;
      border-radius: 10px;
      object-fit: contain;
    }
    > h2 {
      margin-left: 10px;
      color: whitesmoke;
    }
    > button {
      border: 2px white solid;
      width: 200px;
      background-color: #8267da;
      color: white;
      margin: 0 10px;
      font-family: "Poppins", sans-serif;
      font-weight: bold;
      /* text-transform: capitalize; */

      :hover {
        border: 2px whitesmoke solid;
        color: whitesmoke;
      }
    }
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
