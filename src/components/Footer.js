import React from "react";
import { Container, Typography } from "@material-ui/core";
import "../App.css";

const Footer = () => {
    return (
        <Container className="footer-container">
            <Typography variant="subtitle2" component="p">
                crafted with <span role="img" aria-label="heart">❤️</span>️ by me
            </Typography>
        </Container>
    );
};

export default Footer;
