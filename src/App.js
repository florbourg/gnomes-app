import styled from 'styled-components'

function App() {
  return (
    <Main>
        <h2>
          init gnomes-app || Flor Bourg
        </h2>
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
`

export default App;
