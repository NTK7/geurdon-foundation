import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import { Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { useHistory } from 'react-router-dom';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import { Fade } from 'react-awesome-reveal';

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
});

export default function DrawableTab() {
	const history = useHistory();
	const classes = useStyles();
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<div
			className={clsx(classes.list)}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}>
			<List>
				<ListItem button key="Home" className="listItem">
					<ListItemIcon>
						<HomeRoundedIcon style={{ color: '#ff534a' }} onClick={() => history.replace('/')} />
					</ListItemIcon>
					<ListItemText primary="Home" onClick={() => history.replace('/')} />
				</ListItem>
				<ListItem button key="Sponsor a child">
					<ListItemIcon>
						<AttachMoneyIcon style={{ color: '#ff534a' }} onClick={() => history.replace('/')} />
					</ListItemIcon>
					<ListItemText primary="Sponsor a child" onClick={() => history.replace('/')} />
				</ListItem>
				<ListItem button key="Join as a volunteer" className="listItem__title">
					<ListItemIcon>
						<AccessibilityNewIcon style={{ color: '#ff534a' }} onClick={() => history.replace('/')} />
					</ListItemIcon>
					<ListItemText primary="Join as a volunteer" onClick={() => history.replace('/')} />
				</ListItem>
			</List>
		</div>
	);

	return (
		<Fade triggerOnce={true} direction="down">
			<Container>
				<div className="drawable__list">
					<React.Fragment key="left">
						<Button className="drawable__menu" onClick={toggleDrawer('left', true)}>
							<MenuIcon />{' '}
						</Button>
						<Drawer anchor="left" open={state['left']} onClose={toggleDrawer('left', false)}>
							{list('left')}
						</Drawer>
					</React.Fragment>
				</div>
				<LazyLoadImage src="https://freepngimg.com/thumb/nike/28134-5-nike-logo.png" alt="" />
			</Container>
		</Fade>
	);
}
const Container = styled.div`
	display: none;
	align-items: center;
	justify-content: space-between;
	background-color: #ff534a;
	padding: 20px 0;

	.drawable__menu {
		padding: 0px !important;
		margin: 0px !important;

		.MuiSvgIcon-root {
			color: white !important;
		}
	}
	> img {
		object-fit: contain;
		height: 25px;
		padding: 0 15px;
		flex: 0.1;
	}
	.drawable__list {
		> h2 {
			font-size: large;
		}
	}

	@media screen and (max-width: 900px) {
		display: flex;
	}
	@media screen and (max-width: 400px) {
		> img {
			padding: 0 10px;
		}
	}
`;
