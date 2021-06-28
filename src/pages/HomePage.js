import styled from 'styled-components';

const HomePage = () => {
	return (
		<Container>
			<h3>Guerdon Foundation</h3>
			{/* Image Carrossel */}
			{/* Donote Now button */}
			{/* who are we */}
			{/* Our programs */}
		</Container>
	);
};

export default HomePage;

const Container = styled.div`
	margin: 30px 0;
	/* border: 1px blue solid; */
	> h3 {
		text-align: center;
		color: #ff534a;
		display: none;
	}

	@media screen and (max-width: 900px) {
		> h3 {
			display: block;
		}
	}
    @media screen and (max-width: 400px) {
		> h2 {
			font-size: medium;
		}
	}
`;
