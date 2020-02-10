import React, { Component } from "react";
import { Card, CardTitle, CardText, CardActions, Button } from "react-mdl";

class ProjectCard extends Component {
    render() {
        const style = {
            color: this.props.titleColor,
            height: "176px",
            background: "url(" + this.props.image + ") center / cover"
            // "url(/images/NEST.jpg) no-repeat center / contain"
        };
        return (
            <Card
                className="project-card"
                shadow={5}
                style={{ minWidth: "450", margin: "auto" }}
            >
                <CardTitle style={style}>{this.props.title}</CardTitle>
                <CardText>{this.props.text}</CardText>
                <CardActions border>
                    {this.props.github && (
                        <Button
                            colored
                            href={this.props.github}
                            target="_blank"
                        >
                            GitHub
                        </Button>
                    )}
                    {this.props.codepen && (
                        <Button
                            colored
                            href={this.props.codepen}
                            target="_blank"
                        >
                            Codepen
                        </Button>
                    )}
                    {this.props.devpost && (
                        <Button
                            colored
                            href={this.props.devpost}
                            target="_blank"
                        >
                            Devpost
                        </Button>
                    )}
                    {this.props.demo && (
                        <Button colored href={this.props.demo} target="_blank">
                            Live Demo
                        </Button>
                    )}
                    {this.props.demoVideo && (
                        <Button colored href={this.props.demoVideo} target="_blank">
                            Video
                        </Button>
                    )}
                </CardActions>
            </Card>
        );
    }
}

export default ProjectCard;
