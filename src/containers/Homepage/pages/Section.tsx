import { SectionProdutos, SectionProduto} from "./Section.styles";
import { CardsProdutos, ImageProduct, ProductDescription } from "../../../styles/GlobalStyles";
import { ProdutosRecomendados } from "../../../utils/ProdutosHomePage";
import { ProdutosNovos } from "../../../utils/ProdutosHomePage";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SectionPages = () => {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.sec-text, .sec-text-2, .cards-produtos-1, .cards-produtos-2', {
            x: 0,
            opacity: 1,
            duration: 2,
            scrollTrigger: {
                trigger: '.init',
                endTrigger: '.end-init',
                start: 'top: 250px',
                end: 'bottom 600px',
                scrub: true,
            }
        })

    


        return () => {
            gsap.killTweensOf('.sec-text, .sec-text-2')
        }
    })


    return (
    <>
    <div className="init" />
    <SectionProdutos>
        <h1 className='sec-text'>Produtos Recomendados</h1>
        <SectionProduto className="sec-produtos-1">
            {ProdutosRecomendados.map( (product, index) => (
                <CardsProdutos key={index} className='cards-produtos-1'>
                    <ImageProduct src={product.imagem_produto} width_image='100'/>
                    <ProductDescription>
                        <h1>{product.descricao}</h1>
                        <p>R$ {product.preco}</p>
                    </ProductDescription>
                </CardsProdutos>
            ))}
        </SectionProduto>
    </SectionProdutos>
    <div className="end-init" />
    <div className="init-2" />
    <SectionProdutos>
        <h1 className="sec-text-2">Novos</h1>
        <SectionProduto className="test">
            {ProdutosNovos.map( (product, index) => (
                <CardsProdutos key={index} className="cards-produtos-2">
                    <ImageProduct src={product.imagem_produto} width_image="100"/>
                    <ProductDescription>
                        <h1>{product.descricao}</h1>
                        <p>R$ {product.preco}</p>
                    </ProductDescription>
                </CardsProdutos>
            ))}
        </SectionProduto>
    </SectionProdutos>
    <div className="end-init-2" />
    
</>)
}


export default SectionPages;