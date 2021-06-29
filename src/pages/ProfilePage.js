/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { gnomesResults, gnomeById } from "../redux/selectors";
import { searchGnomes, searchById } from "../redux/actions/search.actions";
import GnomeProfile from "../components/profile/GnomeProfile";
import FloatingButton from "../components/common/FloatingButton";
import Nav from "../components/common/Nav";

function ProfilePage({ match, history }) {
  const dispatch = useDispatch();
  const gnomesList = useSelector((state) => gnomesResults(state));
  const gnomeSelected = useSelector((state) => gnomeById(state));
  const { params } = match;

  const handleReturn = () => {
    history.push(`/gnomes`);
  };

  useEffect(() => {
    if (!gnomesList) {
      dispatch(searchGnomes());
    }
  }, []);

  useEffect(() => {
    if (gnomesList && params) {
      dispatch(searchById({ array: gnomesList, id: parseInt(params.id) }));
    }
  }, [params, gnomesList, dispatch]);

  return (
    <Root>
      <Nav />
      <FloatingButton handleClick={handleReturn} aria="back" />
      <Container>
        {gnomeSelected?.map((value, index) => (
          <GnomeProfile item={value} key={index} />
        ))}
      </Container>
    </Root>
  );
}

const Root = styled.div`
  width: 100%;
`;

const Container = styled.div`
  margin: auto;
  width: 100%;

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    width: 70%;
  }
`;

export default ProfilePage;
