import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link, Switch, Route } from "react-router-dom";
import Resume from './pages/Resume';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

class App extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header
                        className="header-color"
                        title={
                            <Link
                                style={{
                                    textDecoration: "none",
                                    color: "white"
                                }}
                                to="/"
                            >
                                Portfolio
                            </Link>
                        }
                        scroll
                    >
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer
                        title={
                            <Link
                                style={{
                                    textDecoration: "none",
                                    color: "black"
                                }}
                                to="/"
                            >
                                Home
                            </Link>
                        }
                    >
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Switch>
                            <Route exact path="/" component={Landing} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/projects" component={Projects} />
                            <Route path="/resume" component={Resume} />
                        </Switch>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;
