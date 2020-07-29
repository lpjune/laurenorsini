import React from "react";
import { Container, Typography } from "@material-ui/core";

const About = () => {
    return (
        <Container>
            <Typography variant="h4" component="h4">
                Hi, I'm Lauren Orsini
            </Typography>
            <Typography variant="body1" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur arcu neque, pharetra a tristique lobortis, iaculis ac
                tortor. Phasellus sed tincidunt nibh. Vivamus vel odio vel velit
                ultricies pellentesque ac in elit. Nulla facilisi. Duis laoreet
                tristique turpis ac vulputate. Etiam vel varius mauris. Integer
                dapibus congue elit a dapibus. Nunc vel nisi et diam commodo
                luctus.
            </Typography>
        </Container>
    );
};

export default About;
