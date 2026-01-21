import styled from "styled-components";

// Container principal do carrossel de ofertas
export const Container = styled.div`
    padding-left: 40px;
    padding-bottom: 40px;
    overflow-x: hidden;
    
    /* Garante visibilidade do carrossel */
    .react-multi-carousel-list {
        overflow: visible;
    }
    
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
        padding-bottom: 30px;
    }

    /* Ajusta em mobile */
    @media (max-width: 480px) {
        padding-left: 15px;
        padding-bottom: 20px;
    }
`;

// Título do carrossel de ofertas responsivo
export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: #61a120;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin: 70px 0;
    
    /* Reduz tamanho em tablets */
    @media (max-width: 768px) {
        font-size: 26px;
        margin: 50px 0;
        padding-bottom: 10px;
    }
    
    /* Reduz mais em mobile */
    @media (max-width: 480px) {
        font-size: 22px;
        margin: 40px 0;
        padding-bottom: 8px;
    }

    /* Linha decorativa */
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background: #61a120;
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
