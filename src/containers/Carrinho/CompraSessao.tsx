import { useState, useEffect } from 'react';
import {
    ContainerCarrinho,
    SectionCarrinho,
    ImageCarrinho,
    CardCarrinho,
    DivisoriaItems,
    CardDiv,
    ProdutoInfo,
    DivisoriaCartao,
    Input,
    ColumnCartao,
    DivCartao,
    Div,
    DivMax,
    InputMax,
    ButtonBuy,
    SelectMax,
    OverlaySection


} from './CarrinhoCompra.style';

function MeuCarrinho() {
    type ProdutoLoja = {
        id: number;
        imagem: string;
        descricao: string;
        preco: number;
        link_produto: string;
        compras_efetuadas: number;
    }

    const [soma, setSoma] = useState<number>(0);
    const carrinhoSalvo = localStorage.getItem('carrinho');
    const produtos: ProdutoLoja[] = carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];

    useEffect(() => {
        const total = produtos.reduce((acc, produto) => acc + produto.preco, 0);
        setSoma(total);
    }, [produtos]); 

    const DeleteCart = () => {
        localStorage.removeItem('carrinho');
    }

    return (
        <SectionCarrinho>
            <OverlaySection />
            <ContainerCarrinho>
                <CardCarrinho>
                    <DivisoriaItems>
                        {produtos.length > 0 ? (
                            produtos.map((produto, index) => (
                                <CardDiv key={index}>
                                    <ImageCarrinho src={produto.imagem} />
                                    <ProdutoInfo>
                                        <h1>{produto.descricao}</h1>
                                        <p>R$ {produto.preco.toFixed(2)}</p>
                                    </ProdutoInfo>
                                </CardDiv>
                            ))
                        ) : (
                            <p>Seu carrinho está vazio!</p>
                        )}
                    </DivisoriaItems>
                    <DivisoriaCartao>
                        <ColumnCartao>
                            <DivCartao>
                                <Div>
                                    <label className='label-input'>Nome</label>
                                    <Input type="text" placeholder='Digite seu nome..' />
                                </Div>
                                <Div>
                                    <label className='label-input'>Sobrenome</label>
                                    <Input type="text" placeholder='Digite seu sobrenome..' />
                                </Div>
                                <Div>
                                    <label className='label-input'>Telefone</label>
                                    <Input type="tel" placeholder='+55349999-9999' />
                                </Div>
                                <Div>
                                    <label className='label-input'>CEP</label>
                                    <Input type="text" placeholder='Digite seu CEP' />
                                </Div>
                                <Div>
                                    <label className='label-input'>Endereço</label>
                                    <Input type="text" placeholder='Endereço de cobrança' />
                                </Div>
                                <Div>
                                    <label className='label-input'>Número da residência</label>
                                    <Input type="text" placeholder='' />
                                </Div>
                                <DivMax>
                                    <label className='label-input'>Complemento (opcional)</label>
                                    <InputMax type="text" placeholder='Ex: Rua Dos Bobos' />
                                </DivMax>
                                <DivMax>
                                    <label className='label-input'>Forma de Pagamento</label>
                                    <SelectMax>
                                            <option value="credito">Cartão de Crédito</option>
                                            <option value="debito">Cartão de Débito</option>
                                            <option value="boleto">Boleto Bancário</option>
                                            <option value="pix">PIX</option>
                                            <option value="paypal">PayPal</option>
                                    </SelectMax>
                                </DivMax>
                                <a href="/carrinho"><ButtonBuy onClick={() => DeleteCart()}>Total: R$ {soma.toFixed(2)}</ButtonBuy></a>
                                {/*  AQUI SERIA A LOGICA DO PAGAMENTO COMO É UM SITE  APENAS PARA PORTFOLIO DECIDI NÃO ADICIONAR. */}
                            </DivCartao>
                        </ColumnCartao>
                    </DivisoriaCartao>
                </CardCarrinho>
            </ContainerCarrinho>
        </SectionCarrinho>
    );
}

export default MeuCarrinho;
