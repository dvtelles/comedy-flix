import React, { FC } from 'react'

import { BannerMain } from './components/BannerMain'
import { Carousel } from './components/Carousel'
import { Footer } from './components/Footer'
import { Menu } from './components/Menu'
import { dadosIniciais } from './mock'
import { Container } from './styles'

export const App: FC = () => (
    <Container>
        <BannerMain
            videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
            url={dadosIniciais.categorias[0].videos[0].url}
            videoDescription="Ser programador nao é algo simples. Akita faz um overview sobre o mundo da programação e desmistifica muitas falacias sobre o que é ser um programador nos dias atuais."
        />

        <Menu />
        <Carousel
            ignoreFirstVideo={false}
            category={dadosIniciais.categorias[0]}
        />

        <Carousel
            ignoreFirstVideo={false}
            category={dadosIniciais.categorias[1]}
        />

        <Carousel
            ignoreFirstVideo={false}
            category={dadosIniciais.categorias[2]}
        />

        <Carousel
            ignoreFirstVideo={false}
            category={dadosIniciais.categorias[3]}
        />

        <Carousel
            ignoreFirstVideo={false}
            category={dadosIniciais.categorias[4]}
        />

        <Carousel
            ignoreFirstVideo={false}
            category={dadosIniciais.categorias[5]}
        />

        <Footer />
    </Container>
)
