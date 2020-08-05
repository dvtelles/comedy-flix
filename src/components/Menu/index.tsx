import React, {FC} from 'react';
import {ButtonLink} from './components/ButtonLink';
import './Menu.css';
import { Link } from 'react-router-dom';
import { Logo } from '../shared/Logo';

export const Menu:FC = () => {

    return (
        <nav className="Menu">
            <Link to="/" >
                <Logo />
            </Link>
            <ButtonLink as={Link} to="/cadastro/video">
                Novo vídeo
            </ButtonLink>
        </nav>
    )

}
