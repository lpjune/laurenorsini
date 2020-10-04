import React from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {makeStyles} from "@material-ui/core";
import themeFile from "./util/theme";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

const theme = createMuiTheme(themeFile);

const useStyles = makeStyles((theme) => ({
    App: {
        backgroundColor: "#DADADA",
    },
}));

function App() {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.App}>
                <header className="App-header"></header>
                <Nav />
                <Landing />
                <About />
                <Skills />
                <Timeline />
                <Projects />
                <Contact />
            </div>
        </MuiThemeProvider>
    );
}

export default App;
