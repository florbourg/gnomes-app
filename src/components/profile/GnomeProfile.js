import React from "react";
import PropTypes from "prop-types";
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
    borderRadius: "50%",
  },
});

export default function MediaCard({ item, setFriendSelected, handleClick }) {
  const classes = useStyles();

  return (
    <CardWrapper color={item.hair_color}>
      <HeaderCard>
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
      </HeaderCard>
      <CardActions>
        <DetailsContainer>
          <Detail variant="body2" color="textSecondary" component="p">
            <strong>AGE</strong> {item.age}
          </Detail>
          <Detail variant="body2" color="textSecondary" component="p">
            <strong>HEIGHT</strong> {item.height.toFixed(1)}
          </Detail>
          <Detail variant="body2" color="textSecondary" component="p">
            <strong>WEIGHT</strong> {item.weight.toFixed(1)}
          </Detail>
          <Detail variant="body2" color="textSecondary" component="p">
            <strong>HAIR COLOR</strong> {item.hair_color}
          </Detail>
        </DetailsContainer>
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
      <CardActions>
        <List items={item.professions} title={<strong>Professions</strong>} />
      </CardActions>
    </CardWrapper>
  );
}

MediaCard.propTypes = {
  item: PropTypes.object.isRequired,
  setFriendSelected: PropTypes.func,
  handleClick: PropTypes.func,
};

MediaCard.defaultProps = {
  item: {},
  setFriendSelected: () => {},
  handleClick: () => {},
};

const Detail = styled(Typography)`
  text-align: center;
  border: 1px solid black;
  border-radius: 4px;
  padding: 5px 15px;
  font-size: 12px;
  ${(props) => props.theme.mui.breakpoints.up("md")} {
    font-size: 14px;
  }
  margin: 5px;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
`;

const CardWrapper = styled(Card)`
  background-color: #fff;
  margin: 25px 10px;
  padding: 35px 30px 5px;
  box-sizing: content-box;
  border-radius: 6px;
  border-left: 3px solid
    ${(props) => (props.color ? props.color : "transparent")};
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
`;

const HeaderCard = styled(CardActionArea)`
  display: flex;
  justify-content: space-around;
  margin: 20px 10px 30px;
  text-align: left;
  ${(props) => props.theme.mui.breakpoints.up("md")} {
    justify-content: flex-start;
    background-color: ${(props) => props.theme.colors.surface};
    padding: 20px;
    border-radius: 12px;
  }
`;
