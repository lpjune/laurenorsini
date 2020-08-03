import React from "react";
import {
    Container,
    Typography,
    AppBar,
    IconButton,
    Button,
    Toolbar,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

const Nav = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <StarIcon />
                </IconButton>
                <Typography variant="h6">News</Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Nav;
