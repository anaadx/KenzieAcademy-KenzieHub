import styled from "styled-components";

export const ContainerModal = styled.div `
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 1;
`;

export const DivModal = styled.div`
    position: absolute;
    position: relative;
    top: 150px;
    bottom: 500px;
    padding: 0px 15px;
    display: flex;
    flex-direction: column;
    width: 320px;
    background-color: var(--grey3);
    height: min-content;
    border-radius: 0px 0px 5px 5px;
`;

export const DivForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 15px;
`;

export const Title = styled.h2`
    color: white;
`;

export const ButtonTitle = styled.button`
    color: var(--grey1);
    border: none;
    background-color: var(--grey2);
`;

export const DivTitle = styled.div`
    display: flex;
    background-color: var(--grey2);
    width: 100%;
    padding:15px;
    justify-content: space-between;
    align-self: center;
    border-radius: 5px 5px 0px 0px;
`;