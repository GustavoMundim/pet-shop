import React from "react";
import { CartOverlay, DivCart, BorderOverlay, CardOverlay, DescricaoOverlay, ImageCardOverlay } from "./Carrinho.style";
import { Link } from "react-router-dom";


type ProdutoLoja = {
    id: number;
    imagem: string;
    descricao: string;
    preco: number;
    compras_efetuadas: number;
}

type Products = {
    state: boolean;
    setstate: React.Dispatch<React.SetStateAction<boolean>>;
    produtos: ProdutoLoja[];
    total: number;
}

const CartOverlayBuy: React.FC<Products> = ({ state, setstate, produtos, total }) => {


    const CloseCart = () => {
        setstate(false);
        localStorage.setItem('carrinho', JSON.stringify(produtos));
    }

    const Close = () => {
        setstate(false)
    }
    
    return (
        <>
            {state && (
                <DivCart>
                    <BorderOverlay onClick={() => Close()}></BorderOverlay>
                    <CartOverlay>
                        {produtos.map((my_cart, index) => (
                            <CardOverlay key={index}>
                                <ImageCardOverlay src={my_cart.imagem}/>
                                <DescricaoOverlay>
                                    <h1>{my_cart.descricao}</h1>
                                    <p>R$ {my_cart.preco.toFixed(2)}</p>
                                </DescricaoOverlay>
                            </CardOverlay>
                        ))}
                        <a href="/carrinho" className="button-total" onClick={() => CloseCart()}>Ir para o Carrinho</a>
                    </CartOverlay>
                </DivCart>
            )}
        </>
    );
}

export default CartOverlayBuy;
