import React from 'react'
import Nav from './Nav'


import styled from 'styled-components'

const Head = styled.header`
    padding: 40px 0;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 425px)  {
        padding: 20px 0;
    }
`

const Logo = styled.div`
    font-family: 'Crimson Pro';
    border: 2px solid #fff;
    padding: 8px;
`



const Header = () => {
    return ( 

        <Head>
            <Logo>
                THIS INTERIOR
            </Logo>
            <Nav />
        </Head>

     );
}
 
export default Header;