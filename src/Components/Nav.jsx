import React, {useState, useEffect} from 'react'
import Navitems from './Navitems'

import styled from 'styled-components'

const BtnIcon = styled.span`
    display:flex; 
    align-items: center;
    z-index: 10;

    span {
        font-size: 25px;
    }
`

const Nav = () => {

    const [ancho, setAncho] = useState (window.innerWidth)
    const [responsive ,setResopnsive] = useState(null)
    const [showmenu, setShowmenu] = useState(false)

    const calcularAncho = () => {
        setAncho(window.innerWidth) 
    }

    const handleClick = () => {
        setShowmenu(!showmenu)

        if(!showmenu) {
            document.querySelector('body').style.overflowY = "hidden"
        }else {
            document.querySelector('body').style.overflowY = "auto"
        }
    }
    
    useEffect(() => {
        window.addEventListener('resize', calcularAncho)

        if(ancho <= 1024) {
            setResopnsive(true)
        }else {
            setResopnsive(false)
        }

        if(ancho > 1024) {
            setShowmenu(false)
        }

    }, [ancho])
            
    return ( 
        <>
            {responsive ? 
                <BtnIcon onClick={handleClick}>
                    <span className={showmenu ? "fas fa-times" : "fas fa-bars"}></span>
                </BtnIcon> : 
                <Navitems />
            }

            {showmenu ? <Navitems /> : null}  
        </>
     );
}
 
export default Nav;