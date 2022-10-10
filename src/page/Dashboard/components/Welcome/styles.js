import styled from "styled-components";

export const Container = styled.section `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 50px 0px;
    border-bottom: 1px solid var(--grey2);
    @media (max-width: 750px) {
    padding: 30px 0px;
  }
  `;

export const Div = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 800px;
    max-width: 80vw;
    @media (max-width: 750px) {
    flex-direction: column;
    gap:10px;
    align-items: flex-start;
  }
  `;

export const Title = styled.h2 `
align-self: center;
text-align: center;
color: white;
font-size: 22px;
font-weight: bold;
@media (max-width: 750px) {
    align-self: flex-start;
    text-align: start;
  }
`;

export const Text = styled.p `
  color: var(--grey1);
`;