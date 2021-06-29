import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FilterListIcon from "@material-ui/icons/FilterList";
import gnomeIcon from "../images/gnomeIcon.png";

export default function Nav({ setVisibleMenu, visibleMenu, aria }) {
  const handleVisibleMenu = () => {
    if (visibleMenu) {
      setVisibleMenu(false);
    } else {
      setVisibleMenu(true);
    }
  };

  return (
    <Container>
      <img src={gnomeIcon} alt="Gnome Icon" />
      <h2>Gnomes-app</h2>
      {aria === "home" && (
        <FilterListIconWrapper
          onClick={handleVisibleMenu}
          visibleMenu={visibleMenu}
        />
      )}
    </Container>
  );
}

Nav.propTypes = {
  setVisibleMenu: PropTypes.func.isRequired,
  visibleMenu: PropTypes.bool.isRequired,
  aria: PropTypes.string,
};

Nav.defaultProps = {
  setVisibleMenu: () => {},
  visibleMenu: false,
};

const Container = styled.div`
  background-color: white;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0px;
  z-index: 4;

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 0px 30px;
  }
`;

const FilterListIconWrapper = styled(FilterListIcon)`
  transform: ${(props) =>
    props.visibleMenu ? "rotate(0.5turn)" : "rotate(0)"};
  transition: all 0.5s ease-in-out;
  font-size: 25px;

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    transform: ${(props) =>
      props.visibleMenu ? "rotate(0.25turn)" : "rotate(0.75turn)"};
  }
`;
