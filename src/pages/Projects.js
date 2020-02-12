import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import ProjectCard from "../components/ProjectCard";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        // Web Tab
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">

                    {/* Web Project 1 */}
                    <ProjectCard
                        title="Portfolio Site"
                        titleColor="#fff"
                        image="/images/desk.jpg"
                        text="You're here! A software engineering portfolio made using ReactJS and hosted with Google Cloud App Engine."
                        github="https://github.com/lpjune/laurenorsini"
                        demo="https://laurenorsini.dev"
                    />

                    {/* Web Project 2 */}
                    <ProjectCard
                        title="Blockchain Transaction Manager"
                        titleColor="#fff"
                        image="/images/enterprise-blockchain.png"
                        text="A management dashboard to store transaction records
                            in a blockchain using MongoDB, Express, PUG, etc."
                        github="https://github.com/lpjune/BlockTransaction"
                        demo="https://blocktransaction.herokuapp.com/catalog"
                    />

                    {/* Web Project 3 */}
                    <ProjectCard
                        title="HandUp"
                        titleColor="#fff"
                        image="/images/classroom.jpg"
                        text="A chat webapp that allows users to ask anonymous
                        questions in class. Best Use of Google Cloud at
                        BullyHack 2020."
                        github="https://github.com/lpjune/bullyhack20"
                        devpost="https://devpost.com/software/handup-t54vk1"
                        demo="http://bullyhack20.herokuapp.com/login"
                    />

                    {/* Web Project 4 */}
                    <ProjectCard
                        title="eCommerce Store"
                        titleColor="#fff"
                        image="/images/store.jpg"
                        text="An eCommerce web store using MongoDB, Express,
                        Mongoose, and PUG"
                        github="https://github.com/lpjune/eCommerce"
                        demo="https://dcsp.herokuapp.com/"
                    />
                </div>
            );

            // Android Tab
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">

                    {/* Android Project 1 */}
                    <ProjectCard
                        title="NEST App"
                        titleColor="#fff"
                        image="/images/drone.jpg"
                        text="An Android app written in Kotlin for the control of NEST
                    drone housing. App acts as a client to send and receive
                    messages from NEST server, and stream live camera feeds."
                        github="https://github.com/impress-msu/NestApp"
                        demoVideo="https://youtu.be/SJXtHFFfBgU"
                    />

                    {/* Android Project 2 */}
                    <ProjectCard
                        title="woofState"
                        titleColor="#fff"
                        image="/images/woof2.jpg"
                        text="An Android app to connect those short on time with
                        animal shelters in need of help for quick
                        volunteering via dog walking. Winner of HackGSU
                        2019."
                        github="https://github.com/lpjune/woofState"
                        devpost="https://devpost.com/software/hackgsu19"
                        demoVideo="https://youtu.be/yVFf3YwZD0M"
                    />
                </div>
            );

            // Misc Tab
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">

                    {/* Misc Project 1 */}
                    <ProjectCard
                        title="NEST Server"
                        titleColor="#fff"
                        image="/images/server.jpg"
                        text="A desktop server written in Python and JavaScript for the NEST
                    drone housing. Sends and receives
                    messages from the NEST App client, and streams live camera feeds via Flask."
                        github="https://github.com/lpjune/NestServerV2"
                        demoVideo="https://youtu.be/SJXtHFFfBgU"
                    />
                    
                    {/* Misc Project 2 */}
                    <ProjectCard
                        title="Kotlin Snake"
                        titleColor="#fff"
                        image="/images/snake.jpg"
                        text="A game of snake written in Kotlin."
                        github="https://github.com/lpjune/snake-kotlin"
                        demoVideo="https://youtu.be/_ycCf-zOXEs"
                    />
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
