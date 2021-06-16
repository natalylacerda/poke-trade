import React, { useEffect, useState } from 'react';
import PokeCard from './components/PokeCard';
import PageButton from './components/PageButton'
import SnackBar from './components/SnackBar'
import Alert from './components/Alert'
import { Container, Header, AlignHistory, Title, TeamTitle, Teams, BlueTeam, RedTeam, Pokedex, CheckButton, PageButtons, TradeInfo } from './AppStyles';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [results, setResults] = useState();
  const [apiUrl, setApiUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [fairTrade, setFairTrade] = useState();
  const [unfairTrade, setUnFairTrade] = useState();
  const [blueTeam, setBlueTeam] = useState([]);
  const [redTeam, setRedTeam] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [trade, setTrade] = useState({
    scoreBlue: 0,
    scoreRed: 0,
    scoreTotal: 0,
    tradeStatus: 'Status'
  });
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get(apiUrl).then((res) => {
      setResults(res.data.results);
      setNextPage(res.data.next);
      setPrevPage(res.data.previous);
    });
  }, [apiUrl]);

  function handleBlue(pokemon) {
    if (blueTeam.length === 6){
      alert('Só é possível adicionar até 6 pokemons')
    }
    else{
      setBlueTeam([...blueTeam, pokemon])
    }
  }
  function handleRed(pokemon) {
    if (redTeam.length === 6){
      alert('Só é possível adicionar até 6 pokemons')
    }
    else{
      setRedTeam([...redTeam, pokemon])
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
    
    let totalScore = Math.abs(blueScore - redScore);
    if(blueScore === 0 || redScore === 0){
      alert('Os lados não podem estar vazios')
    }
    else{
      if (totalScore > 50){
        setUnFairTrade('Essa troca não é justa');
        setTrade({
          scoreBlue: blueScore,
          scoreRed: redScore,
          scoreTotal: totalScore,
          tradeStatus: 'Troca Injusta :('
        });
      }
      else{
        setFairTrade('Troca bacana, hehe :)');
        setTrade({
          scoreBlue: blueScore,
          scoreRed: redScore,
          scoreTotal: totalScore,
          tradeStatus: 'Troca Justa :)'
        });
      }
    }
    setHistory([...history, trade]);
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

  function HistoryModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{color: '#444143'}}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Trocas Anteriores:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {history &&
          history.map((trade, idx) => (
            <TradeInfo key={idx}>
              <p>{idx}</p>
              <p>Lado Azul: {trade.scoreBlue}</p>
              <p>Lado Vermelho: {trade.scoreRed}</p>
              <p>Diferença de XP: {trade.scoreTotal}</p>
              <p className="status" >{trade.tradeStatus}</p>
            </TradeInfo>
        ))}
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <Container>
      <Header>
        <Title> SELECIONE ATÉ 6 POKEMONS PARA CADA LADO </Title>
        <AlignHistory>
          <PageButton className="history" label={'Histórico'} onClick={() => setModalShow(true)}/>
        </AlignHistory>
        <Teams>

          <BlueTeam>
            <TeamTitle>Lado Azul</TeamTitle>
            {blueTeam &&
            blueTeam.map((poke, idx) => (
              <PokeCard
                type={'chosen'}
                pokemon={poke}
                key={idx}
                onClickCancel={() => cancelBluePokemon(poke.id)}
              />
            ))}
          </BlueTeam>

          <RedTeam>
            <TeamTitle>Lado Vermelho</TeamTitle>
            {redTeam &&
              redTeam.map((poke, idx) => (
                <PokeCard
                  type={'chosen'}
                  pokemon={poke}
                  key={idx}
                  onClickCancel={() => cancelRedPokemon(poke.id)}
                />
            ))}
          </RedTeam>
        </Teams>
        <CheckButton onClick={() => checkTrade()}>
          TROCAR
        </CheckButton>
      </Header>
      
      <Pokedex>
        {results &&
          results.map((pokemon, idx) => (
            <PokeCard
              type={'default'}
              url={pokemon.url}
              key={idx}
              onClickLeft={handleBlue}
              onClickRight={handleRed}
            />
        ))}
      </Pokedex>
      <PageButtons>
        <PageButton
          onClick={() => setApiUrl(prevPage)}
          label={'Voltar'}
        />
        <PageButton
          onClick={() => setApiUrl(nextPage)}
          label={'Próximo'}
        />
      </PageButtons>

      <HistoryModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      {fairTrade && (
        <SnackBar setActions={setFairTrade} autoHideDuration={2500}>
          <Alert>{fairTrade}</Alert>
        </SnackBar>
      )}
      {unfairTrade && (
        <SnackBar setActions={setUnFairTrade} autoHideDuration={2500}>
          <Alert error>{unfairTrade}</Alert>
        </SnackBar>
      )}
    </Container>
  );
}

export default App;
