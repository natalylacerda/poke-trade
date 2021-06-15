import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 2vh 1vw;
  background-image: linear-gradient(to bottom right, #3eed78, #00aeff);
`
export const Header = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
`
export const Title = styled.h2 `
  display: flex;
  justify-content: center;
  color: white;
  width: 100%;
`
export const CheckButton = styled.div `
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: lightgrey;
  margin: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 1.9rem;
  height: 85px;
  width: 190px;
  cursor: pointer;
`
export const Teams = styled.div `
  display: flex;
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const BlueTeam = styled.div `
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 50%;
  min-height: 75vh;
  box-sizing: border-box;
  background-color: rgba(0, 70, 255, 0.4);
  backdrop-filter: blur(6px);
`
export const RedTeam = styled.div `
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 50%;
  min-height: 65vh;
  box-sizing: border-box;
  background-color: rgba(255, 20, 20, 0.5);
  backdrop-filter: blur(4px);
`
export const Pokedex = styled.div `
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
`
export const Buttons = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-around;
`
