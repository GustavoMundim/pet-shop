import styled from 'styled-components';



export const SectionHomePageStyled = styled.div `
    width: 100%;
    min-height: 27vw;
    display: flex;
    justify-content: center;
`

export const ContainerSlide = styled.div `
    width: 100%;
    justify-content: center;
    align-items: center;
`



export const ContainerCards = styled.div `
    height: 400px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const CardSlide = styled.div `
    width: 97%;
    height: 400px;
    margin: 10px;
    display: flex;
    justify-content: center;
    z-index: 1;
    background: #fff;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`


export const DescriptionCard = styled.div `
    position: absolute;
    text-align: center;
    bottom: 0px;
    width: 97.1%;
    padding: 0.5rem;
    background: rgba(20, 81, 141, 0.7);

    & h1 {
        font-size: 16px;
        color: #fff;
        font-weight: 800;
        text-transform: uppercase;
        text-shadow: 0px 0px 5px black;
    }
`

export const ImageCard = styled.img `
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 8px;
`


export const BannerImagem = styled.div `
    width: 100%;
    height: 100%;
    object-fit: cover;
`



