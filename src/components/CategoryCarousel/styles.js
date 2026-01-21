import { Link } from "react-router-dom";
import styled from "styled-components";

// Container principal do carrossel de categorias
export const Container = styled.div`
    padding-left: 40px;
    padding-right: 0;
    
    /* Carrossel item com espaçamento */
    .carousel-item {
        padding-right: 40px;
        
        /* Reduz padding em tablets */
        @media (max-width: 768px) {
            padding-right: 20px;
        }
        
        /* Reduz mais em mobile */
        @media (max-width: 480px) {
            padding-right: 15px;
        }
    }

    /* Ajusta padding geral em tablets */
    @media (max-width: 768px) {
        padding-left: 20px;
        padding-right: 0;
    }

    /* Ajusta em mobile */
    @media (max-width: 480px) {
        padding-left: 15px;
    }
`;

// Título do carrossel responsivo
export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: ${props => props.theme.purple};
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-bottom: 40px;
    margin-top: 20px;
    
    /* Reduz tamanho em tablets */
    @media (max-width: 768px) {
        font-size: 26px;
        margin-bottom: 30px;
        padding-bottom: 10px;
    }
    
    /* Reduz mais em mobile */
    @media (max-width: 480px) {
        font-size: 22px;
        margin-bottom: 20px;
        margin-top: 15px;
        padding-bottom: 8px;
    }

    /* Linha decorativa */
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background: ${props => props.theme.purple};
        left: calc(50% - 28px);
        
        /* Ajusta largura em tablets */
        @media (max-width: 768px) {
            width: 44px;
            left: calc(50% - 22px);
            height: 3px;
        }
        
        /* Ajusta em mobile */
        @media (max-width: 480px) {
            width: 36px;
            left: calc(50% - 18px);
            height: 2px;
        }
    }
`;

// Container dos itens com imagem de fundo
export const ContainerItems = styled.div`
    background: url('${(props) => props.imageurl}');
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    border-radius: 15px;
    display: flex;
    align-items: center;
    padding: 20px 0px;
    height: 300px;
    width: 100%;
    position: relative;
    
    /* Ativa background local em mobile para melhor performance */
    @media (max-width: 768px) {
        background-attachment: scroll;
        height: 250px;
        border-radius: 12px;
    }
    
    /* Reduz altura em mobile pequeno */
    @media (max-width: 480px) {
        height: 200px;
        border-radius: 8px;
        padding: 15px 0;
    }
`;

// Botão de categoria responsivo
export const CategoryButton = styled(Link)`
    color: #fff;
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 22.5px;
    font-weight: 500;
    background-color: rgba(0, 0, 0, 0.5);
    margin-top: 50px;
    text-decoration: none;
    transition: all 0.3s;
    cursor: pointer;
    display: inline-block;
    
    /* Reduz padding e tamanho em tablets */
    @media (max-width: 768px) {
        padding: 8px 24px;
        font-size: 18px;
        margin-top: 35px;
        border-radius: 25px;
    }
    
    /* Reduz mais em mobile */
    @media (max-width: 480px) {
        padding: 8px 20px;
        font-size: 14px;
        margin-top: 25px;
        border-radius: 20px;
    }

    /* Efeito ao passar o mouse */
    &:hover {
        background-color: ${props => props.theme.secondDarkPurple};
        transform: scale(1.05);
    }
    
    /* Desativa transform em mobile */
    @media (max-width: 480px) {
        &:hover {
            transform: none;
        }
    }
`;
