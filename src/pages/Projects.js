import React, { Component } from "react";
import {
    Tabs,
    Tab,
    Grid,
    Cell,
    Card,
    CardTitle,
    CardText,
    CardActions,
    Button,
    CardMenu,
    IconButton
} from "react-mdl";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card
                        className="project-card"
                        shadow={5}
                        style={{ minWidth: "450", margin: "auto" }}
                    >
                        <CardTitle
                            style={{
                                color: "#fff",
                                height: "176px",
                                background:
                                    "url(/images/enterprise-blockchain.png) center / cover"
                            }}
                        >
                            Blockchain Transaction Manager
                        </CardTitle>
                        <CardText>
                            A management dashboard to store transaction records
                            in a blockchain using MongoDB, Express, PUG, etc.
                        </CardText>
                        <CardActions border>
                            <Button
                                colored
                                href="https://github.com/lpjune/BlockTransaction"
                                target="_blank"
                            >
                                GitHub
                            </Button>
                            <Button
                                colored
                                href="https://blocktransaction.herokuapp.com/catalog"
                                target="_blank"
                            >
                                Live Demo
                            </Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card
                        className="project-card"
                        shadow={5}
                        style={{ minWidth: "450", margin: "auto" }}
                    >
                        <CardTitle
                            style={{
                                color: "black",
                                height: "176px",
                                background:
                                    "url(/images/message.jpg) center / cover"
                            }}
                        >
                            HandUp
                        </CardTitle>
                        <CardText>
                            An chat webapp that allows users to ask anonymous
                            questions in class. Best Use of Google Cloud at
                            BullyHack 2020.
                        </CardText>
                        <CardActions border>
                            <Button
                                colored
                                href="https://github.com/lpjune/bullyhack20"
                                target="_blank"
                            >
                                GitHub
                            </Button>
                            <Button
                                colored
                                href="http://bullyhack20.herokuapp.com/login"
                                target="_blank"
                            >
                                Live Demo
                            </Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 3 */}
                    <Card
                        className="project-card"
                        shadow={5}
                        style={{ minWidth: "450", margin: "auto" }}
                    >
                        <CardTitle
                            style={{
                                color: "#fff",
                                height: "176px",
                                background:
                                    "url(/images/store.jpg) center / cover"
                            }}
                        >
                            eCommerce Store
                        </CardTitle>
                        <CardText>
                            An eCommerce web store using MongoDB, Express,
                            Mongoose, and PUG
                        </CardText>
                        <CardActions border>
                            <Button
                                colored
                                href="https://github.com/lpjune/eCommerce"
                                target="_blank"
                            >
                                GitHub
                            </Button>
                            <Button
                                colored
                                href="https://dcsp.herokuapp.com/"
                                target="_blank"
                            >
                                Live Demo
                            </Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            );
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card
                        className="project-card"
                        shadow={5}
                        style={{ minWidth: "450", margin: "auto" }}
                    >
                        <CardTitle
                            style={{
                                color: "#fff",
                                height: "176px",
                                background:
                                    "url(/images/NEST.jpg) no-repeat center / contain"
                            }}
                        ></CardTitle>
                        <CardText>
                            An Android app written in Kotlin for the control of
                            NEST drone housing. App acts as a client to send and
                            receive messages from NEST server, and stream live
                            camera feeds.
                        </CardText>
                        <CardActions border>
                            <Button
                                colored
                                href="https://github.com/impress-msu/NestApp"
                                target="_blank"
                            >
                                GitHub
                            </Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card
                        className="project-card"
                        shadow={5}
                        style={{ minWidth: "450", margin: "auto" }}
                    >
                        <CardTitle
                            style={{
                                color: "#fff",
                                height: "176px",
                                background:
                                    "url(/images/woof.png) center / cover"
                            }}
                        >
                            woofState
                        </CardTitle>
                        <CardText>
                            An Android app to connect those short on time with
                            animal shelters in need of help for quick
                            volunteering via dog walking. Winner of HackGSU
                            2019.
                        </CardText>
                        <CardActions border>
                            <Button
                                colored
                                href="https://github.com/lpjune/woofState"
                                target="_blank"
                            >
                                GitHub
                            </Button>
                            <Button
                                colored
                                href="https://devpost.com/software/hackgsu19"
                                target="_blank"
                            >
                                Devpost
                            </Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            );
        } else if (this.state.activeTab === 2) {
            return (
                <div>
                    <h1>This is a miscellaneous section</h1>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <Tabs
                    activeTab={this.state.activeTab}
                    onChange={tabId => this.setState({ activeTab: tabId })}
                    ripple
                >
                    <Tab>Web</Tab>
                    <Tab>Android</Tab>
                    <Tab>Misc</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Projects;
