import { Button } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Fade } from "react-awesome-reveal";
import FlipCard from "../components/FlipCard";

const HomePage = () => {
  const bannerImagePaths = ["b1.jpg", "b2.jpg"];

  return (
    <Container>
      <Fade triggerOnce={true} delay={500}>
        <h2 className="home__titleMobile">Guerdon Foundation</h2>

        <Carousel
          autoPlay={true}
          emulateTouch={true}
          infiniteLoop={true}
          showArrows={true}
          showStatus={false}
          className="homePage__Carousel">
          {bannerImagePaths.map((item) => (
            <div>
              <img src={`/images/${item}`} alt="related-img" />
            </div>
          ))}
        </Carousel>
      </Fade>
      <Fade triggerOnce={true} direction="up" delay={500}>
        <div className="userHome__DonateNow">
          <Button>Donate Now</Button>
        </div>
      </Fade>

      {/* who are we */}
      <Fade triggerOnce={true} delay={800} direction="up">
        <div className="userHome__whoAreWe">
          <h1>About us</h1>
          <p>
            Beggars are the embodiment of the fallacy that Human rights are
            always bettering the lives of the unfortunate. Although beggars are
            present at a global scale, Sri Lanka is chiefly infamous for having
            an overwhelming number of beggars; ranging between piteous figures
            of 85,000 to 100,000.
          </p>
          <div>
            <br />
            <h2>The life of a beggar</h2>
            <p>
              The Guerdon Foundation is an NGO carrying a focused mission of
              supporting the lives of the beggars In Sri Lanka. Our goal is to
              lend an additional and reliable hand to not only refine the lives
              of beggars but also to reduce the number of them in Sri Lanka.
            </p>
            <br />
            <p>
              It goes without saying that beggars live a harsh life. Sadly, a
              lot of us, though not all, look through the torn clothes, watch
              their grimed, hashed skin and fail to regard that all of it is
              enveloping a living human with human feelings; most similar to you
              in terms of genome and soul. Life as a Beggar is many things at
              once; it is a constant race of survival, keeping human whilst
              being continually bombarded by insatiable hunger, feelings of
              hopelessness and helplessness.
            </p>
            <br />
            <p>
              What’s even more depressing is that a majority of beggars were
              once people living in privilege, their tongues aware of the taste
              of luxury. They were people with dreams and talent all falling
              victim under bad circumstances thrown by life. Many were abandoned
              by their very own children for whom they worked tirelessly to
              achieve them a great life; while some chose this life as an escape
              from the hostile environment of Orphanages they were put in by
              force and then the hapless victims who were born into poverty.
              Apart from the innumerable predicaments they face from sustaining
              an unsanitary lifestyle to living in a vicious cycle of poverty,
              the children are stripped from their rights for education, a
              crafted recipe for a never ending cycle of Beggary.
            </p>
            <img src="/images/beggar.png" alt="" />
          </div>
        </div>
      </Fade>

      {/* Our programs */}
      <Fade triggerOnce={true} direction="up" delay={800}>
        <div className="userHome__ourPrograms">
          <h1>Our programs</h1>
          <main>
            <FlipCard
              title="Weekly feeding program"
              description="This is some description about the card itself, This is some description about the card itself, This is some description about the card itself, This is some description about the card itself, This is some description about the card itself, This is some description about the card itself"
              flipDirection="vertical"
              fadeDirection="right"
            />
            <FlipCard
              title="Monthly distribution of care package"
              description="This is some description about the card itself, This is some descripti scription about the card itsehe card itself, This is some description about the card itself"
              flipDirection="horizontal"
              fadeDirection="up"
            />
            <FlipCard
              title="Child education program"
              description="This is some description about the card itself, This is some descripti scription ab cripti scription abcripti scription abcripti scription about the card itsehe card itself, This is some description about the card itself"
              flipDirection="vertical"
              fadeDirection="left"
            />
          </main>
        </div>
      </Fade>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  /* border: 1px blue solid; */

  .home__titleMobile {
    margin: 30px 0;
    text-align: center;
    color: #8267da;
    display: none;
  }
  .homePage__Carousel {
    .carousel {
      .thumbs {
        display: none;
      }
    }
  }
  .userHome__DonateNow {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    > button {
      border: 1px white solid;
      padding: 20px 40px;
      background-color: #8267da;
      font-family: "Poppins", sans-serif;
      font-weight: bold;
      border-radius: 50px;
      color: white;

      :hover {
        border: 1px #8267da solid;
        background-color: white;
        color: #8267da;
      }
    }
  }
  .userHome__whoAreWe {
    /* border: 1px blue solid; */
    margin: 40px;
    padding: 40px 20px;
    > p,
    > h1,
    > div > h2,
    > div > p {
      text-align: center;
    }
    > h1,
    > div > h2 {
      color: #8267da;
      margin-bottom: 10px;
    }
    > div {
      > img {
        display: flex;
        align-self: center;
        justify-content: center;
        margin: 0 auto;
        margin-top: 50px;
        height: 300px;
      }
    }
  }

  .userHome__ourPrograms {
    /* border: 1px blue solid; */
    margin: 40px;
    padding: 80px 0;

    > h1 {
      text-align: center;
      color: #8267da;
      margin-bottom: 30px;
    }
    > main {
      display: flex;
      justify-content: space-evenly;
    }
  }
  @media screen and (max-width: 1100px) {
    .userHome__ourPrograms {
      margin: 30px 0;
      padding: 50px 0;
    }
  }
  @media screen and (max-width: 1000px) {
    .userHome__ourPrograms {
      > h1 {
        text-align: center;
        color: #8267da;
        margin-bottom: 30px;
      }
      > main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
      }
    }
  }

  @media screen and (max-width: 900px) {
    .home__titleMobile {
      display: block;
    }
    .userHome__DonateNow {
      > button {
        padding: 10px 40px;
      }
    }
    .userHome__whoAreWe {
      > div {
        > img {
          height: 200px;
        }
      }
    }
  }
  @media screen and (max-width: 400px) {
    .home__titleMobile {
      font-size: large;
    }
    .userHome__DonateNow {
      > button {
        padding: 10px 30px;
      }
      margin-top: 30px;
    }
    .userHome__whoAreWe {
      padding: 0;
      margin: 40px 20px;
      > h1 {
        font-size: x-large;
      }
      > p,
      > div > p {
        text-align: justify;
      }
      > div {
        > h2 {
          font-size: large;
        }
        > img {
          height: 160px;
        }
      }
    }
    .userHome__ourPrograms {
      /* border: 1px blue solid; */
      margin: 40px 20px;
      padding: 0;

      > h1 {
        font-size: x-large;
        margin-bottom: 10px;
      }
    }
  }
`;
