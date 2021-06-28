import React from "react";
// import PropTypes from "prop-types";
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

export default function MediaCard({
  item,
  setFriendSelected,
  handleClick,
  placed,
}) {
  const classes = useStyles();

  return (
    <CardWrapper placed={placed}>
      <CardActionArea className={classes.area}>
        <CardMedia
          className={classes.media}
          image={item.thumbnail}
          title="Profile Image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            onClick={handleClick(item.id)}
          >
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
              <p key={friend} onClick={() => setFriendSelected(friend)}>
                {friend}
              </p>
            ))}
          </div>
        )}
      </CardActions>
      {placed !== "home" && (
        <React.Fragment>
          <CardActions>
            <List
              items={item.professions}
              title={<strong>Professions</strong>}
            />
          </CardActions>
        </React.Fragment>
      )}
    </CardWrapper>
  );
}

/* MediaCard.propTypes = {
  item,
  setFriendSelected,
  handleClick,
  placed,
} */

MediaCard.defaultProps = {
  item: {},
  setFriendSelected: () => {},
  handleClick: () => {},
  placed: null,
};

const Detail = styled(Typography)`
  text-align: center;
`;

const CardWrapper = styled(Card)`
  max-width: 300px;
  margin: 5px;
  padding: 5px 15px;
  box-shadow: ${(props) =>
    props.placed !== "home"
      ? "none"
      : "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"};
`;
