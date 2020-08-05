import styled from 'styled-components'
//  TODO: Criar tema.

export const FooterBase = styled.footer`
    background: var(--black);
    border-top: 2px solid var(--primary);
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 32px;
    padding-bottom: 32px;
    color: var(--white);
    text-align: center;
    @media (max-width: 800px) {
        margin-bottom: 50px;
    }
`

export const AluraLogo = styled.img.attrs({
    src: 'https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg',
    alt: 'Alura logo',
})``

export const AluraLogoLink = styled.a.attrs({
    href: 'https://www.alura.com.br',
    target: '_blank',
})``
