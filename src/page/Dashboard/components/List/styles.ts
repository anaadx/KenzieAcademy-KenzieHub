import styled from "styled-components";

export const Container = styled.ul `
  display: flex;
  width: 800px;
  max-width: 80vw;
  align-self: center;
  border-radius: 5px;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px 15px;
  gap: 15px;
  background-color: var(--grey3);
  margin-bottom: 50px;
`;

export const ContainerText = styled.div `
  display: flex;
  justify-content: space-between;
  align-self: center;
  align-items: center;
  width: 800px;
  max-width: 80vw;
  padding-bottom: 10px;
`;

export const Title = styled.h2 `
  color: white;
  padding: 25px 0px 15px 0px;
`;

export const Button = styled.button `
  padding: 0px 10px;
  height: 30px;
  border: none;
  color: white;
  background-color: var(--grey3);
  border-radius: 5px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: white;
  &:hover {
    background-color: var(--grey1);
  }
`;