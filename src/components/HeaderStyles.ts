import styled from 'styled-components';



export const LogoSite = styled.div `    
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    background-color: #dddddd;
    border: 1px solid #fff;`

export const ImageLogo = styled.img `
    padding: 5px;
    width: 90px;
    transform: rotate(-290deg)
`


export const HeaderStyled = styled.header `
    background: #fff;
    padding: 2rem;
    width: 100%;
    border: 1px solid #fff;
`

export const NavBar = styled.nav `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;

    & .menu-departament{
        display: flex;
        gap: 200px;
        
    }

    & ul {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .submenu ul {
        background: grey;
        padding: 1.5rem;
        transition: all 0.3s ease;
        background: #fff;
        position: absolute;
        z-index: 50;
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    }

    .submenu ul a {
        font-weight: 500;
    }

    & .cart-bb{
        font-size: 20px;
    }

    & .submenu ul {
        display: none;
        

    }

    & .submenu:hover ul{
        display: block;
    }



    & a {
        text-decoration: none;
        color: black;
        font-weight: 600;
        font-size: 14px;
        font-weight: 700;

        &:hover{
            text-decoration: underline;
        }
    }
`
