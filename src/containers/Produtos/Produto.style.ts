import styled from "styled-components";


export const BannerProduto = styled.div `
    width: 100%;
    background: grey;
    height: 400px;
    position: relative;

    & .banner-img{
        opacity: 0.3;
    }
`

export const ImageProduto = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;

`


export const DescriptionProduto = styled.div `
        width: 100%;
        padding: 2rem;
        position: absolute;
        text-align: center;
        display: flex;
        bottom: 1px;
        justify-content: center;
        background-color: rgba(20, 81, 141, 0.6);

    & h1 {
        color: #fff;
    }

    & .tag-name{
        opacity: 0;
        transform: translateX(400%)
    }
`


export const Overlay = styled.div `
    position: absolute;
    background-color: rgba(199, 198, 198, 0.712);
    top: 0;
    left: 0;
    bottom: 7px;
    width: 100%;
    height: 100%;
`

export const SectionProduct = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    height: 800px;
`

export const ContainerProduct = styled.div `
    width: 80%;
    margin-top: 50px;
    display: flex;
    gap: 70px;
    row-gap: 100px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 690px;
`

