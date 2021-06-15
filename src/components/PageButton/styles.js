import styled from 'styled-components';

export const ButtonContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 10px;
  height: 50px;
  width: 90px;
  background-color: lightgrey;
  transition: 0.3s;
  margin: 10px 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.15);
  :hover{
    cursor: pointer;
    background-color: grey;
  }
`;