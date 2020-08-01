import React, { FC } from "react";
import { PageDefault } from "../../components/PageDefault";


export const Pagina404: FC = () => (
    <PageDefault>
        <h1>Ops... A Página que procura não foi encontrada</h1>
        <iframe
            title="Flappy Bird Game"
            src="https://mariosouto.com/flappy-bird-devsoutinho/"
            width="400"
            height="500" />
    </PageDefault>
)