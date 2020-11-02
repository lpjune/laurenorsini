import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import "../App.css";

const About = () => {
    return (
        <div className="about-div">
            <Container>
                <Grid container space={2}>
                    <Grid item xs={4}>
                        <div className="about-text-container">
                            <Typography
                                className="about-title"
                                variant="h4"
                                component="h4"
                            >
                                About Me
                            </Typography>
                            <Typography variant="body1" component="p">
                                A full stack web developer with experience in
                                the internet industry and a B.S. in C.S. My
                                current favorite tech stack includes ReactJS,
                                GraphQL, & MySQL.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <img
                            className="about-image"
                            src="/images/undraw_programmer_imem.svg"
                            alt="Lauren Orsini"
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default About;
