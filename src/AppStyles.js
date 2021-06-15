import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 2vh 1vw;
  background-image: linear-gradient(to bottom right, #bdfffc, #57ccff);
`
export const Header = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
`
export const Title = styled.p `
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 1.85rem;
  color: #262626;
  width: 100%;
`
export const TeamTitle = styled.p `
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
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
  font-size: 1.5rem;
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
  min-height: 70vh;
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
  min-height: 70vh;
  box-sizing: border-box;
  background-color: rgba(255, 30, 0, 0.6);
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
