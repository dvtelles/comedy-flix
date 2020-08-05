import React, { FC } from 'react'

import { FooterBase, AluraLogo, AluraLogoLink } from './styles'

export const Footer: FC = () => {
    return (
        <FooterBase>
            <AluraLogoLink>
                <AluraLogo />
            </AluraLogoLink>
            <p>
                Orgulhosamente criado durante a{' '}
                <a href="https://www.alura.com.br/">Imersão React da Alura</a>
            </p>
        </FooterBase>
    )
}
