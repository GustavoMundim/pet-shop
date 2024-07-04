import React, { useState } from 'react';
import { BannerProduto, ImageProduto, DescriptionProduto, Overlay, SectionProduct, ContainerProduct } from "./Produto.style";
import { CardsProdutos, ImageProduct, ProductDescription } from "../../styles/GlobalStyles";
import CartOverlayBuy from '../Carrinho/CartOverlay';
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ProdutoLoja = {
    id: number;
    imagem: string;
    descricao: string;
    preco: number;
    compras_efetuadas: number;
}

type ProdutoLocal = {
    tag: string;
    banner_img: string;
    produtos_loja: ProdutoLoja[];
    width: string ;
}

const ProdutoPage: React.FC<ProdutoLocal> = ({ tag, banner_img, produtos_loja, width }) => {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.tag-name, .banner-img', {
            x: 0,
            opacity: 1,

        })

        return () => {
            gsap.killTweensOf('.tag-name, .banner-img')
        }
    })


    const [cartOpen, setCartOpen] = useState(false);
    const [produto_carrinho, setCarrinho] = useState<ProdutoLoja[]>([]);
    const [total, setPrice] = useState(0);

    function AddCart(carrinho: ProdutoLoja) {
        setCartOpen(true);
        setCarrinho([...produto_carrinho, carrinho])
        setPrice(total + carrinho.preco)
    }

    return (
        <>
            <BannerProduto>
                <ImageProduto src={banner_img} className='banner-img'/>
                <Overlay />
                <DescriptionProduto>
                    <h1 className='tag-name'>{tag}</h1>
                </DescriptionProduto>
            </BannerProduto>
            <SectionProduct>
                <ContainerProduct>
                    {produtos_loja.map((produto, index) => (
                        <CardsProdutos key={index}>
                            <ImageProduct src={produto.imagem} width_image={width} alt='Imagem do produto' onClick={() => AddCart(produto)} />
                            <ProductDescription>
                                <h1>{produto.descricao}</h1>
                                <p>R$ {produto.preco}</p> 
                            </ProductDescription>
                        </CardsProdutos>
                    ))}
                </ContainerProduct>
            </SectionProduct>
            {cartOpen && <CartOverlayBuy state={cartOpen} setstate={setCartOpen} produtos={produto_carrinho} total={total}/>}
        </>
    );
}

export default ProdutoPage;
