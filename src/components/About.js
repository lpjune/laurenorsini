import React from "react";
import { Avatar, Button, Container, Typography, Grid } from "@material-ui/core";
import "../App.css";

const About = () => {
    return (
        <div className="about-div">
            <Container>
                <Grid container>
                    <Grid item xs={6}>
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
                            <Button className="about-btn" variant="contained">Download Resume</Button>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        {/* <img
                            className="about-image"
                            src="/images/undraw_programmer_imem.svg"
                            alt="Lauren Orsini"
                        /> */}
                        <Avatar
                            className="about-image"
                            src="/images/female-developer.jpg"
                            alt="Lauren Orsini"
                        ></Avatar>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default About;
