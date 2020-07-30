import React from "react";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header"></header>
            <Nav />
            <Landing />
            <About />
            <Skills />
            <Timeline />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
