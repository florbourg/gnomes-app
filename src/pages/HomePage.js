/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import FloatingButton from "../components/common/FloatingButton";

import CardGnome from "../components/home/CardGnome";
import { gnomesResults } from "../redux/selectors";
import { searchGnomes } from "../redux/actions/search.actions";

import RangeSlider from "../components/common/RangeSlider";
import SelectField from "../components/common/SelectField";
import Nav from "../components/common/Nav";

import { createFilters, filter } from "../lib/helpers";

function HomePage({ history }) {
  const dispatch = useDispatch();
  const gnomesList = useSelector((state) => gnomesResults(state));
  const [visibleMenu, setVisibleMenu] = useState();

  const { data } = createFilters(gnomesList);

  const [ageValue, setAgeValue] = useState([30, 300]);
  const [heightValue, setHeightValue] = useState([40, 100]);
  const [weightValue, setWeightValue] = useState([20, 42]);
  const [professionSelected, setProfessionSelected] = useState("all");
  const [hairColorSelected, setHairColorSelected] = useState("all");
  const [friendSelected, setFriendSelected] = useState(null);

  const [results, setResults] = useState();

  const handleSearchById = (id) => (event) => {
    history.push(`/gnomes/profile/${id}`);
  };

  const handleResetFilters = () => {
    setProfessionSelected("all");
    setHairColorSelected("all");
    setFriendSelected(null);
    setAgeValue([30, 300]);
    setHeightValue([40, 100]);
    setWeightValue([20, 42]);
  };

  useEffect(() => {
    if (!gnomesList) {
      dispatch(searchGnomes());
    }
  }, []);

  useEffect(() => {
    filter(
      {
        profession: professionSelected,
        hairColor: hairColorSelected,
        friend: friendSelected,
        ageValue: ageValue,
        heightValue: heightValue,
        weightValue: weightValue,
      },
      setResults,
      gnomesList
    );
  }, [
    professionSelected,
    hairColorSelected,
    friendSelected,
    ageValue,
    gnomesList,
    heightValue,
    weightValue,
  ]);

  return (
    <Root>
      <FloatingButton handleClick={handleResetFilters} aria="reset" />
      <Nav
        setVisibleMenu={setVisibleMenu}
        visibleMenu={visibleMenu}
        aria="home"
      />
      <Main>
        <FiltersMenuContainer visibleMenu={visibleMenu}>
          <Button variant="outlined">
            {results?.length === 1
              ? `${results?.length} Result`
              : `${results?.length} Results`}
          </Button>

          <SelectField
            options={data.professions.options}
            state={professionSelected}
            setState={setProfessionSelected}
            setFriendSelected={setFriendSelected}
            title="Profession"
          />
          <SelectField
            options={data.hair.options}
            state={hairColorSelected}
            setState={setHairColorSelected}
            setFriendSelected={setFriendSelected}
            title="Hair Color"
          />

          <RangeSlider
            value={ageValue}
            setValue={setAgeValue}
            max={data.age.max}
            setFriendSelected={setFriendSelected}
            title="AGE"
          />

          <RangeSlider
            value={heightValue}
            setValue={setHeightValue}
            max={data.height.max}
            setFriendSelected={setFriendSelected}
            title="HEIGHT"
          />

          <RangeSlider
            value={weightValue}
            setValue={setWeightValue}
            max={data.weight.max}
            setFriendSelected={setFriendSelected}
            title="WEIGHT"
          />

          <Button onClick={handleResetFilters}>RESET FILTERS</Button>
        </FiltersMenuContainer>
        <ResultsContainer>
          {results?.map((item) => (
            <CardGnome
              item={item}
              key={item.id}
              setFriendSelected={setFriendSelected}
              handleClick={handleSearchById}
            />
          ))}
        </ResultsContainer>
      </Main>
    </Root>
  );
}

const Root = styled.div`
  width: 100%;
  text-align: center;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    flex-direction: row;
    margin-bottom: 50px;
  }
`;

const FiltersMenuContainer = styled.div`
  background-color: white;
  opacity: 0.96;
  width: 100%;
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  position: fixed;
  top: ${(props) => (props.visibleMenu ? "55px" : "-700px")};
  z-index: 2;
  transition: all 0.5s ease-in-out;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    width: 400px;
    height: 100%;
    top: 60px;
    left: ${(props) => (props.visibleMenu ? "0px" : "-600px")};
    padding: 30px 10px;
  }
`;

const ResultsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

export default HomePage;
