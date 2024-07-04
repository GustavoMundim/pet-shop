import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import banner4 from '../assets/banner4.jpg'


interface BannerCompra {
    id: number,
    descricao: string,
    link: string,
    imagem: string
}

export const BannerCompra = [
    {
        id: 1,
        descricao: 'Ração para gatos',
        link: '',
        imagem: banner1,
    },

    {
        id: 2,
        descricao: 'Ração para Cachorros',
        link: '',
        imagem: banner2, 
    },

    {
        id: 3,
        descricao: 'Medicamentos',
        link: '',
        imagem: banner3
    },

    {
        id: 4,
        descricao: 'Promoções',
        link: '',
        imagem: banner4
    },

]