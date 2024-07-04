import styled from "styled-components";

export const DivCart = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    z-index: 70;
`

export const BorderOverlay = styled.div `
    width: 89vw;
    background-color: white;
    opacity: 0.6;
`

export const CartOverlay = styled.div `
    width: 50%;
    height: 100%;
    background-color: white;
    border-left: 4px solid #718096;
    display: flex;
    float: right;
    padding: 15px;
    flex-direction: column;
    gap: 15px;
    color: white;
    overflow-y: auto; 

    & .button-total{
        width: 97%;
        padding: 1.2rem;
        background: green;
        text-align: center;
        border: 2px solid white;
        text-decoration: none;
        border-radius: 8px;
        color: white;
        font-weight: 700;
        font-size: 12px;
        transition: all 0.3s ease;

        &:hover {
            opacity: 0.7;
            transform: scale(0.970);
            cursor: pointer;
        }
    }
`

export const CardOverlay = styled.div `
    margin-top: 20px;
    width: 97%;
    display: flex;
    align-items: center;
    height: 120px;
    background: white; 
    border: 1px solid black;
    border-radius: 2px;
    `

export const ImageCardOverlay = styled.img `
    width: 20%;
    padding: 10px;
    object-fit: cover;
    height: 100%;
`




export const DescricaoOverlay = styled.div `
    color: black;
    width: 100%;
    display: flex;

    & h1 {
        width: 50%;
        font-size: 9px;
        font-weight: 500;
    }

    & p  {
        width: 50%;
        text-align: center;
        font-size: 13px;
        font-weight: 600;
    }
`



