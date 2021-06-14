import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 2vh 1vw;
`
export const Header = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  background-color: lightgrey;
`
export const Teams = styled.div `
  display: flex;
  width: 100%;
  box-sizing: border-box;
`
export const BlueTeam = styled.div `
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 50%;
  min-height: 70vh;
  box-sizing: border-box;
  background-color: lightblue;
`
export const RedTeam = styled.div `
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 50%;
  min-height: 70vh;
  box-sizing: border-box;
  background-color: lightcoral;
`
export const Pokedex = styled.div `
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
`
