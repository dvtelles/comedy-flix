import React, { FC } from 'react';
import { ButtonLink } from './components/ButtonLink'
import './Menu.css'

import styled from 'styled-components';
import LogoImg from '../../assets/img/Logo.png';

export const Logo = styled.img.attrs({
    alt: 'Logo comedy flix',
    src: LogoImg,
})`
  max-width: 168px;
`


export const Menu: FC = () => (
    <nav className="Menu">
        <a href="/">
            <Logo />
        </a>
        <ButtonLink href="/">
            Novo vídeo
        </ButtonLink>
    </nav>
)
