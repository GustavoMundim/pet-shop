
//  IMPORTAÇOES IMAGENS 
import racao_cachorro from '../assets/ProdutoRacoesCachorro/produto1.jpg'
import racao_cachorro1 from '../assets/ProdutoRacoesCachorro/produto2.jpg'
import racao_cachorro2 from '../assets/ProdutoRacoesCachorro/produto3.jpg'
import racao_cachorro3 from '../assets/ProdutoRacoesCachorro/produto4.jpg'
import racao_cachorro4 from '../assets/ProdutoRacoesCachorro/produto5.jpg'
import racao_cachorro5 from '../assets/ProdutoRacoesCachorro/produto6.jpg'
import racao_cachorro6 from '../assets/ProdutoRacoesCachorro/produto7.jpg'
import racao_cachorro7 from '../assets/ProdutoRacoesCachorro/produto8.jpg'


import racao_gato1 from '../assets/ProdutoRacoesGatos/produto1.jpg'
import racao_gato2 from '../assets/ProdutoRacoesGatos/produto2.jpg'
import racao_gato3 from '../assets/ProdutoRacoesGatos/produto3.jpg'
import racao_gato4 from '../assets/ProdutoRacoesGatos/produto4.jpg'
import racao_gato5 from '../assets/ProdutoRacoesGatos/produto5.jpg'
import racao_gato6 from '../assets/ProdutoRacoesGatos/produto6.jpg'
import racao_gato7 from '../assets/ProdutoRacoesGatos/produto7.jpg'
import racao_gato8 from '../assets/ProdutoRacoesGatos/produto8.jpg'


import acessorio_cachorro from '../assets/Acessorios/Cachorro/acessorio1.png'
import acessorio_cachorro_2 from '../assets/Acessorios/Cachorro/acessorio2.jpg'
import acessorio_cachorro_3 from '../assets/Acessorios/Cachorro/acessorio3.jpg'
import acessorio_cachorro_4 from '../assets/Acessorios/Cachorro/acessorio4.jpg';


import acessorio_gato from '../assets/Acessorios/Gato/acessorio1.jpg'
import acessorio_gato2 from '../assets/Acessorios/Gato/acessorio2.jpg'
import acessorio_gato3 from '../assets/Acessorios/Gato/acessorio3.jpg'
import acessorio_gato4 from '../assets/Acessorios/Gato/acessorio4.jpg'


import brinquedo_cachorro from '../assets/Brinquedos/Cachorro/brinquedo1.jpg'
import brinquedo_cachorro_2 from '../assets/Brinquedos/Cachorro/brinquedo2.jpg'
import brinquedo_cachorro_3 from '../assets/Brinquedos/Cachorro/brinquedo3.jpg'
import brinquedo_cachorro_4 from '../assets/Brinquedos/Cachorro/brinquedo4.jpg'


import brinquedo_gato from '../assets/Brinquedos/Gato/brinquedo1.jpg'
import brinquedo_gato_2 from '../assets/Brinquedos/Gato/brinquedo2.jpg'
import brinquedo_gato_3 from '../assets/Brinquedos/Gato/brinquedo3.jpg'
import brinquedo_gato_4 from '../assets/Brinquedos/Gato/brinquedo4.jpg'








type TypeFixed = {
    id: number,
    imagem: string,
    descricao: string,
    preco: number,
    compras_efetuadas: number,
}

interface TypeAnimal extends Omit<TypeFixed, 'tipo_animal'> {
    tipo_animal: 'cachorro' | 'gato';
}







