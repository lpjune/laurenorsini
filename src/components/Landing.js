import React from "react";
import { Container, Typography } from "@material-ui/core";
import Typed from "react-typed";
import "../App.css";

const Landing = () => {
    return (
        <Container className="landing-container">
            <Typography className="landing-name" variant="h2" component="h2">
                Hello, I'm Lauren Orsini
            </Typography>
            <Typography className="landing-title" variant="h4" component="h4">
                <Typed
                    strings={[
                        "Full Stack Developer",
                        "React Developer",
                        "Software Engineer",
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                />
            </Typography>
        </Container>
    );
};

export default Landing;
