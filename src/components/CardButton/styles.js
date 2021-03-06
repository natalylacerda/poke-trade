import styled from 'styled-components';

const getStyle = (type) => {
  if (type === "blue") {
    return `
      border-bottom-left-radius: 10px;
      background: #2495ff;
    `;
  }
  if (type === "red") {
    return `
      border-bottom-right-radius: 10px;
      background: #f25341;
    `;
  }
};  
export const ButtonContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  width: 50%;
  color: white;
  font-size: 0.9rem;
  transition: 0.3s;
  :hover{
      cursor: pointer;
      opacity: 60%;
  }
  ${(props) => getStyle(props.type)}
`;
