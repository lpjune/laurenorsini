import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import "../App.css";

const Projects = () => {
    return (
        <Container className="projects-container">
            <Typography className="projects-title" variant="h4" component="h4">
                Projects
            </Typography>
            <Grid container spacing={4}>
                <Grid
                    className="projects-grid-item"
                    item
                    xs={12}
                    sm={12}
                    md={4}
                >
                    <ProjectCard
                        title="Playlistener"
                        text="A webapp for converting YouTube playlists to Spotify and saving to the user's account. Uses React, Express, and YouTube and Spotify's APIs."
                        imagePath="/images/playlistener.jpg"
                        githubUrl="https://github.com/lpjune/playlistener"
                        demoUrl="https://playlistener0.herokuapp.com/"
                    />
                </Grid>
                <Grid
                    className="projects-grid-item"
                    item
                    xs={12}
                    sm={12}
                    md={4}
                >
                    <ProjectCard
                        title="Chat Clone"
                        text="A full-stack messenger clone built with React, GraphQL + Apollo, and MySQL. Deployed using AWS EC2 and RDS."
                        imagePath="/images/social.jpg"
                        githubUrl="https://github.com/lpjune/chat-clone"
                        // demoUrl="http://ec2-3-83-25-119.compute-1.amazonaws.com"
                    />
                </Grid>
                {/* <Grid
                    className="projects-grid-item"
                    item
                    xs={12}
                    sm={12}
                    md={4}
                >
                    <ProjectCard
                        title="SocialApe"
                        text="A full-stack social media web app from React, Redux, and Firebase. Made following tutorial from 'Classsed'."
                        imagePath="/images/social.jpg"
                        githubUrl="https://github.com/lpjune/socialape-client"
                    />
                </Grid> */}
                <Grid
                    className="projects-grid-item"
                    item
                    xs={12}
                    sm={12}
                    md={4}
                >
                    <ProjectCard
                        title="HandUp"
                        text="A full-stack chat webapp that allows users to ask anonymous questions in class. Best Use of Google Cloud at BullyHack 2020."
                        imagePath="/images/classroom.jpg"
                        githubUrl="https://github.com/lpjune/bullyhack20"
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Projects;
