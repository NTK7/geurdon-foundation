import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import { Button } from '@material-ui/core';

const FlipCard = ({ title, description, direction }) => {
	const [isFlipped, setIsFlipped] = useState(false);

	const onHandleClick = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<Container>
			<ReactCardFlip isFlipped={isFlipped} flipDirection={direction}>
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
	);
};

export default FlipCard;

const Container = styled.div`
	.card__frontView,
	.card__backView {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #fff2f2;
		justify-content: space-evenly;
		padding: 8px;

		border: 2px #ff534a solid;
		border-radius: 5px;

		height: 300px;
		width: 300px;

		> p {
			text-align: center;
		}
		> button {
			border: 1px #ff534a solid;
			background-color: white;
			color: #ff534a;
			padding: 5px;
			width: 150px;
		}
	}
	.card__frontView {
		> p {
			font-size: larger;
			font-weight: bold;
			color: #ff534a;
		}
	}
`;
