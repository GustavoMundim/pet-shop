
import { SectionHomePageStyled, ContainerSlide, ContainerCards, CardSlide, ImageCard, DescriptionCard} from "./HomeStyles";
import { Swiper, SwiperSlide } from 'swiper/react'
import { BannerCompra } from "../../utils/Compras";
import SectionPages from "./pages/Section";


function HomePage() {


    return (
        <>
        <SectionHomePageStyled>
            <ContainerSlide className="container-slide">
                <ContainerCards className="container-cards">
                    <Swiper
                    slidesPerView={2}
                    >
                        {BannerCompra.map((banner, id) => (
                            <SwiperSlide key={id}>
                                <CardSlide>
                                        <ImageCard src={banner.imagem} />
                                        <DescriptionCard>
                                            <h1>{banner.descricao}</h1>
                                        </DescriptionCard>
                                </CardSlide>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </ContainerCards>
            </ContainerSlide>
        </SectionHomePageStyled>
        <SectionPages/>
        </>
    )}

export default HomePage;