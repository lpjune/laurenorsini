import React from "react";
import {
    makeStyles,
    Typography,
    AppBar,
    IconButton,
    Button,
    Toolbar,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
    bar: {
        color: "#264653",
    },
    icons: {
        color: "#e9c46a",
    },
    buttons: {},
}));

const Nav = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.bar} position="sticky">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <GitHubIcon className={classes.icons} />
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <LinkedInIcon className={classes.icons} />
                </IconButton>
                <Button color="inherit">About</Button>
                <Button color="inherit">Skills</Button>
                <Button color="inherit">Experience</Button>
                <Button color="inherit">Projects</Button>
                <Button color="inherit">Say hi!</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Nav;
