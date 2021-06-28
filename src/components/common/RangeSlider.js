import React from "react";
import styled from "styled-components";
import Slider from "@material-ui/core/Slider";

export default function RangeSlider({
  value,
  setValue,
  max,
  setFriendSelected,
}) {
  const handleChange = (event, newValue) => {
    setFriendSelected(undefined);
    setValue(newValue);
  };

  return (
    <Container>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
        aria-labelledby="range-slider"
        max={max}
      />
    </Container>
  );
}

const Container = styled.div`
  //margin: auto;
  width: 300px;
`;
