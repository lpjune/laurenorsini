import React from "react";
import { Container, Typography } from "@material-ui/core";
import "../App.css";

const Contact = () => {
    return (
        <div className="contact-div">
            <Container className="contact-container">
                <Typography variant="h5" component="h5">
                    Interested in working together? Let's chat!
                </Typography>
            </Container>
        </div>
    );
};

export default Contact;
