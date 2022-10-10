import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 25px 0px;
  border-bottom: 1px solid var(--grey2);
`;

export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  max-width: 80vw;
`;

export const TitleMainHeader = styled.h1`
  align-self: center;
  text-align: center;
  color: var(--colorPrimary);
  font-size: 26px;
  font-weight: bold;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;
  max-width: 80vw;
`;

export const TitleMain = styled.h1`
  align-self: center;
  text-align: center;
  color: var(--colorPrimary);
  margin-bottom: 30px;
  font-size: 26px;
  font-weight: bold;
`;

export const ButtonSecondary = styled.button`
  padding: 0px 15px;
  height: 30px;
  border: none;
  color: white;
  background-color: var(--grey3);
  border-radius: 5px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: white;
  &:hover {
    background-color: var(--grey1);
  }
`;
