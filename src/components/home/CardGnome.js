import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import List from "../common/List";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: 5,
    //backgroundColor: "transparent",
    padding: "5px 15px",
  },
  media: {
    minHeight: 100,
    minWidth: 100,
    //backgroundPosition: "center -10px",
    borderRadius: "50%",
    //margin: "auto",
  },
  area: {
    display: "flex",
    flexDirection: "row",
  },
});

export default function MediaCard({ item }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.area}>
        <CardMedia
          className={classes.media}
          image={item.thumbnail}
          title="Profile Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Detail variant="body2" color="textSecondary" component="p">
          <strong>Age</strong> {item.age}
        </Detail>
        <Detail variant="body2" color="textSecondary" component="p">
          <strong>Height</strong> {item.height.toFixed(2)}
        </Detail>
        <Detail variant="body2" color="textSecondary" component="p">
          <strong>Weight</strong> {item.weight.toFixed(2)}
        </Detail>
        <Detail variant="body2" color="textSecondary" component="p">
          <strong>Hair Color</strong> {item.hair_color}
        </Detail>
      </CardActions>
      <CardActions>
        {item.friends[0] && (
          <div>
            <strong>Friends</strong>
            {item.friends.map((friend) => (
              <p key={friend}>{friend}</p>
            ))}
          </div>
        )}
      </CardActions>
      <CardActions>
        <List items={item.professions} title={<strong>Professions</strong>} />
      </CardActions>
    </Card>
  );
}

const Detail = styled(Typography)`
  text-align: center;
`;
