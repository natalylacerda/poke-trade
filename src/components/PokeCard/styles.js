import styled from "styled-components";

const getStyle = (type) => {
  if (type === "default") {
    return `
        display: flex;
        justify-content: space-between;
      `;
  } else if (type === "chosen") {
    return `
        display: flex;
        justify-content: flex-start;
        padding-top: 15px;
      `;
  }
};

export const Card = styled.div`
  height: 190px;
  width: 170px;
  border-radius: 10px;
  margin: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(8px + 2vmin);
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  ${(props) => getStyle(props.type)}
`;
export const Buttons = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  width: 100%;
  height: 20%;
`;
export const Xp = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  padding: 5px 10px 0;
  font-size: 0.95rem;
  color: grey;
`;
export const Cancel = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-end;
  padding: 0 10px;
`;
