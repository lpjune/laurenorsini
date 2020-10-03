import React from "react";
import { Avatar, Container, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
        // backgroundImage: "url('/images/undraw_programmer_imem.svg')",
    },
    name: {
        textAlign: "center",
    },
    title: {
        textAlign: "center",
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
        <Container className={classes.container}>
            <Typography className={classes.name} variant="h2" component="h2">
                Lauren Orsini
            </Typography>
            <Typography className={classes.title} variant="h4" component="h4">
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
