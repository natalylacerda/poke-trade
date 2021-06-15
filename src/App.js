import React, { useEffect, useState } from 'react';
import PokeCard from './components/PokeCard';
import PageButton from './components/PageButton'
import { Container, Header, Title, Teams, BlueTeam, RedTeam, Pokedex, CheckButton, Buttons } from './AppStyles';
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
      setPrevPage(res.data.previous);
    });
  }, [results, apiUrl]);

  const [blueTeam, setBlueTeam] = useState([]);
  const [redTeam, setRedTeam] = useState([]);

  function handleBlue(url) {
    if (blueTeam.length === 6){
      alert('Só é possível adicionar até 6 pokemons')
    }
    else{
      axios.get(`${url}`).then(
        (res) => (
          setBlueTeam([...blueTeam, res.data])
      ));
    }
  }
  function handleRed(url) {
    if (redTeam.length === 6){
      alert('Só é possível adicionar até 6 pokemons')
    }
    else{
      axios.get(`${url}`).then(
        (res) => (
          setRedTeam([...redTeam, res.data])
      ));
    }
  }

  function checkTrade() {
    let blueScore = 0;
    let redScore = 0;
    for (let i = 0; i < blueTeam.length; i++) {
      blueScore = blueScore + blueTeam[i].base_experience
    };
    for (let i = 0; i < redTeam.length; i++) {
      redScore = redScore + redTeam[i].base_experience
    };

    let totalScore = blueScore - redScore;
    if(blueScore === 0 || redScore === 0){
      alert('Os lados não podem estar vazios')
    }
    else{
      if (Math.abs(totalScore) > 30){
        alert('X Troca Injusta');
      }
      else{
        alert('Troca bacana :)')
      }
    }
  }

  function cancelBluePokemon(id) {
    let aux = false;
    let array = [];

    for (let i = 0; i < blueTeam.length; i++) {
      if (blueTeam[i].id === id && !aux){
        aux = true;
      }
      else{
        array.push(blueTeam[i])
      }
    };
    setBlueTeam(array);
  }
  function cancelRedPokemon(id) {
    let aux = false;
    let array = [];

    for (let i = 0; i < redTeam.length; i++) {
      if (redTeam[i].id === id && !aux){
        aux = true;
      }
      else{
        array.push(redTeam[i])
      }
    };
    setRedTeam(array);
  }

  return (
    <Container>
      <Header>
        <Title> ESCOLHA ATÉ 6 POKEMONS PARA CADA LADO </Title>
        <Teams>

          <BlueTeam>
            <Title>Lado Azul</Title>
            {blueTeam &&
            blueTeam.map((pokemon, idx) => (
              <PokeCard
                type={'chosen'}
                name={pokemon.name}
                url={`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`}
                key={idx}
                onClickCancel={() => cancelBluePokemon(pokemon.id)}
              />
            ))}
          </BlueTeam>

          <RedTeam>
            <Title>Lado Vermelho</Title>
            {redTeam &&
              redTeam.map((pokemon, idx) => (
                <PokeCard
                  type={'chosen'}
                  name={pokemon.name}
                  url={`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`}
                  key={idx}
                  onClickCancel={() => cancelRedPokemon(pokemon.id)}
                />
            ))}
          </RedTeam>
        </Teams>
        <CheckButton onClick={() => checkTrade()}>
          Trocar
        </CheckButton>
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
      </Pokedex>
      <Buttons>
        <PageButton
          onClick={() => setApiUrl(prevPage)}
          label={'Voltar'}
        />
        <PageButton
          onClick={() => setApiUrl(nextPage)}
          label={'Próximo'}
        />
      </Buttons>
    </Container>
  );
}

export default App;
