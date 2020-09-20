import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import "./Card.css";

const useStyles = makeStyles({
  root: {
    width: 345,
    margin: "1rem 2rem",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26);",
  },
  media: {
    height: 140,
  },
  action: {
    flexFlow: "column",
    alignItems: "flex-end ",
  },
});

const FoodCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.sum}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h3">
            {props.location}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.action}>
        <a
          href={`https://${props.url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Learn More</p>
        </a>
      </CardActions>
    </Card>
  );
};

export default FoodCard;
