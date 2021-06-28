import { Button } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Fade } from 'react-awesome-reveal';

const HomePage = () => {
	return (
		<Container>
			<Fade triggerOnce={true} delay={500}>
				<h3>Guerdon Foundation</h3>

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

				<div className="userHome__DonateNow">
					<Button>Donate Now</Button>
				</div>
			</Fade>

			{/* who are we */}
			{/* Our programs */}
		</Container>
	);
};

export default HomePage;

const Container = styled.div`
	/* border: 1px blue solid; */

	h3 {
		margin: 20px 0;
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
		margin-bottom: 50px;
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

	@media screen and (max-width: 900px) {
		h3 {
			display: block;
		}
		.userHome__DonateNow {
			> button {
				padding: 10px 40px;
			}
		}
	}
	@media screen and (max-width: 400px) {
		h3 {
			font-size: medium;
		}
		.userHome__DonateNow {
			> button {
				padding: 10px 30px;
			}
		}
	}
`;
