import React, { FC } from 'react';
import { ButtonLink } from './components/ButtonLink'
import Logo from '../../assets/img/Logo.png';
import './Menu.css'

export const Menu: FC = () => (
    <nav className="Menu">
        <a href="/">
            <img src={Logo} alt="Logo comedy flix" className="Logo" />
        </a>
        <ButtonLink className="ButtonLink" href="/">
            Novo vídeo
            </ButtonLink>
    </nav>
)
