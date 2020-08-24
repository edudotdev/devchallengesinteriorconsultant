import React from 'react'

import styled from 'styled-components'

const Foot = styled.footer`
    padding: 40px 0;
    margin-top: 50px;
    text-align: center;

    @media only screen and (max-width: 425px)  {
        margin-top: 85px;
    }
    
    p {
        position: relative;
        width: 85%;
        margin: 0 auto;
        font-size: 15px;
        opacity: .8;
        padding-top: 15px;
        

        @media only screen and (max-width: 425px)  {
            border-top: 1px solid #ccc;
        }

    }

    p a {
        color: #fff;
        text-decoration: none;
    }
`

const Footer = () => {
    return ( 
        <Foot>
            <p>EduardoRL @ <a href="https://devchallenges.io/">DevChallenges.io</a></p>
        </Foot>
     );
}
 
export default Footer;