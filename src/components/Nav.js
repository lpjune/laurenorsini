import React from "react";
import {
    makeStyles,
    Typography,
    AppBar,
    IconButton,
    Button,
    Toolbar,
    Grid,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
    // ...theme.spreadThis,
    bar: {
        color: "primary",
    },
    icons: {
        color: "secondary",
    },
    links: {
        textAlign: "center"
    },
    hi: {
        textAlign: "right"
    }
}));

const Nav = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.bar} position="sticky">
            <Toolbar>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item xs={2}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                        >
                            <GitHubIcon className={classes.icons} />
                        </IconButton>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                        >
                            <LinkedInIcon className={classes.icons} />
                        </IconButton>
                    </Grid>
                    <Grid item xs={8} className={classes.links}>
                        <Button color="inherit">About</Button>
                        <Button color="inherit">Skills</Button>
                        <Button color="inherit">Experience</Button>
                        <Button color="inherit">Projects</Button>
                    </Grid>
                    <Grid item xs={2} className={classes.hi}>
                        <Button color="inherit">Say hi!</Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Nav;
