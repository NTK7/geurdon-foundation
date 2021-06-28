import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Button } from '@material-ui/core';
import { Fade } from 'react-awesome-reveal';

const Header = () => {
	return (
		<Fade triggerOnce={true} direction="down">
			<Container>
				<section>
					<LazyLoadImage src="https://freepngimg.com/thumb/nike/28134-5-nike-logo.png" alt="" />
					<h2>GUERDON FOUNDATION</h2>
				</section>
				<section>
					<Button>Sponsor a child</Button>
					<Button>Join as a volunteer</Button>
				</section>
			</Container>
		</Fade>
	);
};

export default Header;

const Container = styled.div`
	background-color: #ff534a;
	padding: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	> section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		> img {
			height: 30px;
			object-fit: contain;
		}
		> h2 {
			margin-left: 10px;
			color: whitesmoke;
		}
		> button {
			border: 2px white solid;
			width: 200px;
			background-color: #ff534a;
			color: white;
			margin: 0 10px;
            font-family: 'Poppins', sans-serif;
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
