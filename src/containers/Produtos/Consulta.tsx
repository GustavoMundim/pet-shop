
import React from 'react';
import ProdutoPage from './Produto';
import { RacaoCachorro, RacaoGato, Acessorio, Brinquedos } from "../../utils/Loja";
import { BannerCompra } from '../../utils/Compras';
import promocao from '../../assets/ExtrasIMG/verao.jpeg'
import medicamento from '../../assets/ExtrasIMG/medicamento.jpg'
import servicos_img from '../../assets/ExtrasIMG/servicos.jpg'
import acessorio_img from '../../assets/ExtrasIMG/acessorio.jpg'
import brinquedos_img from '../../assets/ExtrasIMG/brinquedos_img.jpg'



interface Props {
  compra: string;
  raca: string;
}

const ConsultaProduto: React.FC<Props> = ({ compra, raca }) => {
   return (
 <>
  {compra === 'racao-cachorro' && (
    <ProdutoPage tag={BannerCompra[1].descricao} banner_img={BannerCompra[1].imagem} produtos_loja={RacaoCachorro} width={'50%'} />
  )}
  {compra === 'racao-gato' && (
    <ProdutoPage tag={BannerCompra[0].descricao} banner_img={BannerCompra[0].imagem} produtos_loja={RacaoGato} width={'50%'}  />
  )}
  {compra === 'medicamentos' && (
    <ProdutoPage tag={BannerCompra[2].descricao} banner_img={medicamento} produtos_loja={[]} width={'50%'}/>
  )}
   {compra === 'promo' && (
    <ProdutoPage tag={BannerCompra[3].descricao} banner_img={promocao} produtos_loja={[]} width={'50%'}/>
  )}

  {compra === 'servicos' && (
    <ProdutoPage tag={'Serviços'} banner_img={servicos_img} produtos_loja={[]} width={'50%'}/>
  )}

{compra === 'acessorios' && (
  <ProdutoPage tag={`Acessórios para ${raca.charAt(0).toUpperCase() + raca.slice(1)}`}
  banner_img={acessorio_img} 
  produtos_loja={Acessorio.filter(acessorio_animal => acessorio_animal.tipo_animal === raca)} 
  width={'100%'}/>
)}


{compra === 'brinquedos' && (
  <ProdutoPage tag={`Brinquedos para ${raca.charAt(0).toUpperCase() + raca.slice(1)}`}
  banner_img={brinquedos_img} 
  produtos_loja={Brinquedos.filter(brinquedo => brinquedo.tipo_animal === raca)} 
  width={'100%'}/>
)}
   
</>
)};
 
export default ConsultaProduto;
