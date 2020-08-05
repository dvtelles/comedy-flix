import React, { FC } from 'react';
import { PageDefault } from '../../../components/PageDefault'
import { Link } from 'react-router-dom';

export const CadastroVideo: FC = () => (
    <PageDefault>
        <div>
            <h1>Cadastro de Vídeo</h1>
        </div>
        <Link to="/cadastro/categoria">
            Cadastrar categoria.
        </Link>
    </PageDefault>
)