import { HeaderStyled, NavBar, LogoSite, ImageLogo } from './HeaderStyles'
import imagem_pata from '../assets/paw.jpg'
import { Link } from 'react-router-dom'
import ConsultaProduto from '../containers/Produtos/Consulta'
import { useState } from 'react'
function Header() {

    const [estado, setEstado] = useState('')
    const [animal, setAnimal] = useState('')

    const ReceiveAnswer = (produto: string, tipo_animal: string) => {
        setEstado(produto);
        setAnimal(tipo_animal)

    }

    return (
        <>
        <HeaderStyled className='header-style'>
            <NavBar>
                <ul className='menu-departament'>
                    <li className='submenu'>
                        <a href="#">Cachorro<i className='bx bx-caret-down'></i></a>
                        <ul>
                            <li><Link to="/produtos" onClick={() => ReceiveAnswer('racao-cachorro', '')}>Ração</Link></li>
                            <li><Link to="/produtos" onClick={() => ReceiveAnswer('acessorios', 'cachorro')}>Acessórios</Link></li>
                            <li><Link to="/produtos" onClick={() => ReceiveAnswer('brinquedos', 'cachorro')}>Brinquedos</Link></li>
                        </ul>
                    </li>
                    <li className='submenu'>
                        <a href="#">Gatos<i className='bx bx-caret-down'></i></a>
                        <ul>
                            <li><Link to="/produtos" onClick={() => ReceiveAnswer('racao-gato', '')}>Ração</Link></li>
                            <li><Link to="/produtos" onClick={() => ReceiveAnswer('acessorios', 'gato')}>Acessórios</Link></li>
                            <li><Link to="/produtos" onClick={() => ReceiveAnswer('brinquedos', 'gato')}>Brinquedos</Link></li>
                        </ul>
                    </li>
                    <li>
                     <Link to="/produtos" onClick={() => ReceiveAnswer('medicamentos', '')}>Medicamentos</Link>
                    </li>
                    <li>
                    <Link to="/produtos" onClick={() => ReceiveAnswer('promo', '')}>Promoções</Link>
                    </li>
                    <li>
                        <Link to="/produtos" onClick={() => ReceiveAnswer('servicos', '')}>Serviços</Link>
                    </li>
                    <li>
                        <a href="/carrinho">Carrinho<i className='bx bx-cart cart-bb'></i></a>
                    </li>
                </ul>
            </NavBar>
        </HeaderStyled>
        <LogoSite>
            <a href="/"><ImageLogo src={imagem_pata}/></a>
        </LogoSite>
        {estado && <ConsultaProduto compra={estado} raca={animal} />}
        </>
)};


export default Header;