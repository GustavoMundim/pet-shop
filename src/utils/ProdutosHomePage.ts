import produto from '../assets/Racoes/produto1.jpg'
import produto1 from '../assets/Racoes/produto2.jpg'
import produto2 from '../assets/Racoes/produto3.jpg'
import produto3 from '../assets/Racoes/produto4.jpg'

import produtos1 from '../assets/ProdutosNovos/produto1.jpg'
import produtos2 from '../assets/ProdutosNovos/produto2.jpg'
import produtos3 from '../assets/ProdutosNovos/produto3.jpg'
import produtos4 from '../assets/ProdutosNovos/produto4.jpg'



interface ProdutosRecomendados {
    imagem_produto: string,
    descricao: string,
    preco: number
}

interface ProdutosNovos {
    imagem_produto: string, 
    descricao: string,
    preco: number
}


export const ProdutosRecomendados = [
    {
        imagem_produto: produto,
        descricao: 'Affinity GranPlus - Choice Cães Adultos Frango Carne, Ração Guabi, 15kg',
        preco: 136.99

    },

    {
        imagem_produto: produto1,
        descricao: 'Ração Pedigree Nutrição Essencial Carne para Cães Adultos',
        preco: 154.79

    },

    {
        imagem_produto: produto2,
        descricao: 'Ração Golden Special para Gatos Adultos Sabor Frango e Carne',
        preco: 149.99

    },

    {
        imagem_produto: produto3,
        descricao: 'Ração Whiskas para Gatos Adultos Sabor Carne',
        preco: 179.90

    }
]


export const ProdutosNovos = [
    {
        imagem_produto: produtos1,
        descricao: 'Omega 3 Dog 1000mg',
        preco: 77.90
    },

    {
        imagem_produto: produtos2,
        descricao: 'Ração Seca Suprema Sabor Carne para Cães Adultos',
        preco: 117.81
    },
    
    {
        imagem_produto: produtos3,
        descricao: 'Magnus Bifinho Cães Adultos Sabor Carne - 500G',
        preco: 26.99,
    },

    {
        imagem_produto: produtos4,
        descricao: 'Ração Champ Carne e Cereal para Cães Adultos',
        preco: 99.99,
    }
]

