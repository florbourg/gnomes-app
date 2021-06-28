import React from "react";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";

export default function FloatingActionButtons({ handleClick }) {
  return (
    <Icon color="primary" aria-label="back" onClick={handleClick}>
      <ArrowBackOutlinedIcon />
    </Icon>
  );
}

const Icon = styled(Fab)`
  position: absolute;
  bottom: 15px;
  right: 15px;
`;
