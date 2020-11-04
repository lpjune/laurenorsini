import React from "react";
import { Avatar, Button, Container, Typography } from "@material-ui/core";
import "../App.css";

const About = () => {
    return (
        <div className="about-div">
            <Container className="about-container">
                <div className="about-text-container">
                    <Typography
                        className="about-title"
                        variant="h4"
                        component="h4"
                    >
                        About Me
                    </Typography>
                    <Typography variant="body1" component="p">
                        A full stack web developer with experience in the
                        internet industry and a B.S. in C.S. My current favorite
                        tech stack includes ReactJS, GraphQL, & MySQL.
                    </Typography>
                    <Button href="Lauren_Orsini_Resume.pdf" download className="about-btn" variant="contained">
                        Download Resume
                    </Button>
                </div>
                <Avatar
                    className="about-image"
                    src="/images/woman.png"
                    alt="Lauren Orsini"
                ></Avatar>
            </Container>
        </div>
    );
};

export default About;
