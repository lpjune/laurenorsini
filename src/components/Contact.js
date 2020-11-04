import React from "react";
import { Container, Typography, Link } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import "../App.css";

const Contact = () => {
    return (
        <div className="contact-div">
            <Container className="contact-container">
                <Typography
                    className="contact-title"
                    variant="h5"
                    component="h5"
                >
                    Interested in working together? Let's chat!
                </Typography>
                <div className="contact-div-email">
                    <EmailIcon className="contact-email-icon" />
                    <Link
                        className="contact-email-link"
                        variant="button"
                        rel="noopener noreferrer"
                        href="mailto:laurenporsini@gmail.com"
                    >
                        Laurenporsini@gmail.com
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
