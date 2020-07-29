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
            <Typography variant="h4" component="h4"></Typography>

            <Grid container spacing={4}>
                <Grid item xs>
                    <Paper>
                        <Typography variant="h6" component="h6">
                            Skills
                        </Typography>
                        <List>
                            <Paper>
                            <ListItemText primary="Languages" secondary="JavaScript, Python, Kotlin, CSS, HTML" />
                            </Paper>
                            <Paper>
                            <ListItemText primary="Front-End" secondary="React, Redux, jQuery, MaterialUI, Bootstrap" />
                            </Paper>
                            <Paper>
                            <ListItemText primary="Back-End" secondary="Node, Express, Spring, Flask, SQL, MongoDB, Google Firebase, REST APIs" />
                            </Paper>
                            <Paper>
                            <ListItemText primary="More" secondary="Android, Git, Jira, Agile Development, UI/UX Design" />
                            </Paper>
                        </List>
                    </Paper>
                </Grid>

                <Grid item xs>
                    <Paper>
                        <Typography variant="h6" component="h6">
                            Experience
                        </Typography>
                        <List>
                            <Paper>
                            <ListItemText primary="Software Engineer - Center for Advanced Vehicular Systems" secondary="2018 - Current" />
                            </Paper>
                        </List>
                    </Paper>
                </Grid>

                <Grid item xs>
                    <Paper>
                        <Typography variant="h6" component="h6">
                            Education & Awards
                        </Typography>
                        <List>
                            <Paper>
                            <ListItemText primary="Mississippi State University - B.S. in Computer Science" secondary="August 2020" />
                            </Paper>
                            <Paper>
                            <ListItemText primary="BullyHack 2020 Hackathon" secondary="Winner - Best Use of Cloud Services" />
                            </Paper>
                            <Paper>
                            <ListItemText primary="HackGSU 2019 Hackathon" secondary="Winner - Overall & Best Use of Cloud Services" />
                            </Paper>
                            <Paper>
                            <ListItemText primary="Organizations" secondary="Recruiting Chair for Council on Women in Computing (ACM-W), Member of Society of Women Engineers (SWE), Member of Women in Cybersecurity (WiCyS)" />
                            </Paper>
                        </List>
                    </Paper>
                </Grid>

                
            </Grid>
        </Container>
    );
};

export default Skills;
