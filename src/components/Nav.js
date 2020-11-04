import React from "react";
import { Link as ScrollLink } from "react-scroll";
import {
    Link,
    AppBar,
    IconButton,
    Button,
    Toolbar,
    Grid,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../App.css";

const Nav = () => {
    return (
        <AppBar position="sticky" className="nav-root">
            <Toolbar>
                {/* LINKS TO SOCIALS */}
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item xs={3} s={3} md={2}>
                        <Link
                            className="nav-icon-links"
                            color="inherit"
                            href="https://github.com/lpjune"
                            target="_blank"
                            rel="noopener"
                        >
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                            >
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        <Link
                            className="nav-icon-links"
                            color="inherit"
                            href="https://www.linkedin.com/in/laurenporsini/"
                            target="_blank"
                            rel="noopener"
                        >
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                            >
                                <LinkedInIcon />
                            </IconButton>
                        </Link>
                    </Grid>

                    {/* SCROLL LINKS */}
                    <Grid item xs={6} s={6} md={8} className="nav-links">
                        <Button color="inherit">
                            <ScrollLink
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                About
                            </ScrollLink>
                        </Button>
                        <Button color="inherit">
                            <ScrollLink
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Skills
                            </ScrollLink>
                        </Button>
                        <Button color="inherit">
                            <ScrollLink
                                activeClass="active"
                                to="experience"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Experience
                            </ScrollLink>
                        </Button>
                        <Button color="inherit">
                            <ScrollLink
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Projects
                            </ScrollLink>
                        </Button>
                    </Grid>
                    <Grid item xs={3} s={3} md={2} className="nav-hi">
                        <Button color="inherit">
                            <ScrollLink
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Say hi!
                            </ScrollLink>
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Nav;
