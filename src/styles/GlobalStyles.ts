import { createGlobalStyle, styled } from 'styled-components'



interface ImageProductProps {
    width_image: string
}

export const GlobalStyled = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    
    };

    body {
        font-family: "Poppins", sans-serif;
        font-size: 16px;
    }

    ul {
        list-style: none;
    }


`


export const CardsProdutos = styled.div `
    width: 320px;
    height: 300px;
    background: #fff;
    justify-content: center;
    text-align :center;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;


    &.cards-produtos-1 {
        transform: translateX(-500%);
        opacity: 0;
    }

    &.cards-produtos-2 {
        transform: translateX(-500%);
        opacity: 0;
    }
   `

   export const ImageProduct = styled.img<ImageProductProps> `
   width: ${(props) => props.width_image};
   height: 100%;
   object-fit: cover;
   transition: all 0.3s ease;

   &:hover{
       cursor: pointer;
       transform: scale(0.9);
   }
`

export const ProductDescription = styled.div `
    width: 100%;


    & h1 {
        font-size: 10px;
    }

    & p {
        font-size: 15px;
        font-weight: 800;
    }
`