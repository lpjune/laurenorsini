import React from "react";
import { Avatar, Container, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    name: {
        textAlign: "center",
    },
    title: {
        textAlign: "center",
        color: "blue",
    },
    avatar: {
        margin: "auto",
        width: theme.spacing(20),
        height: theme.spacing(20),
        backgroundColor: "grey",
    },
    image: {
        display: "block",
        margin: "auto",
    },
}));

const Landing = () => {
    const classes = useStyles();
    return (
        <Container>
            <Typography className={classes.name} variant="h2" component="h2">
                Lauren Orsini
            </Typography>
            <Typography className={classes.title} variant="h5" component="h5">
                Web Developer
            </Typography>
            {/* <Avatar
                className={classes.avatar}
                alt="Lauren Orsini"
                src="/images/woman.png"
            /> */}
            <img
                src="/images/undraw_programmer_imem.svg"
                className={classes.image}
                alt="Lauren Orsini"
            />
        </Container>
    );
};

export default Landing;
