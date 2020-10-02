import React from "react";
import { Container, Typography, makeStyles, Grid } from "@material-ui/core";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles((theme) => ({
    bar: {
        color: "#264653",
    },
    icons: {
        color: "#e9c46a",
    },
    buttons: {},
    container: {
        display: "flex",
    },
}));

const Projects = () => {
    const classes = useStyles();

    return (
        <Container>
            <Typography variant="h4" component="h4">
                Projects
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={4} >
                    <ProjectCard
                        title="SocialApe"
                        text="A full-stack social media web app from React, Redux, and Firebase. Made following tutorial from 'Classsed'."
                        imagePath="/images/social.jpg"
                    />
                </Grid>
                <Grid item xs={4} >
                    <ProjectCard
                        title="HandUp"
                        text="A full-stack chat webapp that allows users to ask anonymous questions in class. Best Use of Google Cloud at BullyHack 2020."
                        imagePath="/images/classroom.jpg"
                    />
                </Grid>
                <Grid item xs={4} >
                    <ProjectCard
                        title="Playlistener"
                        text="A webapp for converting YouTube playlists to Spotify and saving to the user's account. Uses React, Express, and YouTube and Spotify's APIs."
                        imagePath="/images/social.jpg"
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Projects;
