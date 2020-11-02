import React from "react";
import {
    Typography,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CardActionArea,
} from "@material-ui/core";
import "../App.css"

const ProjectCard = (props) => {
    const { title, text, imagePath, githubUrl } = props;
    return (
        <Card className="pc-card">
            <CardActionArea>
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
            </CardActionArea>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    href={githubUrl}
                    target="_blank"
                >
                    GitHub
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProjectCard;
