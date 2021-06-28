import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';

const Footer = () => {
	return (
		<Fade triggerOnce={true} direction="up">
			<Container>
				<section>
					<div>
						<p>
							<strong>Get in touch</strong>
						</p>
						<p>
							<strong>Tel:</strong>{' '}
							<a target="_blank" rel="noreferrer" href="tel:+94764356773">
								+94764356773
							</a>
						</p>
						<p>
							<strong>Instagram:</strong>{' '}
							<a target="_blank" rel="noreferrer" href="/">
								instagram-link
							</a>
						</p>
						<p>
							<strong>Twitter:</strong>{' '}
							<a target="_blank" rel="noreferrer" href="/">
								twitter-link
							</a>
						</p>
					</div>
					<div>
						<p>
							<a target="_blank" rel="noreferrer" href="/">
								View Annual report{' '}
							</a>
						</p>
						<p>
							<a target="_blank" rel="noreferrer" href="/">
								Sponsor a child
							</a>
						</p>
						<p>
							<a target="_blank" rel="noreferrer" href="/">
								Join as a volunteer
							</a>
						</p>
					</div>
				</section>
				<p className="developer">
					Developer:{' '}
					<a target="_blank" rel="noreferrer" href="https://nazhimkalam.github.io">
						@nazhimkalam
					</a>
				</p>
			</Container>
		</Fade>
	);
};

export default Footer;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #ff534a;
	color: white;
	font-size: small;

	a {
		text-decoration: none;
		color: white;
		:hover {
			font-weight: bold;
		}
	}
	.developer {
		color: #ffa8a5;
		cursor: pointer;
		a {
			color: #ffa8a5;
		}
		border-top: 1px #ffa8a5 solid;
		padding: 10px;

		text-align: center;
		:hover {
			color: white;
			a {
				color: white;
			}
		}
	}
	> section {
		display: flex;
		padding: 40px 30px;

		align-items: center;
		justify-content: space-between;
		> div {
			> p {
				margin: 15px 0;
			}
		}
	}
	@media screen and (max-width: 400px) {
		> section {
			flex-direction: column;
			> div {
				> p {
					text-align: center !important;
				}
			}
		}
	}
`;
