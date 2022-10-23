import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.form`
  display: flex;
  width: 320px;
  max-width: 80vw;
  align-self: center;
  border-radius: 5px;
  justify-content: space-between;
  flex-direction: column;
  padding: 15px;
  gap: 10px;
  background-color: var(--grey3);
  margin-bottom: 50px;
`;

export const Title1Form = styled.h2`
  color: white;
  width: 85%;
  padding: 25px 0px 15px 0px;
  align-self: center;
  text-align: center;
`;

export const Text1Form = styled.p`
  color: var(--grey1);
  width: 85%;
  align-self: center;
  text-align: center;
  margin-bottom: 15px;
`;

export const TextAlert = styled.p`
  background-color: var(--negative);
  color: var(--grey4);
  font-weight: bold;
  font-size: 12px;
  padding: 5px 5px;
  border-radius: 3px;
  width: fit-content;
  max-height: min-content;
  margin-bottom: 5px;
`;

export const Label = styled.label`
  color: white;
  align-self: flex-start;
  margin-bottom: 5px;
  width: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12.182px;
`;

export const Input = styled.input`
  color: white;
  border-radius: 5px;
  border: solid 1px var(--grey2);
  padding: 15px;
  background-color: var(--grey2);
  margin-bottom: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16.2426px;
  &:hover {
    border: solid 1px white;
  }
`;

export const Select = styled.select`
  color: white;
  border-radius: 5px;
  border: solid 1px var(--grey2);
  padding: 15px;
  background-color: var(--grey2);
  margin-bottom: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16.2426px;
  &:hover {
    border: solid 1px white;
  }
`;

interface IButtonMainProps {
  mode: string;
}

export const MainButton = styled.button<IButtonMainProps>`
  padding: 15px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: var(--colorPrimary);
  width: 100%;
  margin-bottom: 25px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  ${({ mode }) => {
    if (mode === "one") {
      return css`
        &:hover {
          background-color: var(--colorPrimaryFocus);
        }
      `;
    } else if (mode === "two") {
      return css`
        background-color: var(--colorPrimaryNegative);
      `;
    }
  }}
`;

export const MainButtonLink = styled(Link)<IButtonMainProps>`
  text-decoration: none;
  display: flex;
  justify-content: center;
  padding: 15px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: var(--colorPrimary);
  align-self: center;
  width: 91%;
  margin-bottom: 25px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  ${({ mode }) => {
    if (mode === "one") {
      return css`
        &:hover {
          background-color: var(--colorPrimaryFocus);
        }
      `;
    } else if (mode === "two") {
      return css`
        background-color: var(--colorPrimaryNegative);
      `;
    }
  }}
`;