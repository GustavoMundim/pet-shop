import styled from "styled-components"
import image from '../../assets/ExtrasIMG/banner_compra.jpg'

export const SectionCarrinho = styled.div `
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background-image: url(${image});
    align-items: center;
    background-size: cover;
    position: absolute;
`

export const OverlaySection = styled.div `
  position: absolute;
  background-color: rgba(231, 228, 228, 0.7);
  top: 0;
  left: 0;
  bottom: 7px;
  width: 100%;
  height: 100%;
`


export const ContainerCarrinho = styled.div `
    z-index: 50;
    width: 100%;
    display: flex;
    opacity: 0.7;
    justify-content: center;
    align-items: center;
    height: 800px;
    border-radius: 8px;
`


export const CardCarrinho = styled.div `
    width: 80%;
    height: 700px;
    display: flex;
    border-radius: 8px;
    background: #fff;
`



export const DivisoriaItems = styled.div `
    width: 50%;
    height: 100%; 
    padding: 1.2rem;
    border-right: 2px solid black;
    background: white;


    overflow-y: auto;
`



export const CardDiv = styled.div `
    width: 100%;
    height: 100px;
    display: flex;
    border: 1px solid black;
    align-items: center;
    border-radius: 8px;
    margin-top: 10px;
    background: #fff;
`

export const ImageCarrinho = styled.img `
    width: 12%;
    padding: 1rem;
    height: 100%;
`

export const ProdutoInfo = styled.div `
    width: 100%;
    display: flex;


    & h1 {
        width: 70%;
        font-size: 10px;
    }

    & p {
        width: 20%;
        text-align: center;

    }
`


export const DivisoriaCartao = styled.div `
    width: 50%;
    height: 100%;
    padding: 2rem;
    display: flex;
`

export const Input = styled.input `
    width: 250px;
    height: 50px;
    text-align: center;
    border-radius: 4px;

    &:hover {
        border: 1px solid green;
    }
`

export const ColumnCartao = styled.div `
    width: 100%;
    height: 640px;
    overflow-y: auto;
    display: flex;
    padding: 2rem;
    background: #fff;
    flex-wrap: wrap;
    border-radius: 8px;

    & h2 {
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
    }
`


export const DivCartao = styled.div `
    width: 100%;
    display: flex;
    height: 90px;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
    text-align: center;
`

export const Div = styled.div `
    width: 40%;
    display: flex;
    flex-direction: column;

    & .label-input {
        font-size: 15px;
        margin-bottom: 6px;
        
        align-items: end;
    }
`

export const DivMax = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const InputMax = styled.input `
    width: 90%;
    height: 50px;
    text-align: center;
    border: 2px solid black;

    &:hover {
        border: 1px solid green;
    }
`


export const SelectMax = styled.select `
    width: 90%;
    text-align: center;
    height: 50px;
`


export const ButtonBuy = styled.button `
    background: green;
    width: 480px;
    padding: 1.2rem;
    border-radius: 8px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;

    &:hover {
        opacity: 0.7;
    }
`