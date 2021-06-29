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

import Accordion from "../common/Accordion";

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
        </DetailsContainer>
      </CardActions>
      {item.friends[0] && (
        <Accordion title={<strong>FRIENDS</strong>}>
          {item.friends.map((friend) => (
            <FriendsContainer key={friend}>
              <p onClick={() => setFriendSelected(friend)}>{friend}</p>
            </FriendsContainer>
          ))}
        </Accordion>
      )}
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
  max-width: 300px;
  margin: 25px 10px;
  padding: 35px 30px 25px;
  box-sizing: content-box;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  border-radius: 6px;
  border-left: 3px solid
    ${(props) => (props.color ? props.color : "transparent")};
`;

const HeaderCard = styled(CardActionArea)`
  display: flex;
  justify-content: space-around;
  margin: 20px 10px 30px;
  text-align: left;
`;

const FriendsContainer = styled.div`
  width: 100%;
  text-align: left;
  margin-left: 16px;
  color: ${(props) => props.theme.colors.link};
  cursor: pointer;
`;
