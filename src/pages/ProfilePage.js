/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { gnomesResults, gnomeById } from "../redux/selectors";
import { searchGnomes, searchById } from "../redux/actions/search.actions";

function ProfilePage({ match }) {
  const dispatch = useDispatch();
  const gnomesList = useSelector((state) => gnomesResults(state));
  const gnomeSelected = useSelector((state) => gnomeById(state));
  const { params } = match;

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

  const renderResult = () => {
    if (gnomeSelected) {
      return gnomeSelected.map((value, index) => (
        <p key={index}>ProfilePage id {value.name} </p>
      ));
    }
  };

  return <Root>{renderResult()}</Root>;
}

const Root = styled.div`
  width: 100%;
`;

export default ProfilePage;
