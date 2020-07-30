import React from "react";
import {
    Grid,
    Paper,
    Container,
    Typography,
    List,
    ListSubheader,
    ListItem,
    ListItemText,
} from "@material-ui/core";

const Skills = () => {
    return (
        <Container>
            <Typography variant="h4" component="h4">Skills</Typography>

            <Grid container spacing={4}>
                <Grid item xs>
                    <Paper>
                        <Typography variant="h6" component="h6">
                            Front-End
                        </Typography>
                        <List>
                            <ListItemText
                                primary="JavaScript"
                                secondary="React + Redux, jQuery"
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
                    <Paper>
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
                    <Paper>
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