export const RacaoCachorro: TypeFixed[] = [
    {
        id: 1,
        imagem: racao_cachorro,
        descricao: 'PURINA Pro Plan Ração Cães Adultos Médios Pro Plan Frango 15Kg',
        preco: 349.90,
        compras_efetuadas: 0
    },

    {
        id: 2,
        imagem: racao_cachorro1,
        descricao: 'Premier Pet Ração Premier Fórmula Para Cães Adultos De Raças Grandes Sabor Carne - 15Kg Para Todas Grande Adulto - Sabor Sem Sabor',
        preco: 212.99,
        compras_efetuadas: 0
    },

    {
        id: 3,
        imagem: racao_cachorro2,
        descricao: 'Premier Pet Golden Special - Ração para Cães Adultos, Sabor Frango e Carne, 15kg',
        preco: 143.90,
        compras_efetuadas: 0
    },

    {
        id: 4,
        imagem: racao_cachorro3,
        descricao: 'Affinity GranPlus - Choice Cães Adultos Frango Carne, Ração Guabi, 15kg',
        preco: 136.99,
        compras_efetuadas: 0
    },


    {
        id: 5,
        imagem: racao_cachorro4,
        descricao: 'Ração Pedigree Nutrição Essencial Carne para Cães Adultos',
        preco: 154.79,
        compras_efetuadas: 0
    },

    {
        id: 6,
        imagem: racao_cachorro5,
        descricao: 'Magnus Bifinho Cães Adultos Sabor Carne - 500G',
        preco: 26.99,
        compras_efetuadas: 0
    },

    {
        id: 7,
        imagem: racao_cachorro6,
        descricao: 'Ração Premier Shih Tzu Raças Específicas para Cães Adultos - 7,5kg Premier Pet',
        preco: 218.50,
        compras_efetuadas: 0
    },

    {
        id: 8,
        imagem: racao_cachorro7,
        descricao: 'Ração Champ Carne e Cereal para Cães Adultos',
        preco: 99.99,
        compras_efetuadas: 0
    }
]


export const RacaoGato: TypeFixed[] = [
    {
    id: 1,
    imagem: racao_gato1,
    descricao: 'Ração Golden Special para Gatos Adultos Sabor Frango e Carne',
    preco: 149.99,
    compras_efetuadas: 0
},

{
    id: 2,
    imagem: racao_gato2,
    descricao: 'Ração GranPlus Choice para Gatos Adultos Sabor Frango e Carne 10,1kg',
    preco: 147.90,
    compras_efetuadas: 0
},

{
    id: 3,
    imagem: racao_gato3,
    descricao: 'Special Cat Mix Premium para Gatos Adultos',
    preco: 157.99,
    compras_efetuadas: 0
},


{
    id: 4,
    imagem: racao_gato4,
    descricao: 'Ração Kitekat para Gatos Adultos Sabor Mix de Carnes',
    preco: 44.99,
    compras_efetuadas: 0
},

{
    id: 5,
    imagem: racao_gato5,
    descricao: 'Ração Quatree Gourmet para Gatos Adultos Sabor Carne',
    preco: 55.99,
    compras_efetuadas: 0
},

{
    id: 6,
    imagem: racao_gato6,
    descricao: 'Ração Whiskas para Gatos Adultos Sabor Frango',
    preco: 179.90,
    compras_efetuadas: 0
},


{
    id: 7,
    imagem: racao_gato7,
    descricao: 'Ração Seca Nutrilus Pro+ Carne para Gatos Adultos',
    preco: 122.32,
    compras_efetuadas: 0
},

{
    id: 8,
    imagem: racao_gato8,
    descricao: 'PURINA Pro Plan Ração Nestlé Purina Proplan Urinary Para Gatos Adultos Sabor Frango E Arroz 7 5Kg Purina Sabor Frango',
    preco: 296.09,
    compras_efetuadas: 0
}

]

