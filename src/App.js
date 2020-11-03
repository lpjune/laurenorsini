import React from "react";
import { Element } from "react-scroll";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Nav />
            <Landing />
            <Element name="about">
                <About />
            </Element>
            <Element name="skills">
                <Skills />
            </Element>
            <Element name="experience">
                <Timeline />
            </Element>
            <Element name="projects">
                <Projects />
            </Element>
            <Element name="contact">
                <Contact />
            </Element>
            <Footer />
        </div>
    );
}

export default App;
