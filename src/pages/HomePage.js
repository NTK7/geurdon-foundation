import { Button } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Fade } from 'react-awesome-reveal';
import FlipCard from '../components/FlipCard';

const HomePage = () => {
	return (
		<Container>
			<Fade triggerOnce={true} delay={500}>
				<h2>Guerdon Foundation</h2>

				<Carousel
					autoPlay={true}
					emulateTouch={true}
					infiniteLoop={true}
					showArrows={true}
					showStatus={false}
					className="homePage__Carousel">
					{/* Have to convert these into components once the details for this carousel is given */}
					<div>
						<img src="https://rsf.org/sites/default/files/justice_2.jpg" alt="related-img" />
					</div>
					<div>
						<img src="https://rvdaily.com.au/wp-content/uploads/Justice-Photo.jpg" alt="related-img" />
					</div>
					<div>
						<img src="https://rsf.org/sites/default/files/justice_2.jpg" alt="related-img" />
					</div>
					<div>
						<img src="https://rsf.org/sites/default/files/justice_2.jpg" alt="related-img" />
					</div>
					<div>
						<img src="https://rvdaily.com.au/wp-content/uploads/Justice-Photo.jpg" alt="related-img" />
					</div>
					<div>
						<img src="https://rsf.org/sites/default/files/justice_2.jpg" alt="related-img" />
					</div>
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
					<h1>Who Are We</h1>
					<p>
						This is some text.This is some text.This is some text.This is some text.This is some text.This
						is some text.This is some text.This is some text.This is some text.This is some text.This is
						some text.This is some text.This is some text.This is some text.This is some text.This is some
						text.This is some text.This is some text.This is some text.This is some text.This is some
						text.This is some text.This is some text.This is some text.This is some text.This is some
						text.This is some text.This is some text.This is some text.This is some text.This is some
						text.This is some text.This is some text.This is some text.This is some text.This is some
						text.This is some text.This is some text.This is some text.This is some text.This is some
						text.This is some text.This is some text.This is some text.
					</p>
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

	h2 {
		margin: 30px 0;
		text-align: center;
		color: #ff534a;
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
			background-color: #ff534a;
			font-family: 'Poppins', sans-serif;
			font-weight: bold;
			border-radius: 50px;
			color: white;

			:hover {
				border: 1px #ff534a solid;
				background-color: white;
				color: #ff534a;
			}
		}
	}
	.userHome__whoAreWe {
		/* border: 1px blue solid; */
		margin: 40px;
		padding: 40px 20px;
		> p,
		> h1 {
			text-align: center;
		}
		> h1 {
			color: #ff534a;
			margin-bottom: 10px;
		}
	}

	.userHome__ourPrograms {
		/* border: 1px blue solid; */
		margin: 40px;
		padding: 80px 0;

		> h1 {
			text-align: center;
			color: #ff534a;
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
				color: #ff534a;
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
		h2 {
			display: block;
		}
		.userHome__DonateNow {
			> button {
				padding: 10px 40px;
			}
		}
	}
	@media screen and (max-width: 400px) {
		h2 {
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
			> p {
				text-align: justify;
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
