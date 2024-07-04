import styled from "styled-components";


export const SectionProdutos = styled.div `
    height: 500px;
    text-align: center;

    & h1 {
        font-size: 18px;
        font-weight: 500;
    }

    & .sec-text{
        opacity: 0;
        transform: translateX(-200%);
    }

    & .sec-text-2  {
        opacity: 0;
        transform: translateX(-200%);
    }

`

export const SectionProduto = styled.div `
    width: 100%;
    margin-top: 30px;
    height: 300px;
    display: flex;
    gap: 38px;
    justify-content: center;
`





