import React, { useEffect, useState } from 'react';
import PokeCard from './components/PokeCard';
import { Container, Header, Teams, BlueTeam, RedTeam, Pokedex } from './AppStyles';
import axios from 'axios';

function App() {
  const [results, setResults] = useState();
  const [apiUrl, setApiUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  useEffect(() => {
    axios.get(apiUrl).then((res) => {
      setResults(res.data.results);
      setNextPage(res.data.next);
      setPrevPage(res.data.prev);
    });
  }, [results, apiUrl]);

  const [blueTeam, setBlueTeam] = useState([]);
  const [redTeam, setRedTeam] = useState([]);

  function handleBlue(url) {
    axios.get(`${url}`).then(
      (res) => (
        setBlueTeam([...blueTeam, res.data])
    ));
  }
  function handleRed(url) {
    axios.get(`${url}`).then(
      (res) => (
        setRedTeam([...redTeam, res.data])
    ));
  }

  return (
    <Container>
      <Header>
        <h2> Escolha até 6 pokemons para cada time </h2>
        <h3> Time Azul x Time Vermelho </h3>
        <Teams>

          <BlueTeam>
            {blueTeam &&
            blueTeam.map((pokemon, idx) => (
              <PokeCard
                type={'chosen'}
                name={pokemon.name}
                url={`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`}
                key={idx}
              />
            ))}
          </BlueTeam>

          <RedTeam>
            {redTeam &&
              redTeam.map((pokemon, idx) => (
                <PokeCard
                  type={'chosen'}
                  name={pokemon.name}
                  url={`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`}
                  key={idx}
                />
            ))}
          </RedTeam>
        </Teams>
      </Header>
      
      <Pokedex>
        {results &&
          results.map((result, idx) => (
            <PokeCard
              type={'default'}
              url={result.url}
              name={result.name}
              key={idx}
              onClickLeft={() => handleBlue(result.url)}
              onClickRight={() => handleRed(result.url)}
              
            />
        ))}
      <div onClick={() => setApiUrl(nextPage)}>
        próximo
      </div>
      <div onClick={() => setApiUrl(prevPage)}>
        voltar
      </div>
      </Pokedex>
    </Container>
  );
}

export default App;
