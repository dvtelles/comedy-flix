import React, {FC} from 'react';
import {ButtonLink} from './components/ButtonLink';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import { Link } from 'react-router-dom';

export const Menu:FC = () => {

    return (
        <nav className="Menu">
            <Link to="/" >
                <img src={Logo} alt="Logo comedy flix" className="Logo"/>
            </Link>
            <ButtonLink className="ButtonLink" href="/cadastro-video">
                Novo vídeo
            </ButtonLink>
        </nav>
    )

}
