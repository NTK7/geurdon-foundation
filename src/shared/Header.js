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
					<Button
						onClick={(e) => {
							e.preventDefault();
							window.open('https://forms.gle/qLeWxxj3prrnFtqy7', '_blank');
						}}>
						Sponsor a child
					</Button>
					<Button
						onClick={(e) => {
							e.preventDefault();
							window.open('https://forms.gle/zz9BQAmZCKb1uWUUA', '_blank');
						}}>
						Join as a volunteer
					</Button>
				</section>
			</Container>
		</Fade>
	);
};

export default Header;

const Container = styled.div`
	background-color: #8267DA;
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
			background-color: #8267DA;
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
