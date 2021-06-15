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
  :hover{
      cursor: pointer;
      background-color: grey;
  }
`;