/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

// import CardGnome from "../components/home/CardGnome";
import { gnomesResults, isSearchLoading } from "../redux/selectors";
import { searchGnomes } from "../redux/actions/search.actions";

function HomePage({ history }) {
  const dispatch = useDispatch();
  const gnomesList = useSelector((state) => gnomesResults(state));
  const isLoading = useSelector((state) => isSearchLoading(state));

  const handleSearchById = (id) => (event) => {
    history.push(`/gnomes/profile/${id}`);
  };

  useEffect(() => {
    if (!gnomesList) {
      dispatch(searchGnomes());
    }
  }, []);

  return (
    <Root>
      <h2>gnomes-app || Flor Bourg</h2>
      {isLoading && <CircularProgress />}
      {/* <CardsContainer>
        {gnomesList?.map((item) => (
          <CardGnome item={item} key={item.id} />
        ))}
      </CardsContainer> */}

      {!isLoading &&
        gnomesList &&
        gnomesList?.map((item) => (
          <p key={item.id} onClick={handleSearchById(item.id)}>
            {item.name}
          </p>
        ))}
    </Root>
  );
}

const Root = styled.div`
  font-family: ${(props) => props.theme.fonts.primary.regular};
  width: 100%;
`;

/* const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`; */

export default HomePage;
