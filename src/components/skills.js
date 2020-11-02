import React from "react";
import {
    Grid,
    Paper,
    Container,
    Typography,
    List,
    ListItemText,
} from "@material-ui/core";
import WebIcon from "@material-ui/icons/WebOutlined";
import CloudIcon from "@material-ui/icons/CloudOutlined";
import BuildIcon from "@material-ui/icons/BuildOutlined";
import "../App.css";

const Skills = () => {
    return (
        <Container className="skills-container">
            <Typography variant="h4" component="h4">
                Skills
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs>
                    <Paper className="skills-paper">
                        <WebIcon />
                        <Typography variant="h6" component="h6">
                            Front-End
                        </Typography>
                        <List>
                            <ListItemText
                                primary="JavaScript"
                                secondary="React + Redux, jQuery"
                                classes={
                                    {
                                        // primary: classes.primary,
                                        // secondary: classes.secondary,
                                    }
                                }
                            />
                            <ListItemText primary="HTML" secondary="Pug" />

                            <ListItemText
                                primary="CSS"
                                secondary="MaterialUI, Bootstrap"
                            />
                            <ListItemText
                                primary="UI/UX Design"
                                secondary="Mocks, Wireframing, HCI"
                            />
                        </List>
                    </Paper>
                </Grid>

                <Grid item xs>
                    <Paper className="skills-paper">
                        <CloudIcon />
                        <Typography variant="h6" component="h6">
                            Back-End
                        </Typography>
                        <List>
                            <ListItemText
                                primary="Node.js"
                                secondary="Express, Axios"
                            />
                            <ListItemText primary="Python" secondary="Flask" />
                            <ListItemText
                                primary="Databases"
                                secondary="MySQL, MongoDB, Firestore"
                            />
                            <ListItemText
                                primary="Cloud"
                                secondary="Google Firebase, Heroku, REST"
                            />
                        </List>
                    </Paper>
                </Grid>

                <Grid item xs>
                    <Paper className="skills-paper">
                        <BuildIcon />
                        <Typography variant="h6" component="h6">
                            Tools & More
                        </Typography>
                        <List>
                            <ListItemText
                                primary="Version Control"
                                secondary="Git, GitHub, GitLab"
                            />
                            <ListItemText
                                primary="Agile Methodology"
                                secondary="Jira, Scrum, Kanban"
                            />
                            <ListItemText
                                primary="Debugging"
                                secondary="Chrome DevTools, ESLint, Postman"
                            />
                            <ListItemText
                                primary="Documentation"
                                secondary="JSDoc, Markdown"
                            />
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Skills;
