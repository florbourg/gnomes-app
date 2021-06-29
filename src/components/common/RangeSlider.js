import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";

export default function RangeSlider({
  value,
  setValue,
  max,
  setFriendSelected,
  title,
}) {
  const handleChange = (event, newValue) => {
    setFriendSelected(undefined);
    setValue(newValue);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Value>{value[0]}</Value>
        </Grid>
        <Grid item xs>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="off"
            max={max.toFixed(0)}
          />
        </Grid>
        <Grid item>
          <Value>{value[1]}</Value>
        </Grid>
      </Grid>
    </Container>
  );
}

RangeSlider.propTypes = {
  setFriendSelected: PropTypes.func,
  value: PropTypes.array.isRequired,
  setValue: PropTypes.func.isRequired,
  max: PropTypes.number,
  title: PropTypes.string,
};

RangeSlider.defaultProps = {
  setFriendSelected: () => {},
  handleClick: () => {},
  value: [30, 100],
  setValue: () => {},
  max: 100,
  title: "",
};

const Container = styled.div`
  width: 90%;
  min-width: 300px;
  padding: 0px 15px;
  box-sizing: border-box;
  //border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 12px;
  margin: 10px 0px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;

const Title = styled.p`
  font-weight: 600;
  margin: 15px 0px 7px 0px;
  text-align: center;
`;

const Value = styled.p`
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
`;
