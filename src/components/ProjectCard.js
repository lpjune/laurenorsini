import React from "react";
import {
    makeStyles,
    Typography,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CardActionArea,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
    bar: {
        color: "#264653",
    },
    icons: {
        color: "#e9c46a",
    },
    buttons: {},
    root: {
        position: "relative",
        maxWidth: 345,
    },
    media: {
        height: 145,
    },
}));

const ProjectCard = (props) => {
    const classes = useStyles();
    const { title, text, imagePath, githubUrl } = props;
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
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
