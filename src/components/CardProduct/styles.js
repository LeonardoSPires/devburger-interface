import styled from "styled-components";

// Container do card do produto - responsivo
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    cursor: grab;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.55);
    position: relative;
    transition: transform 0.3s, box-shadow 0.3s;
    
    /* Efeito hover em desktop */
    @media (min-width: 769px) {
        &:hover {
            transform: translateY(-5px);
            box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.65);
        }
    }
    
    /* Ajusta padding em tablets */
    @media (max-width: 768px) {
        gap: 30px;
        padding: 16px;
        border-radius: 6px;
        box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.45);
    }
    
    /* Reduz mais em dispositivos móveis */
    @media (max-width: 480px) {
        gap: 20px;
        padding: 12px;
        border-radius: 6px;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.35);
    }

    /* Div interna com informações do produto */
    div {
        display: flex;
        width: 100%;
        height: 80px;
        flex-direction: column;
        justify-content: space-between;
        gap: 5px;
        
        /* Ajusta altura em tablets */
        @media (max-width: 768px) {
            height: 70px;
            gap: 4px;
        }
        
        /* Ajusta altura em mobile */
        @media (max-width: 480px) {
            height: 60px;
            gap: 3px;
        }

        /* Preço do produto */
        p {
            font-size: 18px;
            color: ${props => props.theme.orange};
            line-height: 25px;
            font-weight: 700;
            margin-top: 40px;
            
            /* Reduz tamanho em tablets */
            @media (max-width: 768px) {
                font-size: 16px;
                line-height: 22px;
                margin-top: 30px;
            }
            
            /* Reduz mais em mobile */
            @media (max-width: 480px) {
                font-size: 14px;
                line-height: 18px;
                margin-top: 20px;
            }
        }

        /* Nome do produto */
        strong {
            font-size: 22px;
            color: ${props => props.theme.black};
            font-weight: 800;
            line-height: 20px;
            
            /* Reduz tamanho em tablets */
            @media (max-width: 768px) {
                font-size: 18px;
                line-height: 18px;
            }
            
            /* Reduz mais em mobile */
            @media (max-width: 480px) {
                font-size: 15px;
                line-height: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
            }
        }
    }
`;

// Imagem do produto - posicionada sobre o card
export const CardImage = styled.img`
    height: 100px;
    position: absolute;
    top: -50px;
    object-fit: contain;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));

    /* Reduz tamanho em tablets */
    @media (max-width: 768px) {
        height: 80px;
        top: -40px;
    }

    /* Reduz ainda mais em mobile */
    @media (max-width: 480px) {
        height: 70px;
        top: -35px;
    }
`;

