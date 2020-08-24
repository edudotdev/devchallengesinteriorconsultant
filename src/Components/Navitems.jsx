import React from 'react'

import styled from 'styled-components'

const NavBar = styled.nav`
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media only screen and (max-width: 1024px) {
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #181719;
        z-index: 2;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

`

const A = styled.a`
    color: #fff;
    text-decoration: none; 

    @media only screen and (max-width: 1024px) {
        padding: 20px;
        font-size: 22px;
    }
    
`

const Navitems = () => {
    return ( 
        <NavBar>
            <A className="txt_active" href="!#">Home</A>
            <A href="!#">Collection</A>
            <A href="!#">About</A>
            <A href="!#">Contact</A>
        </NavBar>
     );
}
 
export default Navitems;