/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { gnomesResults, gnomeById } from "../redux/selectors";
import { searchGnomes, searchById } from "../redux/actions/search.actions";
import CardGnome from "../components/home/CardGnome";
import FloatingButton from "../components/common/FloatingButton";
import Container from "../components/common/Container";

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
      <FloatingButton handleClick={handleReturn} />
      <Container>
        {gnomeSelected?.map((value, index) => (
          <CardGnome item={value} key={index} />
        ))}
      </Container>
    </Root>
  );
}

const Root = styled.div`
  width: 100%;
`;

export default ProfilePage;
