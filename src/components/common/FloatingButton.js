import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

export default function FloatingActionButtons({ handleClick, aria }) {
  return (
    <Icon color="primary" aria-label={aria} onClick={handleClick}>
      {aria === "back" && <ArrowBackOutlinedIcon />}
      {aria === "reset" && <RotateLeftIcon />}
    </Icon>
  );
}

FloatingActionButtons.propTypes = {
  aria: PropTypes.string,
  handleClick: PropTypes.func,
};

FloatingActionButtons.defaultProps = {
  aria: "",
  handleClick: () => {},
};

const Icon = styled(Fab)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 20;
`;
