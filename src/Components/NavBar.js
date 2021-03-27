import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import signImg from '../image/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    dispay: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const H2 = styled.h2`
    font-size: 15px;
    font-family: Roboto, sans-serif;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const Container = styled.div`
    position: relative;
    margin-left: auto;
    text-align: center;
`;

const ImgSign = styled.img`
`;

const Button = styled.button``;


export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>MrDonald's</H1>
            <Container>
                <ImgSign src={signImg} alt="sign"/>
                <H2>Sign in</H2> 
            </Container>
        </Logo>   
    </NavBarStyled>
)