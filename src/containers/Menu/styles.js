import styled from "styled-components";
import { Link } from "react-router-dom";

import bannerMenu from '../../assets/banner-menu.svg';
import BackgroundCarrossel from '../../assets/bg-form.png';

// Container principal da página de Menu - responsivo
export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${props => props.theme.secondWhite};
    overflow: hidden;
    background: linear-gradient(
        rgba(255, 255, 255, 0.6),
        rgba(255, 255, 255, 0.6)
    ),
     url('${BackgroundCarrossel}');
     background-size: contain;
     background-attachment: fixed;
     
     /* Ajusta background em mobile */
     @media (max-width: 768px) {
        background-attachment: scroll;
        background-size: cover;
     }
`;

// Banner principal do menu - responsivo
export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    position: relative;
    background: url('${bannerMenu}') no-repeat;
    background-position: center;
    background-size: cover;
    background-color: ${props => props.theme.mainBlack};
    
    /* Reduz altura em tablets */
    @media (max-width: 1024px) {
        height: 350px;
    }
    
    /* Reduz mais em mobile */
    @media (max-width: 768px) {
        height: 280px;
    }
    
    /* Dispositivos muito pequenos */
    @media (max-width: 480px) {
        height: 220px;
    }

    /* Botão de fechar (X) */
    a {
        font-size: 20px;
        color: ${props => props.theme.white};
        top: 10px;
        right: 20px;
        position: fixed;
        cursor: pointer;
        background-color: rgba(90, 90, 90, 0.2);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s;
        
        /* Ajusta tamanho em tablets */
        @media (max-width: 768px) {
            width: 36px;
            height: 36px;
            font-size: 18px;
            top: 8px;
            right: 15px;
        }
        
        /* Ajusta em mobile */
        @media (max-width: 480px) {
            width: 32px;
            height: 32px;
            font-size: 16px;
            top: 5px;
            right: 10px;
        }
        
        &:hover {
            color: ${props => props.theme.purple};
            background-color: rgba(90, 90, 90, 0.4);
        }
    }

    /* Título principal do banner */
    h1 {
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        line-height: 65px;
        color: ${props => props.theme.white};
        position: absolute;
        right: 20%;
        top: 30%;
        
        /* Reduz tamanho em tablets */
        @media (max-width: 1024px) {
            font-size: 56px;
            line-height: 50px;
            right: 15%;
        }
        
        /* Reduz mais em mobile */
        @media (max-width: 768px) {
            font-size: 40px;
            line-height: 35px;
            right: 10%;
            top: 25%;
        }
        
        /* Dispositivos muito pequenos */
        @media (max-width: 480px) {
            font-size: 28px;
            line-height: 25px;
            right: 5%;
            top: 30%;
        }
        
        span {
            display: block;
            color: ${props => props.theme.white};
            font-size: 20px;
            
            /* Reduz tamanho em mobile */
            @media (max-width: 768px) {
                font-size: 16px;
            }
            
            @media (max-width: 480px) {
                font-size: 12px;
            }
        }
    }
`;

// Menu de categorias - responsivo e horizontal
export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
    padding: 0 20px;
    flex-wrap: wrap;
    
    /* Reduz gap em tablets */
    @media (max-width: 768px) {
        gap: 30px;
        margin-top: 25px;
    }
    
    /* Reduz mais em mobile */
    @media (max-width: 480px) {
        gap: 20px;
        margin-top: 20px;
        padding: 0 10px;
    }
`;

// Botão de categoria responsivo
export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${props => props.$isActiveCategory ? `${props.theme.purple}` : `${props.theme.darkGray}`};
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && `3px solid ${props.theme.purple}`};
    transition: all 0.3s;
    white-space: nowrap;

    /* Reduz tamanho em tablets */
    @media (max-width: 768px) {
        font-size: 18px;
        padding-bottom: 4px;
        line-height: 16px;
    }

    /* Reduz mais em mobile */
    @media (max-width: 480px) {
        font-size: 14px;
        padding-bottom: 3px;
        line-height: 13px;
    }

    /* Efeito hover */
    &:hover {
        color: ${props => props.theme.purple};
    }
`;

// Container de produtos - grid responsivo
export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto;
    
    /* 2 colunas em tablets */
    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
        padding: 30px;
        margin: 40px auto;
    }
    
    /* 1 coluna em mobile */
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 30px;
        padding: 20px;
        margin: 30px auto;
    }
    
    /* Ajusta em dispositivos pequenos */
    @media (max-width: 480px) {
        gap: 20px;
        padding: 15px;
        margin: 20px auto;
    }
`;
