import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleMain = styled.h2`
  align-self: center;
  text-align: center;
  color: var(--colorPrimary);
  margin-bottom: 30px;
  font-size: 26px;
  font-weight: bold;
`;

export const Text1Form = styled.p`
  color: var(--grey1);
  width: 85%;
  align-self: center;
  text-align: center;
  margin-bottom: 15px;
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
