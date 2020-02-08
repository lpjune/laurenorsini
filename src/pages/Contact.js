import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Lauren Orsini</h2>
                        <img
                            src="/images/woman_img2.png"
                            alt="avatar"
                            style={{ height: "250px" }}
                        />
                        <p
                            style={{
                                width: "75%",
                                margin: "auto",
                                paddingTop: "1em"
                            }}
                        >
                            Send me an email!
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent
                                        style={{
                                            fontSize: "30px",
                                            fontFamily: "Anton",
                                            wordBreak: "break-word"
                                        }}
                                    >
                                        <i
                                            className="fa fa-envelope"
                                            aria-hidden="true"
                                        />
                                        LaurenPOrsini@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent
                                        style={{
                                            fontSize: "30px",
                                            fontFamily: "Anton",
                                            wordBreak: "break-word"
                                        }}
                                    >
                                        <i
                                            className="fa fa-phone"
                                            aria-hidden="true"
                                        />
                                        (769) 208-4052
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;
