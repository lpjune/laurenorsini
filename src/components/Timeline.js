import React from "react";
import { Container, Typography } from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
    return (
        <Container>
            <Typography variant="h4" component="h4">
                Experience & Education
            </Typography>

            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date="2018 - present"
                    iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Software Engineer
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Center for Advanced Vehicular Systems
                    </h4>
                    <p>
                        ▪ Develop webapps with React and Flask to communicate
                        with Android app ▪ Create Android app in Kotlin for
                        drone research ▪ Server streams drone commands and live
                        video between app and webapp
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2020"
                    iconStyle={{
                        background: "rgb(233, 30, 99)",
                        color: "#fff",
                    }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Bachelor of Science in Computer Science
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Mississippi State University
                    </h4>
                    <p>Clubs etc</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2020"
                    iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    }}
                    icon={<StarIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        BullyHack Hackathon
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Spring
                    </h4>
                    <p>
                        Win blah
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2019"
                    iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Full-stack Web Intern
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        C Spire
                    </h4>
                    <p>
                        ▪ Developed new features and integrated them into
                        e-commerce prod ▪ JavaScript (Angular, jQuery) and CSS,
                        Java (Spring) back-end
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2019"
                    iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    }}
                    icon={<StarIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        HackGSU Hackathon
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Spring
                    </h4>
                    <p>
                        Win blah
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2018 - 2019"
                    iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Teaching Assistant
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Mississippi State University
                    </h4>
                    <p>
                        Supported instructor with tests, curriculum, and
                        assignment grading for Biomedical Programming in Python
                        Class
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    iconStyle={{
                        background: "rgb(16, 204, 82)",
                        color: "#fff",
                    }}
                />
            </VerticalTimeline>
        </Container>
    );
};

export default Timeline;
