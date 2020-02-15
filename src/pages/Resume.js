import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

class Resume extends Component {
    render() {
      return (
        <div>
          <Grid>
            <Cell col={4}>
              <div style={{ textAlign: "center" }}>
                <img
                  src="/images/woman_img.png"
                  alt="avatar"
                  style={{ height: "200px" }}
                />
              </div>
  
              <h2>Lauren Orsini</h2>
              <h4 style={{ color: "grey" }}>Software Developer</h4>
              <hr style={{ borderTop: "3px solid #c33764", width: "50%" }} />
              <p>
                Passionate college student working towards a B.S. in Computer
                Science at Mississippi State University. Aiming to use and build
                programming knowledge in an entry-level web or mobile development position.
              </p>
              <hr style={{ borderTop: "3px solid #c33764", width: "50%" }} />
  
              <h5>Email</h5>
              <a href="mailto:laurenporsini@gmail.com">LaurenPOrsini@gmail.com</a>
              <h5>LinkedIn</h5>
              <a
                href="https://www.linkedin.com/in/laurenporsini/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn.com/in/laurenporsini
              </a>
              <h5>GitHub</h5>
              <a href="https://www.github.com/lpjune" 
              target="_blank"
              rel="noopener noreferrer">
                GitHub.com/lpjune
              </a>
              <h5>Web</h5>
              <a href="https://www.laurenorsini.dev">LaurenOrsini.dev</a>
              <p>(you're here!)</p>
              <h5>Offline Resume</h5>
              <a href="resume.pdf" download>
                Click to download
              </a>
  
              <hr style={{ borderTop: "3px solid #c33764", width: "50%" }} />
            </Cell>
            <Cell className="resume-right-col" col={8}>
              <h2>Education</h2>
  
              <Education
                startYear={2018}
                endYear={"August 2020"}
                link="https://www.msstate.edu/"
                schoolName="Mississippi State University"
                gpa="3.64/4.0"
                honors="President's List"
              />
  
              <h2>Experience</h2>
  
              <Experience
                startYear={2018}
                endYear={"Present"}
                link="http://impress.ece.msstate.edu/"
                jobName="Android Developer | IMPRESS Lab | MSU"
                jobDescription="Work in the IMPRESS (Information Processing and Sensing) Lab, an extension of the
                Center for Advanced Vehicular Systems, developing Android apps for various research
                projects. Primarily making an app for the NEST drone station system, an autonomous
                drone house for keeping research control groups in drone research. Currently building an
                app that controls the doors, charging pads, roof, and drone itself so it can operate
                without human interaction. "
              />
  
              <Experience
                startYear={"May 2019"}
                endYear={"August 2019"}
                link="https://www.cspire.com/wireless/"
                jobName="Software Development Intern | C Spire"
                jobDescription="Worked in the Web Apps department at C Spire on the desktop and mobile websites.
                Used different front- and back-end technologies like AngularJS, JQuery, Java, Spring,
                Oracle business products, and version control with Git and Accurev. Took features and
                fixes from development to production-ready in an agile development cycle."
              />
  
              <Experience
                startYear={2018}
                endYear={2019}
                link="https://www.cse.msstate.edu/"
                jobName="Teaching Assistant | MSU"
                jobDescription="Graded various assignments for a Python programming course (Biomedical Programming)
                taken by upper-level biomechanical engineering students. Worked closely with the
                professor to evaluate students’ code, check for errors, and give constructive feedback in
                a timely manner."
              />
              <hr style={{ borderTop: "3px solid #c33764" }} />
              <h2>Skills</h2>
              <h4 style={{ marginBottom: "0px", marginTop: "6px"}}>Languages</h4>
              <Skills skill="JavaScript, Kotlin, Python, Java, HTML/CSS" />
              <h4 style={{ marginBottom: "0px", marginTop: "6px"}}>Frameworks / Libraries</h4>
              <Skills skill="React, Android, jQuery, Express, Bootstrap, SASS, PUG"/>
              <h4 style={{ marginBottom: "0px", marginTop: "6px"}}>Databases</h4>
              <Skills skill="MongoDB, SQL" />
              <h4 style={{ marginBottom: "0px", marginTop: "6px"}}>Version Control</h4>
              <Skills skill="Git, GitHub, Accurev" />
            </Cell>
          </Grid>
        </div>
      );
    }
  }

export default Resume;
