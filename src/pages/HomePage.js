/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import { isEmpty } from "lodash";

import CardGnome from "../components/home/CardGnome";
import { gnomesResults, isSearchLoading } from "../redux/selectors";
import { searchGnomes } from "../redux/actions/search.actions";

import RangeSlider from "../components/common/RangeSlider";
import SelectField from "../components/common/SelectField";
import Container from "../components/common/Container";

import { createFilters } from "../lib/helpers";

function HomePage({ history }) {
  const dispatch = useDispatch();
  const gnomesList = useSelector((state) => gnomesResults(state));
  const isLoading = useSelector((state) => isSearchLoading(state));

  const { data } = createFilters(gnomesList);

  const [ageValue, setAgeValue] = useState([30, 300]);
  const [heightValue, setHeightValue] = useState([30, 100]);
  const [weightValue, setWeightValue] = useState([20, 40]);
  const [professionSelected, setProfessionSelected] = useState("Metalworker");
  const [hairColorSelected, setHairColorSelected] = useState("Pink");
  const [friendSelected, setFriendSelected] = useState();

  const [results, setResults] = useState();

  const handleSearchById = (id) => (event) => {
    history.push(`/gnomes/profile/${id}`);
  };

  useEffect(() => {
    if (!gnomesList) {
      dispatch(searchGnomes());
    }
  }, []);

  const filter = (selected) => {
    console.log(selected);

    setResults(
      gnomesList?.filter((item) => {
        if (!isEmpty(selected.friend)) {
          if (
            (item.professions.includes(selected.profession) ||
              selected.profession === "all") &&
            (item.hair_color === selected.hairColor ||
              selected.hairColor === "all") &&
            item.friends.includes(selected.friend) &&
            item.age > selected.ageValue[0] &&
            item.age < selected.ageValue[1] &&
            item.height > selected.heightValue[0] &&
            item.height < selected.heightValue[1] &&
            item.weight > selected.weightValue[0] &&
            item.weight < selected.weightValue[1]
          ) {
            return item;
          }
        } else {
          if (
            (item.professions.includes(selected.profession) ||
              selected.profession === "all") &&
            (item.hair_color === selected.hairColor ||
              selected.hairColor === "all") &&
            item.age > selected.ageValue[0] &&
            item.age < selected.ageValue[1] &&
            item.height > selected.heightValue[0] &&
            item.height < selected.heightValue[1] &&
            item.weight > selected.weightValue[0] &&
            item.weight < selected.weightValue[1]
          ) {
            return item;
          }
        }

        return false;
      })
    );
  };

  useEffect(() => {
    filter({
      profession: professionSelected,
      hairColor: hairColorSelected,
      friend: friendSelected,
      ageValue: ageValue,
      heightValue: heightValue,
      weightValue: weightValue,
    });
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
      <Container display="column">
        <h2>gnomes-app || Flor Bourg</h2>
        {isLoading && <CircularProgress />}
        <p>match: {results?.length}</p>

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
        <p>
          Age from: {ageValue[0]} to: {ageValue[1]}
        </p>

        <RangeSlider
          value={ageValue}
          setValue={setAgeValue}
          max={data.age.max}
          setFriendSelected={setFriendSelected}
        />

        <p>
          Height from: {heightValue[0]} to: {heightValue[1]}
        </p>

        <RangeSlider
          value={heightValue}
          setValue={setHeightValue}
          max={data.height.max}
          setFriendSelected={setFriendSelected}
        />

        <p>
          Weight from: {weightValue[0]} to: {weightValue[1]}
        </p>

        <RangeSlider
          value={weightValue}
          setValue={setWeightValue}
          max={data.weight.max}
          setFriendSelected={setFriendSelected}
        />
      </Container>

      <Container>
        {results?.map((item) => (
          <CardGnome
            item={item}
            key={item.id}
            setFriendSelected={setFriendSelected}
            handleClick={handleSearchById}
            placed="home"
          />
        ))}
      </Container>
      {/* {!isLoading &&
        gnomesList &&
        gnomesList?.map((item) => (
          <p key={item.id} onClick={handleSearchById(item.id)}>
            {item.name}
          </p>
        ))} */}
    </Root>
  );
}

const Root = styled.div`
  font-family: ${(props) => props.theme.fonts.primary.regular};
  width: 100%;
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.mui.breakpoints.up("sm")} {
    flex-direction: row;
  }
`;

export default HomePage;
