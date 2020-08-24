import React from 'react'

import imginterior from '../img/photo1.png'
import imgauthor from '../img/photo2.png'

import styled from 'styled-components'

const Contentido = styled.div`
    display: grid;
    grid-template-columns: .45fr 1fr;
    grid-gap: 200px;

    @media only screen and (max-width: 1500px) {
        grid-gap: 100px;
    }

    @media only screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-gap: 30px;
    }
`

const Left = styled.div`
    display: grid;
    grid-gap: 40px;
    height: 300px;

    @media only screen and (max-width: 1024px) {
        grid-gap: 30px;
        height: 250px;
    }

    @media only screen and (max-width: 425px) {
        grid-gap: 0px;
        height: 200px;
    }

    h1 {
        font-family: Lora;
        font-size: 50px;
        font-weight: 300;

        @media only screen and (max-width: 1024px) {
            font-size: 40px;
        }

        @media only screen and (max-width: 425px)  {
            font-size: 30px;
        }

    }

    p {
        font-size: 22px;

        @media only screen and (max-width: 1024px) {
            font-size: 17px;
            width: 300px;
        }

        @media only screen and (max-width: 425px)  {
            font-size: 15px;
        }
    } 
`

const Btnreadmore = styled.button`
    font-size: 18px;
    border: none;
    background: none;
    color: #fff;
    text-align: left;
    font-family: Montserrat;
    font-weight: bold;
    cursor: pointer;
    outline: none;

    @media only screen and (max-width: 425px)  {
            font-size: 15px;
    }

    i {
        padding-left: 15px; 
        font-size: 22px;
        position: relative;
        top: 3px; 
    }
`

const Right = styled.div`
    position: relative; 

    img {
        width: 100%;
    }
`
const CardAuthor = styled.div`
    position: absolute;
    right: 5%;
    bottom: -50px;
    padding: 15px 30px;
    width: 450px;
    background: #181719;
    display: grid;
    grid-template-columns: 60px 1fr; 
    grid-template-areas: "img data" "img data" "desc desc";

    @media only screen and (max-width: 768px) {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        width: 360px;
        bottom: -80px;
    } 

    @media only screen and (max-width: 425px) {
        width: 85%;
        padding: 10px 20px;
    }

    img {
        grid-area: img;
        width: 50px;
        border-radius: 99px;

        @media only screen and (max-width: 768px) {
            width: 40px;
        }
    }

    div {
        grid-area: data;
        display: flex;
        padding-top: 7px;
        flex-direction: column;
        justify-content: space-around;
    }
    strong { 
        font-size: 13px;

        @media only screen and (max-width: 768px) {
            font-size: 12px;
        }
        
    }
    p { 
        font-size: 13px;
        opacity: .6; 

        @media only screen and (max-width: 768px) {
            font-size: 12px;
        }
    }
    h2 {
        grid-area: desc;
        font-family: Lora;
        margin-top: 20px;
        font-size: 22px;

        @media only screen and (max-width: 768px) {
            font-size: 20px;
        }
    }
`

const Content = () => {
    return ( 

        <Contentido>
            <Left>
                <h1>Modern interior</h1>
                <p>A full-Service residential & commercial interior desing and stating company offering professional organizing & eco-services</p>
                <Btnreadmore>Read more <i className="fas fa-long-arrow-alt-right"></i></Btnreadmore>
            </Left>
            <Right>
                <img src={imginterior} alt=""/>
                <CardAuthor>
                    <img src={imgauthor} alt=""/>
                    <div>
                        <strong>Aliza Webber</strong>
                        <p>Interior designer</p>
                    </div>
                    <h2>Designed in 2020 by <br/> Aliza Webber</h2>
                </CardAuthor>
            </Right>
        </Contentido>

     );
}
 
export default Content;