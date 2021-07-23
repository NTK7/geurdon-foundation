import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { useHistory } from "react-router-dom";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import { Fade } from "react-awesome-reveal";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
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
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
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
            <HomeRoundedIcon
              style={{ color: "#8267da" }}
              onClick={() => history.replace("/")}
            />
          </ListItemIcon>
          <ListItemText primary="Home" onClick={() => history.replace("/")} />
        </ListItem>
        <ListItem button key="Sponsor a child">
          <ListItemIcon>
            <AttachMoneyIcon
              style={{ color: "#8267da" }}
              onClick={(e) => {
                e.preventDefault();
                // window.open("https://forms.gle/qLeWxxj3prrnFtqy7", "_blank");
                window.open("/");
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Sponsor a child"
            onClick={(e) => {
              e.preventDefault();
              // window.open("https://forms.gle/qLeWxxj3prrnFtqy7", "_blank");
              window.open("/");
            }}
          />
        </ListItem>
        <ListItem button key="Join as a volunteer" className="listItem__title">
          <ListItemIcon>
            <AccessibilityNewIcon
              style={{ color: "#8267da" }}
              onClick={(e) => {
                e.preventDefault();
                window.open("https://forms.gle/zz9BQAmZCKb1uWUUA", "_blank");
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Join as a volunteer"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://forms.gle/zz9BQAmZCKb1uWUUA", "_blank");
            }}
          />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Fade triggerOnce={true} direction="down">
      <Container>
        <div className="drawable__list">
          <React.Fragment key="left">
            <Button
              className="drawable__menu"
              onClick={toggleDrawer("left", true)}>
              <MenuIcon />{" "}
            </Button>
            <Drawer
              anchor="left"
              open={state["left"]}
              onClose={toggleDrawer("left", false)}>
              {list("left")}
            </Drawer>
          </React.Fragment>
        </div>
        <LazyLoadImage src="/images/logo-white.png" alt="" />
      </Container>
    </Fade>
  );
}
const Container = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  background-color: #8267da;
  padding: 10px 0;

  .drawable__menu {
    padding: 0px !important;
    margin: 0px !important;

    .MuiSvgIcon-root {
      color: white !important;
    }
  }
  > img {
    object-fit: contain;
    height: 50px;
		border-radius: 10px !important;
    padding: 0 10px;
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
    padding: 5px 0;
    > img {
      height: 50px;
    }
  }
`;
