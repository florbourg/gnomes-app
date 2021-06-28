import React from "react";
import styled from "styled-components";

export default function Container({ children, display }) {
  return <Main display={display}>{children}</Main>;
}

const Main = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.display ? props.display : "row")};
  flex-wrap: wrap;
  align-items: ${(props) => (props.display ? "center" : "flex-start")};
  justify-content: ${(props) => (props.display ? "flex-start" : "center")};
`;
