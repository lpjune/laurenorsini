import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="/images/woman_img2.png"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Software Developer</h1>
              <h3 style={{ color: "white", marginTop: "8px" }}>
                Lauren Orsini
              </h3>

              <hr />

              <p>
              JavaScript | Kotlin | Android | React | NodeJS | Express |
                MongoDB | SQL
              </p>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/laurenporsini/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/lpjune"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github-square" aria-hidden="true" />
                </a>

                {/* Freecodecamp */}
                <a
                  href="https://dev.to/lpjune"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-dev" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
