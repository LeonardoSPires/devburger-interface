import styled from "styled-components";

// Imagem do produto no carrinho - responsiva
export const ProductImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 16px;
    object-fit: cover;
    
    /* Reduz tamanho em tablets */
    @media (max-width: 768px) {
        height: 60px;
        width: 60px;
        border-radius: 12px;
    }
    
    /* Reduz ainda mais em mobile */
    @media (max-width: 480px) {
        height: 50px;
        width: 50px;
        border-radius: 8px;
    }
`;

// Grupo de botões para aumentar/diminuir quantidade
export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        color: #fff;
        border-radius: 4px;
        background-color: ${props => props.theme.purple};
        transition: all 0.4s;
        border: none;
        cursor: pointer;
        font-weight: bold;

        &:hover {
            background-color: ${props => props.theme.secondDarkPurple};
        }
        
        /* Botões maiores em mobile para melhor acessibilidade */
        @media (max-width: 768px) {
            height: 28px;
            width: 28px;
            font-size: 14px;
        }
        
        @media (max-width: 480px) {
            height: 26px;
            width: 26px;
            font-size: 12px;
        }
    }
`;

// Mensagem de carrinho vazio - responsiva
export const EmptyCart = styled.p`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    padding: 40px 20px;
    color: #484848;
    
    /* Reduz tamanho do texto em tablets */
    @media (max-width: 768px) {
        font-size: 18px;
        padding: 30px 15px;
    }
    
    /* Texto menor em mobile */
    @media (max-width: 480px) {
        font-size: 16px;
        padding: 20px 10px;
    }
`;

// Preço total do produto - responsivo
export const ProductTotalPrice = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: #484848;
    white-space: nowrap;
    
    /* Ajusta tamanho em tablets */
    @media (max-width: 768px) {
        font-size: 14px;
    }
    
    /* Ajusta tamanho em mobile */
    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

// Ícone de lixeira para remover item
export const TrashImage = styled.img`
    height: 20px;
    width: 20px;
    cursor: pointer;
    transition: opacity 0.2s;
    
    /* Aumenta tamanho em mobile para melhor acessibilidade */
    @media (max-width: 768px) {
        height: 22px;
        width: 22px;
    }
    
    @media (max-width: 480px) {
        height: 18px;
        width: 18px;
    }
    
    /* Efeito hover */
    &:hover {
        opacity: 0.7;
    }
`;
