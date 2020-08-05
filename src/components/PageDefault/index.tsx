import React, {FC} from 'react'
import { Menu } from '../Menu';
import { Footer } from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color: #141414;
    color: var(--white);
    flex: 1 ;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;


const PageDefault:FC = ({children}) => (
    <>
        <Menu />
            <Main>
                {children}
            </Main>
        <Footer />
    </>
        
)

export {PageDefault};