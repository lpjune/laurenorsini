import React from "react";
import { Container, Typography } from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";
// import ComputerIcon from "@material-ui/icons/Computer"
// import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../App.css";

const Timeline = () => {
    return (
        <Container className="timeline-container">
            <Typography className="timeline-title" variant="h4" component="h4">
                Experience
            </Typography>

            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: "#FAFAFA",
                        color: "#000",
                        boxShadow:
                            "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
                        borderRadius: "4px",
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid  #F2F2F2",
                    }}
                    date="2018 - present"
                    iconStyle={{
                        background: "#f5f5f5",
                        color: "#4e4e4e",
                    }}
                    icon={<WorkIcon />}
                >
                    <Typography variant="h6" component="h6">
                        Software Engineer
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="p"
                        className="timeline-organization"
                    >
                        Center for Advanced Vehicular Systems
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        component="p"
                        className="timeline-stack"
                    >
                        React | Flask | Kotlin | Android
                    </Typography>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{
                        background: "#FAFAFA",
                        color: "#000",
                        boxShadow:
                            "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
                        borderRadius: "4px",
                    }}
                    date="2020"
                    iconStyle={{
                        background: "#f5f5f5",
                        color: "#4e4e4e",
                    }}
                    icon={<SchoolIcon />}
                >
                    <Typography variant="h6" component="h6">
                        Bachelor of Science, Computer Science
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="p"
                        className="timeline-organization"
                    >
                        Mississippi State University
                    </Typography>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: "#FAFAFA",
                        color: "#000",
                        boxShadow:
                            "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
                        borderRadius: "4px",
                    }}
                    date="2020"
                    iconStyle={{
                        background: "#f5f5f5",
                        color: "#4e4e4e",
                    }}
                    icon={<StarIcon />}
                >
                    <Typography variant="h6" component="h6">
                        BullyHack Hackathon
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="p"
                        className="timeline-organization"
                    >
                        Spring
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        component="p"
                        className="timeline-stack"
                    >
                        Best Use of Google Cloud Services
                    </Typography>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: "#FAFAFA",
                        color: "#000",
                        boxShadow:
                            "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
                        borderRadius: "4px",
                    }}
                    date="2019"
                    iconStyle={{
                        background: "#f5f5f5",
                        color: "#4e4e4e",
                    }}
                    icon={<WorkIcon />}
                >
                    <Typography variant="h6" component="h6">
                        Full-stack Web Intern
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="p"
                        className="timeline-organization"
                    >
                        C Spire Telecommunications
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        component="p"
                        className="timeline-stack"
                    >
                        Angular | jQuery | Java | Sass
                    </Typography>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: "#FAFAFA",
                        color: "#000",
                        boxShadow:
                            "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
                        borderRadius: "4px",
                    }}
                    date="2019"
                    iconStyle={{
                        background: "#f5f5f5",
                        color: "#4e4e4e",
                    }}
                    icon={<StarIcon />}
                >
                    <Typography variant="h6" component="h6">
                        HackGSU Hackathon
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="p"
                        className="timeline-organization"
                    >
                        Spring
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        component="p"
                        className="timeline-stack"
                    >
                        Winner
                    </Typography>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: "#FAFAFA",
                        color: "#000",
                        boxShadow:
                            "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
                        borderRadius: "4px",
                    }}
                    date="2018 - 2019"
                    iconStyle={{
                        background: "#f5f5f5",
                        color: "#4e4e4e",
                    }}
                    icon={<WorkIcon />}
                >
                    <Typography variant="h6" component="h6">
                        Teaching Assistant
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="p"
                        className="timeline-organization"
                    >
                        Mississippi State University
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        component="p"
                        className="timeline-stack"
                    >
                        Biomedical Programming
                    </Typography>
                </VerticalTimelineElement>

                {/* <VerticalTimelineElement
                    iconStyle={{
                        background: "#f5f5f5",
                        color: "#4e4e4e",
                    }}
                    icon={<StarIcon />}
                /> */}
            </VerticalTimeline>
        </Container>
    );
};

export default Timeline;
