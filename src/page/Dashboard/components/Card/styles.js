import styled from "styled-components";

export const Li = styled.li`
display: flex;
justify-content: space-between;
border-radius: 5px;
border: none;
padding: 15px;
background-color: var(--grey4);
&:hover{
  background-color: var(--grey2);
}
`;

export const TituloCard = styled.h2`
color: white;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 14.21px;
`;

export const DivLevel = styled.div`
display: flex;
gap: 10px;

.lixeira{
  color: var(--grey1);
  border: none;
  cursor: pointer;
  &:hover{
    color: var(--negative);
  }
}
`;

export const Text = styled.p `
  color: var(--grey1);
`;