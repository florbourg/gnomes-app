import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import CardGnome from "./components/home/CardGnome";

function App() {
  const [allGnomes, setAllGnomes] = useState(null);
  const BASE_URL =
    "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";

  useEffect(() => {
    async function getGnomes() {
      try {
        const response = await axios.get(BASE_URL);
        if (response.status === 200) {
          // response - object, eg { status: 200, message: 'OK' }
          console.log(response.data.Brastlewark);
          setAllGnomes(response.data.Brastlewark);
          return true;
        }
        return false;
      } catch (err) {
        console.error(err);
        return false;
      }
    }

    getGnomes();
  }, []);

  console.log(allGnomes);

  return (
    <Main>
      <h2>init gnomes-app || Flor Bourg</h2>

      <CardsContainer>
        {allGnomes?.map((item) => (
          <CardGnome item={item} />
        ))}
      </CardsContainer>
    </Main>
  );
}

const Main = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.white};
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;

export default App;
