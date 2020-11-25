import React from "react";
import {
    Typography,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
} from "@material-ui/core";
import "../App.css";

const ProjectCard = (props) => {
    const { title, text, imagePath, githubUrl } = props;
    return (
        <Card className="pc-card">
            <div>
                <CardMedia
                    className="pc-media"
                    component="img"
                    image={imagePath}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {text}
                    </Typography>
                </CardContent>
            </div>
            <CardActions>
                <Button
                    size="small"
                    className="pc-btn"
                    href={githubUrl}
                    target="_blank"
                    variant="contained"
                    disableElevation
                >
                    GitHub
                </Button>
                {/* <Button
                    size="small"
                    className="pc-btn"
                    variant="contained"
                    disableElevation
                >
                    Demo
                </Button> */}
            </CardActions>
        </Card>
    );
};

export default ProjectCard;