export const Acessorio: TypeAnimal[] = [

    {
        id: 1,
        imagem: acessorio_cachorro,
        descricao: 'Adaptador Para Cinto de Segurança AMF Preto',
        preco: 34.90,
        compras_efetuadas: 0,
        tipo_animal: 'cachorro'},

    {
        id: 2,
        imagem: acessorio_cachorro_2,
        descricao: 'Caixa de Transporte Chalesco Gulliver Cinza Com Rodinhas para Cães e Gatos',
        preco: 880.58,
        compras_efetuadas: 0,
        tipo_animal: 'cachorro',
    },

    {
        id: 3,
        imagem: acessorio_cachorro_3,
        descricao: 'Barreira Segurança Veicular Pet&Go Preta',
        preco: 239.99,
        compras_efetuadas: 0,
        tipo_animal: 'cachorro',
    },

    {
        id: 4,
        imagem: acessorio_cachorro_4,
        descricao: 'Comedouro Pesado Petz para Cães Azul Turquesa',
        preco: 39.99,
        compras_efetuadas: 0,
        tipo_animal: 'cachorro',
    },


    {
        id: 5,
        imagem: acessorio_gato,
        descricao: 'Bebedouro Cansei de Ser Gato Água Fresca',
        preco: 59.99,
        compras_efetuadas: 0,
        tipo_animal: 'gato',
    },

    {
        id: 6,
        imagem: acessorio_gato2,
        descricao: 'Bebedouro Fonte de Porcelana Cansei de Ser Gato',
        preco: 299.99,
        compras_efetuadas: 0,
        tipo_animal: 'gato',
    },


    {
        id: 7,
        imagem: acessorio_gato3,
        descricao: 'Mochila Chalesco Vision Azul para Cães e Gatos',
        preco: 199.99,
        compras_efetuadas: 0,
        tipo_animal: 'gato',
    },


    {
        id: 8,
        imagem: acessorio_gato4,
        descricao: 'Caixa de Transporte Furacão Pet Joy Cinza para Cães e Gatos',
        preco: 59.99,
        compras_efetuadas: 0,
        tipo_animal: 'gato',
    },
]

export const Brinquedos: TypeAnimal[] = [

    {
        id: 1,
        imagem: brinquedo_cachorro,
        descricao: 'Brinquedo Zee.Dog Mr. Fresco para Cães',
        preco: 109.00,
        compras_efetuadas: 0,
        tipo_animal: 'cachorro'},

    {
        id: 2,
        imagem: brinquedo_cachorro_2,
        descricao: 'Brinquedo Zee.Dog Monsterz Greg para Cães',
        preco: 89.00,
        compras_efetuadas: 0,
        tipo_animal: 'cachorro',
    },

    {
        id: 3,
        imagem: brinquedo_cachorro_3,
        descricao: 'Brinquedo Zee.Dog Alien Flex Ghim para Cães',
        preco: 89.00,
        compras_efetuadas: 0,
        tipo_animal: 'cachorro',
    },

    {
        id: 4,
        imagem: brinquedo_cachorro_4,
        descricao: 'Brinquedo Petz Bolinha Dedos Vermelho para Cães',
        preco: 39.99,
        compras_efetuadas: 0,
        tipo_animal: 'cachorro',
    },


    {
        id: 5,
        imagem: brinquedo_gato,
        descricao: 'Arranhador Playground Casa Gato Brinquedo Sisal Marrom Claro',
        preco: 217.45,
        compras_efetuadas: 0,
        tipo_animal: 'gato',
    },

    {
        id: 6,
        imagem: brinquedo_gato_2,
        descricao: 'Arranhador Hello Pet Sisal e Pelúcia Cinza para Gatos',
        preco: 54.99,
        compras_efetuadas: 0,
        tipo_animal: 'gato',
    },


    {
        id: 7,
        imagem: brinquedo_gato_3,
        descricao: 'Brinquedo Petz Laser para Gatos - Cores Sortidas',
        preco: 28.99,
        compras_efetuadas: 0,
        tipo_animal: 'gato',
    },


    {
        id: 8,
        imagem: brinquedo_gato_4,
        descricao: 'Brinquedo Chalesco Varinha com Pena e Guizo para Gatos - Cores Sortidas',
        preco: 9.99,
        compras_efetuadas: 0,
        tipo_animal: 'gato',
    },
];




